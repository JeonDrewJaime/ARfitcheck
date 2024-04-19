import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Pages
import Home from '../Pages/Home.jsx'
import Tool from '../Pages/Tool.jsx'
import Login from '../Pages/Login.jsx'
import FAQs from '../Pages/FAQs.jsx';
import SignUp from '../Pages/SignUp.jsx';
import Shop from '../Pages/Shop.jsx'

import PreLoader from './PreLoader.jsx';

import NavbarButton from './UI/Buttons.jsx';
function Navbar() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
        {isLoading ? ( 
          <PreLoader/>
      ) : (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ pl: 5, pr: 5, backgroundColor: "#F4F4F4", color: "black"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt:1 }}>
               <img src = "../src/assets/Logo.jpg" width={120} height={50} variant="h6" component="div" sx={{ flexGrow: 1, mt:1 }}  />
            </Typography>
            <NavbarButton to="/">Home</NavbarButton>
            <NavbarButton to="/shop">Shop</NavbarButton>
            <NavbarButton to="/tool">Try-on tool</NavbarButton>
            <NavbarButton to="/faq">FAQs</NavbarButton>
            <NavbarButton to="/login">Log-in</NavbarButton>
            <NavbarButton to="/signup">SignUp</NavbarButton>
          </Toolbar>
        </AppBar>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tool" element={<Tool />} />
            <Route path="/faq" element={<FAQs/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/shop" element={<Shop/>} />
          </Routes>
        </div>
      </Box>
      )}
    </Router>
  );
}

export default Navbar;
