import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme.js";
import { Button } from '@mui/material';
import { styled } from '@mui/material';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import { useState } from 'react';

export default function AddWidgetTab({ onClose, handleOnChange, detail }) {
    const [value, setValue] = React.useState('1');
    debugger;
    // Initialize state to have all widgets checked by default

    const [checkedWidgets, setCheckedWidgets] = useState(true);
   
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOnClick = () => {
        onClose()
    }

    // const handleOnChange = (event) => {
    //     if(event.target.checked== true){
    //     alert("hi")
    //     }
    // }
    // Function to render widgets
    // Handle checkbox change
    const handleCheckboxChange = (event, widgetName) => {
        debugger;
        // setCheckedWidgets(prevState => ({
        //     ...prevState,
        //     [widgetName]: !prevState[widgetName]
        // }));
        handleOnChange(event,widgetName)
    };

    console.log('datils are : ' + detail.CSPM);
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', typography: 'body1', backgroundColor: theme.palette.background.default }}>

                <TabContext value={value} sx={{ width: '100%', backgroundColor: theme.palette.background.default }}>
                    <Box sx={{ borderBottom: 1 }}>
                        <TabList onChange={handleChange}>
                            <Tab label="CSPM" value="1" />
                            <Tab label="CWPP" value="2" />
                            <Tab label="Image" value="3" />
                            <Tab label="Ticket" value="4" />

                        </TabList>
                    </Box>
                    <div style={{ height: '72vh' }}>
                        <TabPanel value="1" sx={{ backgroundColor: theme.palette.background.default }}>
                            <Stack spacing={2} sx={{ backgroundColor: theme.palette.background.default }}>

                                <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                    {/* <span>
                              <Checkbox onChange={(event)=>handleOnCheck(event)}/>
                              Widget1

                              </span> */}
                                    {/* new way */}
                                    {Object.entries(detail).map(([widgetName, widgetData]) => (
                                        <div key={widgetName}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={widgetData[0].isChecked}
                                                    onChange={(event) => handleCheckboxChange(event,widgetName)}
                                                />
                                                {widgetName}
                                            </label>
                                        </div>
                                    ))}
                                    {/* {detail.CSPM}
                              <label>
                                <input type='checkbox' onClick={(event) => handleOnChange(event,item)}/>
                                {detail.CSPM.widget1?'Widget1':null}
                                </label> */}
                                </Card>
                                <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                    <span>
                                        <Checkbox />
                                    </span>
                                    Widget2
                                </Card>

                            </Stack>
                        </TabPanel>
                        <TabPanel value="2">
                            <Stack spacing={2}>
                                <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                    Widget1
                                </Card>
                                <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                    Widget2
                                </Card>
                            </Stack>
                        </TabPanel>
                        <TabPanel value="3"><Stack spacing={2}>
                            <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                Widget1
                            </Card>
                            <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                Widget2
                            </Card>
                        </Stack></TabPanel>
                        <TabPanel value="4"><Stack spacing={2}>
                            <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                Widget1
                            </Card>
                            <Card sx={{ borderColor: theme.palette.secondary.default }} className='paddingminor panel'>
                                Widget2
                            </Card>
                        </Stack></TabPanel>
                    </div>
                    {/* </div> */}
                </TabContext>
                <div style={{ textAlign: 'right' }}>
                    {/* <Button sx={{borderColor:'blue','&:hover': {
            borderColor: 'darkred', // Optional: change border color on hover
          }, backgroundColor:'white', }} variant="contained">confirm</Button> */}
                    <CustomButton variant="outlined" sx={{ borderRadius: 2 }}>Confirm</CustomButton>
                    <Button onClick={handleOnClick} variant='contained' sx={{ borderRadius: 2, backgroundColor: theme.palette.background.secondary, '&:hover': { backgroundColor: theme.palette.background.default, color: theme.palette.primary.main, borderColor: theme.palette.background.secondary, borderStyle: 'solid', transition: 'border-color 0.3s ease' } }}>cancel</Button>

                </div>
            </Box>
        </ThemeProvider>
    );
}

const CustomButton = styled(Button)({
    borderColor: theme.palette.background.secondary, // Set the border color
    '&:hover': {
        borderColor: theme.palette.background.secondary,
        backgroundColor: theme.palette.background.secondary,
        color: 'white'// Change border color on hover
    },
    backgroundColor: 'white', // Set background color
    borderStyle: 'solid', // Ensure border style is solid
    marginRight: '3%',
});