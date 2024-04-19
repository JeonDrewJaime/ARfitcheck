import {
  Box,
  Typography,
} from '@mui/material';
import PreLoader from '../../Components/PreLoader';
import * as React from 'react';
import OrdersTable from '../../Components/Tables/OrdersTable';

function MyOrders() {
  const [isLoading, setIsLoading] = React.useState(true);


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
          <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
            My Orders
          </Typography>
        <OrdersTable/>
        </Box>
      )}
    </div>
  );
}

export default MyOrders;
