import React from 'react';
import { Avatar, Box, Typography, Grid } from '@mui/material';

const Details = ({ avatarUrl, name, email }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: 2,
        borderRadius: 2,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        width: "100%",
        margin: '0 auto',
       
      }}
    >
      <Grid container alignItems="center"  spacing={2}>
        <Grid item>
          <Avatar
            alt="Avatar"
            src={avatarUrl}
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </Grid>
        <Grid item>
        <Typography sx={{ fontFamily: 'Kanit', fontSize: 30, fontWeight: 'bold', color: 'black' }}>
        {name}
          </Typography>
          
          <Typography sx={{ fontFamily: 'InTer', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
        {email}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
