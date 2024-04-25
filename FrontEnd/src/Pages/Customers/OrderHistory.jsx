import {
  Box,
  Typography,
} from '@mui/material';
import PreLoader from '../../Components/PreLoader';
import * as React from 'react';
import OrderHistoryTable from '../../Components/Tables/OrderHistoryTable';
import Details from '../../Components/Details';
function OrderHistory() {
  const [isLoading, setIsLoading] = React.useState(true);
  // Sample orders data
  const orders = [
    { id: 1, date: '2024-04-14', product: 'Product A', amount: '$50.00', paymentMethod: 'Credit Card', shippingAddress: '123 Street, City, Country', status: 'Delivered'},
    { id: 2, date: '2024-04-15', product: 'Product B', amount: '$100.00', paymentMethod: 'PayPal', shippingAddress: '456 Road, Town, Country', status: 'Delivered' },
    // Add more orders as needed
  ];

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Box m={2} height="100vh">
        
            <Details
            //avatarUrl={} for avatar bro
  name="John Doe"
  email="john.doe@example.com"
/>
          <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
            Order History
          </Typography>
          <OrderHistoryTable/>
        </Box>
      )}
    </div>
  );
}

export default OrderHistory;
