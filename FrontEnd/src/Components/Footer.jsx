import React from 'react';
import { Grid, Typography, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';

const theme = createTheme();

const Footer = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: '#212930', padding: '10px 0', color: 'white', zIndex: 3 }}>
          <Grid container>
            {/* Contact Grid */}
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="../src/assets/Logo.jpg" style={{ width: 'clamp(100px, 30%, 200px)', height: 'clamp(45px, 15%, 90px)', alignSelf: 'center' }} alt="Logo" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontSize: 'clamp(10px, 2vw, 20px)', fontFamily: 'Inter', fontWeight: 'bold', color: 'white' }}>
                Contacts
              </Typography>
              <Typography sx={{ fontSize: 'clamp(8px, 1.5vw, 10px)', fontFamily: 'Inter', fontWeight: 'Regular', color: 'white' }}>
                <p>Address: 123 Main Street, City, Country</p>
                <p>Phone: +123456789</p>
                <p>Email: info@example.com</p>
              </Typography>
            </Grid>
            {/* Links Grid */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontSize: 'clamp(10px, 2vw, 20px)', fontFamily: 'Inter', fontWeight: 'bold', color: 'white' }}>
                Links
              </Typography>
              <Typography sx={{ fontSize: 'clamp(8px, 1.5vw, 10px)', fontFamily: 'Inter', fontWeight: 'Regular', color: 'white' }}>
                <a href="https://www.facebook.com/bmic.clothing" style={{ textDecoration: 'none', color: 'inherit', fontSize: 'clamp(8px, 1.5vw, 10px)' }} target="_blank">
                  <FacebookIcon sx={{ fontSize: 'clamp(14px, 2vw, 20px)' }} />
                  Mamamo
                </a><br></br>
                {/* Additional links go here */}
              </Typography>
            </Grid>
            {/* Privacy Policy Grid */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontSize: 'clamp(10px, 2vw, 20px)', fontFamily: 'Inter', fontWeight: 'bold', color: 'white' }}>
                Privacy & Policy
              </Typography>
            </Grid>
          </Grid>
          {/* Copyright */}
          <Typography sx={{ fontSize: 'clamp(12px, 1.5vw, 15px)', fontFamily: 'Inter', fontWeight: 'Bold' }} align="center">
            POWERED BY
          </Typography>
          <Typography sx={{ fontSize: 'clamp(8px, 1vw, 10px)', fontFamily: 'Inter', fontWeight: 'lIGHT' }} align="center">
            Pseudocock
          </Typography>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
