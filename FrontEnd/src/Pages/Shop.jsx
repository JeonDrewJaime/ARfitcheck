import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
function Shop() {
  return (
    <div>
       <Grid container spacing={3} sx = {{mt: 5}}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Product 1</Typography>
          <Typography variant="body1">Description of Product 1</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Product 2</Typography>
          <Typography variant="body1">Description of Product 2</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Product 3</Typography>
          <Typography variant="body1">Description of Product 3</Typography>
        </Paper>
      </Grid>
      {/* Add more Grid items as needed */}
    </Grid>
    </div>
  )
}

export default Shop
