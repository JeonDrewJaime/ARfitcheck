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

import PreLoader from '../Components/PreLoader.jsx';

function Navbar() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay time as needed
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Router>
        {isLoading ? ( // Display preloader if isLoading is true
          <PreLoader/>
      ) : (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ pl: 5, pr: 5, backgroundColor: "#F4F4F4", color: "black"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt:1,  }}>
               <img src = "../src/assets/Logo.jpg" width={120} height={50}   />
            </Typography>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/">
              <Typography sx = {{fontFamily: "Kanit", fontSize: 15}}>Home</Typography>
            </Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/shop">
              <Typography sx = {{fontFamily: "Kanit", fontSize: 15}}>Shop</Typography>
            </Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/tool">
             <Typography sx = {{fontFamily: "Kanit", fontSize: 15}}>Try-on tool</Typography>
            </Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/fuck">
            <Typography sx = {{fontFamily: "Kanit", fontSize: 15}}>FAQs</Typography>
            </Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/log">
            <Typography sx = {{fontFamily: "Kanit", fontSize: 15}}>Log-in</Typography>
            </Button>
            <Button color="inherit" sx={{ paddingX: 4, paddingY: 2 }} component={Link} to="/sign">
            <Typography sx = {{fontFamily: "Kanit", fontSize: 15}}>SignUp</Typography>
            </Button>
          </Toolbar>
        </AppBar>

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
      </Box>
      )}
    </Router>
  );
}

export default Navbar;
