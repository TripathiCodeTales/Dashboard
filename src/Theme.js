import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main:  '#000000', // Custom primary color
      },
      secondary: {
        main: '#949494', 
        default:'#808080'// Custom secondary color grey
      },
      background: {
        default: '#ffffff',
        secondary:' #000080', //blue
        paper: ' #e6f9ff',// Custom background color
      },
      text: {
        primary: '#333333', // Custom text color
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
      },
      body1: {
        fontSize: '1rem',
      },
    },
  });
  
  export default theme;