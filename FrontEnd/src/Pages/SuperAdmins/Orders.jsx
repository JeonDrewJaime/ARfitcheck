import React from 'react'
import { Box, Typography, Divider, Grid, Avatar, IconButton } from '@mui/material';
import { ExcelButton} from '../../Components/UI/Buttons';
import PreLoader from '../../Components/PreLoader';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OrderStatusTable from '../../Components/Tables/OrderStatusTable';


function Orders() {
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
       <Box m={2} >
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
            Order Status
          </Typography>
          <Grid container spacing={4} sx={{ width: "45%", justifyContent:'center', alignItems: "center" }}>
  <Grid item xs={6}>
  <ExcelButton fullWidth>Download as Excel</ExcelButton>
  </Grid>
  <Grid item xs={6}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  </Grid>
</Grid>
       
        </Grid>
        <Grid item>
          <Divider sx={{ borderTopWidth: 2, mb : 3 }}/>
        </Grid>
      
      </Grid>
       <OrderStatusTable/>
     </Box>
      )}
    </div>
  )
}

export default Orders
