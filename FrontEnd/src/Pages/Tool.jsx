import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Footer from '../Components/Footer.jsx'
function Tool() {
  return (
    <div>
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    sx = {{marginX:  10}}
  >
    <Button variant="contained"  sx= {{mt: 5, paddingY: 1.5}}>DOWNLOAD YUNG APK</Button>

  </Box>
     <Footer />
  </div>
  )
}

export default Tool
