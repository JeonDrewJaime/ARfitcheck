import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import RevenueChart from '../../Components/Charts/RevenueChart';
import PreLoader from '../../Components/PreLoader';

function AnalyticsAndReports() {
    const [isLoading, setIsLoading] = useState(true);

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
