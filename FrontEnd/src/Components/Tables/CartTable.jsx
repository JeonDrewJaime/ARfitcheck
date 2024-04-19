import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid } from '@mui/material';
import { CancelButton, FilledButton, OutlinedButton } from '../UI/Buttons';

const CartTable = ({  }) => {
  const orders = [
    { id: 1, date: '2024-04-14', product: 'Product A', amount: '$50.00', paymentMethod: 'Credit Card', shippingAddress: '123 Street, City, Country', },
    { id: 2, date: '2024-04-15', product: 'Product B', amount: '$100.00', paymentMethod: 'PayPal', shippingAddress: '456 Road, Town, Country' },
  ];
  return (
    <div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PRODUCT
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                SIZE
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PRICE
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                QUANTITY
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                TOTAL
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.id}>
              <TableCell>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: 'black' }}>
                  {order.date}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: 'black' }}>
                  {order.product}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: 'black' }}>
                  {order.amount}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: 'black' }}>
                  {order.paymentMethod}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: 'black' }}>
                  {order.shippingAddress}
                </Typography>
              </TableCell>
              <TableCell>
                <CancelButton>REMOVE</CancelButton>
              </TableCell>
            </TableRow>                
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography sx={{ fontFamily: 'Inter', fontSize: 30, fontWeight: 500, color: 'white', textAlign:"end" }}>
                   Subtotal: 
                </Typography>
    <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
                <OutlinedButton>Continue Shopping</OutlinedButton>
            </Grid>
            <Grid item>
                <FilledButton>Proceed to checkout</FilledButton>
            </Grid>
        </Grid>
    </div>
  );
};

export default CartTable;
