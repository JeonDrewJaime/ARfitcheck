import React from 'react';
import { Grid, Box, Typography, Divider, MenuItem, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function OrderSuccess() {
  return (
    <div>
      <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'green', paddingY: '1vh', textAlign: "center" }}>
        Thank you! Your order has been received
      </Typography>

      {/* Full Width Table */}
      <Box m={5} >
      <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'white', paddingY: '1vh', textAlign: "center" }}>
        ORDER INFORMATION
      </Typography>
      <TableContainer component={Paper} sx={{ width: '100%', marginBottom: '2rem'}}>
        <Table>
            <TableRow>
              <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PRODUCT
              </Typography>
              </TableCell>
              <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                DATE ORDERED
              </Typography>
              </TableCell>
              <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                TOTAL
              </Typography>
              </TableCell>
              <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PAYMENT METHOD
              </Typography>
              </TableCell>
              <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                SHIPPING DETAILS
              </Typography>
              </TableCell>
            </TableRow>
       
          <TableBody>
    
            <TableRow>
              <TableCell>Row 1 Data 1</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
            
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'white', paddingY: '1vh', textAlign: "center" }}>
        ORDER DETAILS
      </Typography>
      <TableContainer component={Paper} sx={{ width: '100%', marginBottom: '2rem'}}>
        <Table>
            <TableRow>
              <TableCell>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: 'black', paddingY: '1vh' }}>
                PRODUCT
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
       
          <TableBody>
            {/* Table rows go here */}
            <TableRow>
              <TableCell>Row 1 Data 1</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
             
              {/* Add more cells for each row */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </div>
  );
}

export default OrderSuccess;
