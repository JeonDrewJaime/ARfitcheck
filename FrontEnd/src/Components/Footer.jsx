import React from 'react';
import { Grid, Typography, ThemeProvider } from '@mui/material';

import { createTheme } from '@mui/material/styles';

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';

//Form Validations

const theme = createTheme();

const Footer = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: '#212930', padding: '10px 0', color: "white" }}>
          <Grid container >
            {/* Contact Grid */}

            <Grid item xs={3} >
            <img src = "../src/assets/Logo.jpg" width={220} height={90}   />
            </Grid>
            <Grid item xs={3} >
            <Typography sx={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 'bold', color: "white" }}>
                Contacts
              </Typography>
              <Typography sx={{ fontSize: 10, fontFamily: 'Inter', fontWeight: 'Regular',color: "white"  }}>
                <p>Address: 123 Main Street, City, Country</p>
                <p>Phone: +123456789</p>
                <p>Email: info@example.com</p>
              </Typography>
            </Grid>
            {/* Links Grid */}
            <Grid item xs={3} >
              <Typography sx={{  fontSize: 20, fontFamily: 'Inter', fontWeight: 'bold', color: "white" }}>
                Links
              </Typography>
              <Typography sx={{fontSize: 10, fontFamily: 'Inter', fontWeight: 'Regular',color: "white" }}>
                <a href="https://www.facebook.com/bmic.clothing" style={{ textDecoration: 'none', color: 'inherit', fontSize: 10 }} target= "_blank"><FacebookIcon sx = {{ fontSize: 20}}/>Mamamo</a><br></br>
                <a href="https://www.facebook.com/bmic.clothing" style={{ textDecoration: 'none', color: 'inherit', fontSize: 10 }} target= "_blank"><FacebookIcon sx = {{ fontSize: 20}}/></a> <br></br>
                <a href="https://www.facebook.com/bmic.clothing" style={{ textDecoration: 'none', color: 'inherit', fontSize: 10 }} target= "_blank"><FacebookIcon sx = {{ fontSize: 20}}/></a> <br></br>
                </Typography>
            </Grid>
            {/* Privacy Policy Grid */}
            <Grid item xs={3} >
            <Typography sx={{  fontSize: 20, fontFamily: 'Inter', fontWeight: 'bold', color: "white" }}>
                Privacy & Policy
              </Typography>
            </Grid>
          </Grid>
          {/* Copyright */}
          <Typography sx={{ fontSize: 15, fontFamily: 'Inter', fontWeight: 'Bold' }} align="center">
            POWERED BY
          </Typography>
          <Typography sx={{ fontSize: 10, fontFamily: 'Inter', fontWeight: 'lIGHT' }} align="center">
            Pseudocock
          </Typography>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
