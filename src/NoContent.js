import React from "react"; 
import Card from '@mui/material/Card';
import theme from "./Theme";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NoContent = ({noContent}) => {
    return(
        <Card variant="outlined"  sx={{ 
            backgroundColor: theme.palette.background.default, 
            m: 1, 
            borderRadius: 3, 
            flex: 1, // Ensures it takes up equal space
            minWidth: 0, // Prevents overflow
          }}>
        <Box sx={{ 
        borderRadius: 3, 
        
        height: '100%', 
        display:'flex',
        alignItems:'center',
        justifyContent:'center', // Ensures height fills the Card
      }}> 
            <CardContent>
            <Typography>
     {noContent}
       
       </Typography>
       </CardContent>
       </Box>
        </Card>
    )
}
export default NoContent;
 