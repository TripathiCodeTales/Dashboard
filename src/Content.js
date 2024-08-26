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



const Content = () => {
    const [days, setDays] = useState("");

    const detail = {
        data: [
            { id: 0, value: 50, label: 'connected' },
            { id: 1, value: 50, label: 'not connected' },
        ],
        data2: [
            { id: 0, value: 1689, label: 'passed' },
            { id: 1, value: 36, label: 'Not available' },
            { id: 2, value: 68, label: 'warning' },
            { id: 3, value: 1689, label: 'failed' },
        ]
    }
   console.log(detail.data2)
    const handleChange = (e) => {
        setDays(e.target.value)
    }
    return (
            <ThemeProvider theme = {theme}>
           
            <Box sx={{ padding: 2}} display="flex"
          justifyContent="space-between">

            <div>
                <p className="small-head" >CNAPP dashboard</p> 
                </div>
                <div>
                
                <Button variant="outlined" endIcon={<AddIcon />} sx={{backgroundColor: theme.palette.background.default}}>Add widget</Button>
                <Button variant="outlined" sx={{backgroundColor: theme.palette.background.default}}><AutorenewIcon /></Button>
                <Button variant="outlined"sx={{backgroundColor: theme.palette.background.default}}><MoreVertIcon /></Button>
                
                    <SvgIcon sx={{backgroundColor: theme.palette.background.default}}><AccessTimeFilledOutlinedIcon /></SvgIcon>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={2} variant="outlined" 
                        sx={{backgroundColor: theme.palette.background.default}}
                        onChange={handleChange}>
                        <MenuItem value={2}>Last 2 days</MenuItem>
                        <MenuItem value={7}>last 7 days</MenuItem>
                        <MenuItem value={15}>last 15 days</MenuItem>
                    </Select>
                   
                
</div>
                </Box>
                
               <p className='small-head'>CSPM Executive Dashboard</p>
                <Box
             sx={{
                display: 'flex',
                flexDirection: 'row' ,flexWrap:'nowrap',gap:2, flex:1, width:'100%'}}>
                   <Box sx={{
                display: 'flex',
                flexDirection: 'column' ,flexWrap:'wrap',gap:2, width:'33%'}}>
            <CardComponent data={detail.data} Header="Cloud Accounts"/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column' ,flexWrap:'wrap',gap:2, width:'33%'}}>
            <CardComponent data={detail.data2} Header="Cloud Account Risk Assessment"/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column' ,flexWrap:'wrap', width:'33%', gap:2}}>
            <AddWidget />
            </Box>
            </Box>
            <br />
            <br />

            <p className='small-head'>CWPP Dashboard:</p>
          <Box  sx={{
                display: 'flex',
                flexDirection: 'row' ,flexWrap:'wrap', width:'100%'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column' ,flexWrap:'wrap',gap:2 ,width:'33.33%'}}>
            <CardComponent Header="Top 5 Namespace Specific Alerts" noContent="No Graph Data Available"/>
           </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column' ,flexWrap:'wrap',gap:2 ,width:'33.33%'}}>
            <CardComponent Header="Workload Headers" noContent="No Graph Data Available"/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column' ,flexWrap:'wrap',gap:2 ,width:'33.33%'}}>
            <AddWidget />
            </Box>
        </Box>
        </ThemeProvider>
    )
}
export default Content;