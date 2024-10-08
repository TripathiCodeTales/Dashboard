import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SvgIcon } from "@mui/material";
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import CardComponent from "./CardComponent";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme.js";
import AddWidget from "./AddWidget.js";
import RiskAssessmentBar from "./RiskAssessmentBar.js";
import DrawerComp from "./TemporaryDrawer.js";

const Content = ({handleOnChange,detail}) => {
    console.log(detail);
    const [days, setDays] = useState("");
    // const detail = {
    //     data: [
    //         { id: 0, value: 50, label: 'connected' , isChecked: 'true'},
    //         { id: 1, value: 50, label: 'not connected', isChecked: 'true'},
    //         // {id:2, value:10, label:'unconnected', isChecked:'false'},
    //         // {id:3, value:40, label: 'somewhat connected', isChecked:'false'}
    //     ],
        
    //     data2: [
    //         { id: 0, value: 1689, label: 'passed',isChecked:'true' },
    //         { id: 1, value: 36, label: 'Not available',isChecked:'true' },
    //         { id: 2, value: 68, label: 'warning',isChecked:'true' },
    //         { id: 3, value: 1689, label: 'failed',isChecked:'true' },
    //         // {id:4, value:100, label:'maybe passed', isChecked:'false'},
    //         // {id:5, value:400, label: 'unconnected', isChecked:'false'}
    //     ], 
    //     data3:[
    //         {id:0, value:10, label:'unconnected'},
    //         {id:1, value:40, label: 'somewhat connected'},
    //         {id:2, value:50, label:'connects'}
    //     ]
    // }
    console.log('heck'+JSON.stringify(detail));
    const handleChange = (e) => {
        
        setDays(e.target.value)
    }

    return (
        
        <ThemeProvider theme={theme}>
           <Box sx={{backgroundColor: theme.palette.background.paper}}>
            <Box sx={{ paddingTop: 5 }} display="flex" justifyContent={"space-between"}>

                <div className="small-head">
                      CNAPP dashboard
                </div>
                <div className="sideHeader">
                    <div className="sideHeader-item">
                        <Button variant="outlined" endIcon={<AddIcon />} sx={{ backgroundColor: theme.palette.background.default }}>Add widget</Button>
                    </div>
                    <div className="sideHeader-item">
                        <Button variant="outlined" sx={{ backgroundColor: theme.palette.background.default }}><AutorenewIcon /></Button>
                    </div>
                    <div className="sideHeader-item">
                        <Button variant="outlined" sx={{ backgroundColor: theme.palette.background.default }}><MoreVertIcon /></Button>
                    </div>
                    <div className="sideHeader-item">
                        <SvgIcon sx={{ backgroundColor: theme.palette.background.default }}><AccessTimeFilledOutlinedIcon /></SvgIcon>
                    </div>
                    <div className="sideHeader-item">
                        <Select labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={2} variant="outlined"
                            sx={{ backgroundColor: theme.palette.background.default }}
                            onChange={handleChange}>
                            <MenuItem value={2}>Last 2 days</MenuItem>
                            <MenuItem value={7}>last 7 days</MenuItem>
                            <MenuItem value={15}>last 15 days</MenuItem>
                        </Select>
                    </div>



                </div>
            </Box>

            <p className='small-head-crd'>CSPM Executive Dashboard</p>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', width: '100%',
                    gap: 1.5, marginLeft: 3.5

                }}>
                <Box sx={{
                    width: '32%'
                }}>
                    <CardComponent data={detail.CSPM.widget1}
                     Header="Cloud Accounts"  />
                     
                    
                </Box>
                <Box sx={{
                    width: '32%'
                }}>
                    <CardComponent data={detail.CSPM.widget2} Header="Cloud Account Risk Assessment" />
                </Box>
                <Box sx={{
                    width: '32%'
                }}>
                    <CardComponent data={detail.CSPM.widget3} Header="Cloud Account Risk Assessment" />
                </Box>
                <Box sx={{
                    width: '32%', height: '100px'
                }}>
                    <AddWidget detail={detail.CSPM} handleOnChange={handleOnChange}/>
                </Box>
            </Box>
            <br />
            <br />

            <p className='small-head'>CWPP Dashboard:</p>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row', width: '100%',
                gap: 1.5, marginLeft: 3.5,
                flexWrap: 'wrap'
            }}>
                <Box sx={{
                    flexDirection: 'column', flexWrap: 'wrap', gap: 2, width: '32%'
                }}>
                    <CardComponent Header="Top 5 Namespace Specific Alerts" noContent="No Graph Data Available" />
                </Box>
                <Box sx={{
                    flexDirection: 'column', flexWrap: 'wrap', gap: 2, width: '32%'
                }}>
                    <CardComponent Header="Workload Headers" noContent="No Graph Data Available" />
                </Box>
                <Box sx={{
                    flexDirection: 'column', flexWrap: 'wrap', gap: 2, width: '32%', height: '100px'
                }}>
                    <AddWidget detail={detail.CSPM}/>
                </Box>
            </Box>
            <p className='small-head-crd'>Registry Scan</p>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', width: '100%',
                    gap: 1.5, marginLeft: 3.5

                }}>
                <Box sx={{
                    width: '32%'
                }}>
                    <CardComponent data={detail.data} Header="Image Risk Assessment" />
                </Box>
                <Box sx={{
                    width: '32%'
                }}>
                    <CardComponent data={detail.data2} Header="Image Security Issue" />
                </Box>
                <Box sx={{
                    width: '32%', height: '100px'
                }}>
                    <AddWidget />
                    {/* <RiskAssessmentBar /> */}
                    <DrawerComp />
                </Box>
            </Box>
            </Box>
        </ThemeProvider>
    )
}
export default Content;