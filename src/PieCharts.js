import React from "react";
// import { PieChart } from '@mui/x-charts';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import theme from "./Theme.js";
import { PieChart } from '@mui/x-charts/PieChart';

const size ={
  width:400,
          height:150
}
const PieCharts = ({ data }) => {
 
  return (
    
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 48,
          },
        ]} 
        {...size}
        >
        
      
      <PieCenterLabel>
        {/* {data} */}
        Total
        </PieCenterLabel>
        </PieChart>
  )
}
export default PieCharts;

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText>
      {children}
    </StyledText>
  );
}

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.primary.main,
  textAnchor: 'middle',
  dominantBaseline: 'middle',
}));  