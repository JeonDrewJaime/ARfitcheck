import React ,  { useState }from 'react';
import { Typography, Grid, Box, Rating } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import StyledTextFields from '../../Components/UI/TextFields';
import { FilledButton } from '../../Components/UI/Buttons';
import Shipping from '../../Components/Forms/Shipping';
import { OutlinedButton } from '../../Components/UI/Buttons';
import UploadPhoto from '../../Components/Dialogs/UploadPhoto';

function Checkout() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleButtonClick = () => {
      setIsDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };
    const CartValidationSchema = Yup.object().shape({
        cart: Yup.string().required('Product quantity is required'),
    });
    return (
        <div>
          
           
                        <Grid container spacing={0} rowGap={3.8} sx={{ pt: '5vH' }}>
                            <Grid item xs={6} style={{ backgroundColor: '#FFFFFF', height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                              <Box sx = {{m:"auto"}}>
                              <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black', paddingY: '1vh', textAlign: "center" }}>
            SHIPPING DETAILS
          </Typography>
          <Shipping/>
          </Box>
                               
                            </Grid>
                       
                            <Grid item container xs={6} style={{ backgroundColor: '#F5F7F8' }}>
                                
                            <Grid item xs={12} style={{ backgroundColor: '#484444'}}>
                            <Box sx = {{m: "1%"}}>
                            <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'WHITE'  }}>
            ORDER DETAILS
          </Typography>      
          <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'regular', color: 'WHITE'}}>
            Product name
          </Typography>       
          <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'regular', color: 'WHITE'}}>
           Subtotal
          </Typography> 
          <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'regular', color: 'WHITE'}}>
            Shipping Fee
          </Typography> 
          <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'bold', color: 'WHITE'}}>
            Total
          </Typography> 
          </Box> 
  </Grid>
  <Grid item container xs={12} style={{ backgroundColor: '#D9D9D9', justifyContent: "center" }}>
 
    {/* Default image box */}
    <img src="../src/assets/Products/jacket.jpg" alt="Default Image" style={{ maxWidth: '100%', maxHeight: '200px', margin: 'auto' }} />
 
  <Grid item xs={12}>
    {/* Button Grid item */}
    <Grid container spacing={2} sx = {{justifyContent:"center"}}>
  <Grid item sx={{ marginInline: "35%" }}>
    <OutlinedButton onClick={handleButtonClick}>Upload image</OutlinedButton>
  </Grid>
  <Grid item sx={{ textAlign: "center" }}>
    <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 'regular', color: 'black' }}>
      You can pay with your e-wallets online payments such as G-cash
    </Typography>
  </Grid>
  <Grid item sx={{ marginInline: "20%" }}>
    <FilledButton >Place Order</FilledButton>
  </Grid>
</Grid>

  </Grid>
  </Grid>
                                </Grid>
                           

             
                              

                              
                 
                        </Grid>
                        
                        <UploadPhoto open={isDialogOpen} onClose={handleDialogClose} />
        </div>
    );
}

export default Checkout;
