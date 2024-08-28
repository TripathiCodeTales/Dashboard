import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button, Stack, SvgIcon } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme.js";
import AddWidgetTab from "./AddWidgetTab.js";

export default function WidgetDrawer({onClose,handleOnChange,detail}) {


const handleOnClick =() => {
 onClose()
}

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default }}>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: theme.palette.background.secondary, padding: 0 }}>
                        <Typography component="div" sx={{ flexGrow: 1, marginLeft: 3 }} >
                            AddWidget
                        </Typography>

                        <div>
                            <IconButton
                                size="large"

                                aria-controls="menu-appbar"
                                aria-haspopup="true"

                                color="inherit" onClick={handleOnClick}
                            >
                                <ClearIcon />
                            </IconButton>

                        </div>
                    </Toolbar>

                </AppBar>
                <p className="paddingminor">Personalise the dashboard by adding the following widget</p>
                <AddWidgetTab onClose = {handleOnClick} handleOnChange={handleOnChange} detail={detail}/>

            </Box>
        </ThemeProvider>
    );
}


