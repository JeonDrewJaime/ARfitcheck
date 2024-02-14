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
function Navbar() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ pl: 5, pr: 5 }}>
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/">Home</Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/shop">Shop</Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/tool">Try-on tool</Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/fuck">FAQs</Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/log">Log-in</Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/sign">Sign-up</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<Login />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/fuck" element={<FAQs/>} />
          <Route path="/sign" element={<SignUp/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
