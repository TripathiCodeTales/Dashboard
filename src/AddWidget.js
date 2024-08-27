import React,{useState} from "react";
import { Button, ThemeProvider } from "@mui/material";
import Card from '@mui/material/Card';
import theme from "./Theme";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import TemporaryDrawer from "./TemporaryDrawer"; // Adjust the import path as necessary



const AddWidget = () => {
  const [drawer, setDrawer] = useState(false);

  const handleOnClick = () => {
    setDrawer(true);
  };

  const handleCloseDrawer = () => {
    setDrawer(false);
  };
  return (

    <Card sx={{
      backgroundColor: theme.palette.background.default,
      m: 1,
      borderRadius: 3,
      flex: 1,
      width: "100%",
      height: 210,
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
            <Button variant="outlined" startIcon={<AddIcon />} sx={{ backgroundColor: theme.palette.background.default }} onClick={handleOnClick}>Add widget</Button>

          </Typography>
        </CardContent>
      </Box>
      <TemporaryDrawer isTrue={drawer} onClose={handleCloseDrawer} />
    </Card>

  )
}
export default AddWidget;