import React from "react";
import SearchBar from "./SearchBar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import Drawer from '@mui/material/Drawer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.js";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Header = () => {

    return (
        <div>
            <ThemeProvider theme = {theme}>
                <Stack direction="row" sx={{ minWidth: 0 }}
                    spacing={{ xs: 10, sm: 10, md: 40 }} style={{ backgroundColor: theme.palette.background.default, padding: '10px' }}>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color={theme.palette.secondary.main}>
                            home
                       {/* <svgIcon><KeyboardArrowRightIcon sx={{marginTop:'2%'}} /></svgIcon> */}
                        </Link>
                        <Typography>dashboard</Typography>
                    </Breadcrumbs>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search anything ..."
                            inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                    <Stack direction="row" spacing={6} style={{color:theme.palette.secondary.main}} >
                        <svgIcon><KeyboardArrowDownIcon /></svgIcon>
                        <svgIcon><NotificationsActiveIcon /></svgIcon>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </div>
    )
}

export default Header;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.main,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '25%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.palette.secondary.main,

}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,

    '&:hover': {
        backgroundColor: theme.palette.background.paper,
    },
    marginRight: theme.spacing(10),
    marginLeft: 0,
    width: '30%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        //   width: 'auto',
    },
}));





// const theme = createTheme({
//     palette: {
//         // mode: "dark",
//         grey: {
//             main: grey[300],
//             dark: grey[400]
//         }
//     }
// });