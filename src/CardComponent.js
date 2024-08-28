import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieCharts from "./PieCharts.js";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.js";
import NoContent from "./NoContent.js";

const CardComponent = ({data,Header,noContent}) => {
    debugger;
    // console.log(data);
   let finalData= data?.filter((dat)=> dat.isChecked == 'true')
    // console.log(finalData)
    return(
            <Card variant="outlined" sx={{ backgroundColor: theme.palette.background.default, m:1, borderRadius:3, flex:1, minWidth:0,  
    //    minWidth:"255px"
        }}>
            <CardContent className="small-head">
                {Header}
            <Typography variant="h6" component="div">
            {data ? 
            <PieCharts data = {finalData}/> : <NoContent noContent={noContent}/>}
             
          
          
        </Typography>
                </CardContent>
            </Card>
    )
}
export default CardComponent;