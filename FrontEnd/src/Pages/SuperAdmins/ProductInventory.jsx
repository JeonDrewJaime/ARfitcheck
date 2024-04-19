import React from 'react'
import{ useState } from 'react';
import { Box, Typography, Divider, Grid, Avatar, IconButton } from '@mui/material';
import { FilledButton, ExcelButton} from '../../Components/UI/Buttons';
import ProductInventoryTable from '../../Components/Tables/ProductInventoryTable';
import PreLoader from '../../Components/PreLoader';
import AddProduct from '../../Components/Dialogs/AddProduct';

function ProductInventory() {
    const [isLoading, setIsLoading] = React.useState(true);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleButtonClick = () => {
      setIsDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };
  
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
            Product Inventory
          </Typography>
          <Grid container spacing={4} sx={{ width: "45%" }}>
  <Grid item xs={6}>
    <FilledButton onClick={handleButtonClick}  fullWidth>Add Products</FilledButton>
  </Grid>
  <Grid item xs={6}>
    <ExcelButton  fullWidth>Download as Excel</ExcelButton>
  </Grid>
</Grid>
       
        </Grid>
        <Grid item>
          <Divider sx={{ borderTopWidth: 2, mb : 3 }}/>
        </Grid>
      
      </Grid>
      <ProductInventoryTable/>
      <AddProduct open={isDialogOpen} onClose={handleDialogClose} />
     </Box>
       )}
    </div>
  )
}

export default ProductInventory
