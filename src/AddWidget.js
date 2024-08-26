import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import Card from '@mui/material/Card';
import theme from "./Theme";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';



const AddWidget = () => {

  return (

    <Card sx={{
      backgroundColor: theme.palette.background.default,
      m: 1,
      borderRadius: 3,
      flex: 1, // Ensures it takes up equal space
      width: "100%",
      // width: '120', // Make sure it takes full width of its container
      // maxWidth: '100%', // Set a max width for larger screens
      height: 200,
    }}>
      <Box sx={{
        borderRadius: 3,

        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        // maxWidth: '255px'// Ensures height fills the Card
      }}>
        <CardContent>
          <Typography varient="h6">
            <Button variant="outlined" startIcon={<AddIcon />} sx={{ backgroundColor: theme.palette.background.default }}>Add widget</Button>

          </Typography>
        </CardContent>
      </Box>
    </Card>

  )
}
export default AddWidget;