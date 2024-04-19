import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, Grid, Button, Box} from '@mui/material';
import { CancelButton, DeliverButton, ExcelButton, PrepareButton, } from '../UI/Buttons';
const OrderStatusTable = ({  }) => {
  const orders = [
    { id: 1, date: '2024-04-14', product: 'Product A', amount: '$50.00', paymentMethod: 'Credit Card', shippingAddress: '123 Street, City, Country', status: 'Waiting for Confirmation'},
    { id: 2, date: '2024-04-15', product: 'Product B', amount: '$100.00', paymentMethod: 'PayPal', shippingAddress: '456 Road, Town, Country', status: 'Waiting for Confirmation' },
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
                ORDER DATE
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PRODUCT NAME
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                AMOUNT
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PAYMENT METHOD
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                SHIPPING ADDRESS
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                ORDER
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                Action
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
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: 'black' }}>
                  {order.status}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: 'black' }}>
                  {order.status}
                </Typography>
              </TableCell>
              <TableCell>
              <Grid container spacing={2}>
      <Grid item xs={12}>
      <ExcelButton>CONFIRM</ExcelButton>
      </Grid>
      <Grid item xs={12}>
    <CancelButton>CANCEL</CancelButton>
      </Grid>
      <Grid item xs={12}>
      <PrepareButton>PREPARE</PrepareButton>
      </Grid>
      <Grid item xs={12}>
        <DeliverButton>DELIVER</DeliverButton>
      </Grid>
    </Grid>
              </TableCell>
           
            </TableRow>                
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderStatusTable;