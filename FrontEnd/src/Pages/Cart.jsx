import React from 'react'
import CartTable from '../Components/Tables/CartTable'
import { Grid, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography,MenuItem, TextField, Box} from '@mui/material';



function Cart() {
  return (
    <div>
         <Box m={5} >
         <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'white',pb:"2%",textAlign:'center' }}>
           CART
          </Typography>
      <CartTable/>
         
      </Box>
    </div>
  )
}

export default Cart
