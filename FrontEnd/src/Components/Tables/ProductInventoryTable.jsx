import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Box } from '@mui/material';
import { FilledButton } from '../UI/Buttons';
const ProductInventoryTable = ({  }) => {
  const orders = [
    { id: 1, date: '2024-04-14', product: 'Product A', amount: '$50.00', paymentMethod: 'Credit Card', shippingAddress: '123 Street, City, Country'},
    { id: 2, date: '2024-04-15', product: 'Product B', amount: '$100.00', paymentMethod: 'PayPal', shippingAddress: '456 Road, Town, Country',},
  ];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                I.D
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PRODUCT NAME
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                QUANTITY
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PRICE
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                ACTION
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
                <Box sx = {{width: "50%"}}>
          <FilledButton width={150}>EDIT</FilledButton>
          </Box>
                </Typography>
              </TableCell>
          
            </TableRow>                
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductInventoryTable
