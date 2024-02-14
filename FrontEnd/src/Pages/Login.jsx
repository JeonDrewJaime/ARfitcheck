import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//Components
import Footer from '../Components/Footer.jsx'
//Widgets

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
      };
  return (
    <div>
   <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginX: 10 }}
    >
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
      />
      <Button variant="contained"  sx= {{mt:3, paddingY: 1.5, width: '100%'}}>LOG-IN</Button>
    </Box>
    <Footer/> 
    </div>
  )
}

export default Login
