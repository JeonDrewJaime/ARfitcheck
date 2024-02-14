import React from 'react'
import { ThemeProvider } from '@mui/material';
import {Typography,Grid} from '@mui/material';
import theme from '../Theme.js'

function Footer() {
  return (
    <div>
        <ThemeProvider theme={theme}>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f5f5f5', padding: '10px 0' }}>
        <Grid container justifyContent="center">
          <Typography sx={{ color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: 'Regular' }}>
            <p>Links | Contact | Privacy Policy</p> Copyright © 2023 • Clothify
          </Typography>
        </Grid>
      </div>
    </ThemeProvider>
    </div>
  )
}

export default Footer
