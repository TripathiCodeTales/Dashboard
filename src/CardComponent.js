import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieCharts from "./PieCharts.js";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.js";
import NoContent from "./NoContent.js";

const CardComponent = ({data,Header,noContent}) => {
    // const detail = {
    // data:[
    //     { id: 0, value: 50, label: 'connected' },
    //     { id: 1, value: 50, label: 'not connected' },
    //   ],
    // }
    return(
            <Card variant="outlined" sx={{ backgroundColor: theme.palette.background.default, m:1, borderRadius:3, flex:1, minWidth:0,  
    //    minWidth:"255px"
        }}>
            <CardContent className="small-head">
                {Header}
            <Typography variant="h6" component="div">
            {data ? 
            <PieCharts data = {data}/> : <NoContent noContent={noContent}/>}
          
          
          
        </Typography>
                </CardContent>
            </Card>
    )
}
export default CardComponent;