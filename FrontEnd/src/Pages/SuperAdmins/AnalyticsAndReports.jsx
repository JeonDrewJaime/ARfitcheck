import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Divider, MenuItem, TextField} from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import RevenueChart from '../../Components/Charts/RevenueChart';
import PreLoader from '../../Components/PreLoader';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AnalyticsAndReports() {
    const [isLoading, setIsLoading] = useState(true);
    const termOptions = [
        'Daily',
        'Weekly',
        'Monthly',
        'Yearly'
        // Add more city options as needed
      ];
    useEffect(() => {
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
                       <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
           Analytics and Reports
          </Typography>
          <Grid container spacing={4} sx={{ width: "45%", justifyContent:'center', alignItems: "center" }}>
  <Grid item xs={6}>
  <TextField
      select
      label="Term?(Ewan ko ano tawag hahah)"
      variant="filled"
      fullWidth
      InputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
    >
      {termOptions.map((option) => (
        <MenuItem key={option} value={option}>
          <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
            {option}
          </Typography>
        </MenuItem>
      ))}
    </TextField>
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
                    <Grid container spacing={3}>
                        {/* Total Orders */}
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ bgcolor: 'white', textAlign: 'center', padding: '20px', borderRadius: 5 }}>
                                <ShoppingCartIcon sx={{ fontSize: 40, color: 'black' }} />
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
                                    Total Orders
                                </Typography>
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black' }}>
                                    100
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Pending Orders */}
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ bgcolor: 'white', textAlign: 'center', padding: '20px', borderRadius: 5 }}>
                                <HourglassEmptyIcon sx={{ fontSize: 40, color: 'black' }} />
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
                                    Pending Orders
                                </Typography>
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black' }}>
                                    20
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Products */}
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ bgcolor: 'white', textAlign: 'center', padding: '20px', borderRadius: 5 }}>
                                <LocalMallIcon sx={{ fontSize: 40, color: 'black' }} />
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
                                    Products
                                </Typography>
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black' }}>
                                    500
                                </Typography>
                            </Box>
                        </Grid>
                        
                        {/* Critical Level Products */}
                        <Grid item xs={6} sm={3}>
                            <Box sx={{ bgcolor: 'white', textAlign: 'center', padding: '20px', borderRadius: 5 }}>
                                <ReportProblemIcon sx={{ fontSize: 40, color: 'black' }} />
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
                                    Critical Level Products
                                </Typography>
                                <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black' }}>
                                    5
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Revenue Chart */}
                        <Grid item xs={12} sm={12}>
                            <RevenueChart/>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    );
}

export default AnalyticsAndReports;
