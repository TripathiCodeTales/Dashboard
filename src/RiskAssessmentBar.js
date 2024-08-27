
    import React from 'react';
    import { Box, Typography } from '@mui/material';
    
    const BugBar = () => {
      // Define categories with their respective colors and percentages
      const categories = [
        { color: 'red', percentage: 40, label: 'Critical' },
        { color: 'orange', percentage: 20, label: 'Not Critical' },
        { color: 'yellow', percentage: 30, label: 'Warning' },
        { color: 'purple', percentage: 10, label: 'Urgent' },
      ];
    
      return (
        <Box sx={{ width: '100%', padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Bug Distribution
          </Typography>
          <Box sx={{ display: 'flex', height: 20, width: '100%', borderRadius: 1, overflow: 'hidden' }}>
            {categories.reduce((acc, category, index) => {
              const start = acc;
              const end = start + category.percentage;
    
              return (
                <Box
                  key={index}
                  

                  sx={{
                    width: `${category.percentage}%`,
                    backgroundColor: category.color,
                    height: '100%',
                    position: 'relative',
                    '&:first-of-type': {
                      borderTopLeftRadius: 1,
                      borderBottomLeftRadius: 1,
                    },
                    '&:last-of-type': {
                      borderTopRightRadius: 1,
                      borderBottomRightRadius: 1,
                    },
                  }}
                />
              );
            }, 0)}
          </Box>
        </Box>
      );
    };
    
    
   


export default BugBar;