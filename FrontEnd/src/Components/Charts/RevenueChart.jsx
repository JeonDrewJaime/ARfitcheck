import React from 'react'
import { Grid, Box, Typography } from '@mui/material'; 
import { LineChart } from '@mui/x-charts/LineChart';

function RevenueChart() {
  return (
    <Box sx={{ bgcolor: 'white', padding: '20px', borderRadius: 5}}>
    <Typography variant="h5" sx={{ fontFamily: 'Kanit', fontWeight: 'bold', color: 'black', marginBottom: '20px', textAlign: 'center' }}>
      REVENUE CHART
    </Typography>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      fullWidth
      height={500}
    />
  </Box>
  )
}

export default RevenueChart
