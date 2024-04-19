import React from 'react';
import { TextField, Grid, Typography, Box } from '@mui/material';
import Shipping from '../../Components/Forms/Shipping';
import PreLoader from '../../Components/PreLoader';
function ShippingDetails() {
  const [isLoading, setIsLoading] = React.useState(true);

  const cityOptions = [
    'Caloocan',
    'Malabon',
    // Add more city options as needed
  ];
  const barangayOptions = [
    'Barangay 1',
    'Barangay 2',
    'Barangay 3',
    // Add more barangay options as needed
  ];
  
  const ShippingValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
    barangay: Yup.string().required('Barangay is required'),
  });
  
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
            Shipping Details
          </Typography>
      <Shipping/>
      </Box>
      )}``
    </div>
  );
}

export default ShippingDetails;
