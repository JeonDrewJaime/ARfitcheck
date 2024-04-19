import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography,MenuItem, TextField } from '@mui/material';

import { styled } from '@mui/system';
import { FilledButton, OutlinedButton } from '../UI/Buttons';
import StyledTextFields from '../UI/TextFields';
import UploadPhoto from './UploadPhoto';

const AddProduct= ({ open, onClose }) => {
  const ProductValidationSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required'),
    price: Yup.string().required('Price is required'),
    criticalLevelQuantity: Yup.string().required('Price is required'),
  });

  const cityOptions = [
    'Caloocan',
    'Malabon',
    // Add more city options as needed
  ];


  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Define state for dialog

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleUpload = () => {
    // Your upload logic here
    console.log('Uploading file:', file);
    // Clear selected file and close dialog
    setFile(null);
    setFileName('');
    onClose();
  };

  const handleChooseFileClick = () => {
    // Open the dialog when the "Upload image" button is clicked
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    // Close the dialog when it's closed
    setIsDialogOpen(false);
  };
  const [value, setValue] = React.useState(null);
  return (

    
    <Dialog open={open} onClose={onClose} >
    <DialogTitle>
      <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
       Add Product To Inventory
      </Typography>
    </DialogTitle>
     <DialogContent >
     <Formik
    initialValues={{ firstName: '', lastName: '', eMail: '', mobileNum: '' }}
    validationSchema={ProductValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      console.log('Profile Form submitted:', values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Grid container spacing={2} sx={{pb: "1vh"}}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
              <Grid item sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 200, height: 200 }} alt="Avatar" src="/path/to/profile/image.jpg" />
              </Grid>
              <Grid item alignSelf="center">
                <OutlinedButton onClick={handleChooseFileClick}>Upload image</OutlinedButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field name="productName">
                  {({ field, meta }) => (
                    <StyledTextFields field={field} meta={meta} id="productName" label="Product Name" />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name="price">
                  {({ field, meta }) => (
                    <StyledTextFields field={field} meta={meta} id="price" label="Price"/>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name="criticalLevelQuantity">
                  {({ field, meta }) => (
                    <StyledTextFields field={field} meta={meta} id="criticalLevelQuantity" label="Critical Level Quantity" />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
              <Field name="city">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    InputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                    select
                    label="Category"
                    variant="filled"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error ? meta.error : ''}
                  >
                    {cityOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Typography sx={{ fontFamily: 'Kanit', fontSize: 26, fontWeight: 'medium', color: 'black' }}>
                          {option}
                        </Typography>
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      
                        <Grid container spacing={2}>
    <Grid item xs={12}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography sx={{ fontFamily: 'Kanit', fontSize: 30, fontWeight: 'medium', color: 'black' }}>
          Sizes
        </Typography>
      </Grid>
      <Grid item xs={8}>
      <Typography sx={{ fontFamily: 'Kanit', fontSize: 30, fontWeight: 'medium', color: 'black' }}>
          Quantity
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={12}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
          Small
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Field name="smallQuantity">
          {({ field, meta }) => (
            <StyledTextFields field={field} meta={meta} id="smallQuantity" label="Quantity" />
          )}
        </Field>
      </Grid>
    </Grid>
  </Grid>
  
  <Grid item xs={12}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
          Medium
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Field name="mediumQuantity">
          {({ field, meta }) => (
            <StyledTextFields field={field} meta={meta} id="mediumQuantity" label="Quantity" />
          )}
        </Field>
      </Grid>
    </Grid>
  </Grid>
  
  <Grid item xs={12}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
          Large
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Field name="largeQuantity">
          {({ field, meta }) => (
            <StyledTextFields field={field} meta={meta} id="largeQuantity" label="Quantity" />
          )}
        </Field>
      </Grid>
    </Grid>
  </Grid>
  
  <Grid item xs={12}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
          Extra Large
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Field name="extraLargeQuantity">
          {({ field, meta }) => (
            <StyledTextFields field={field} meta={meta} id="extraLargeQuantity" label="Quantity" />
          )}
        </Field>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={12}>
  <Field name="description">
          {({ field, meta }) => (
            <StyledTextFields field={field} meta={meta} id="mediumQuantity" label="Description" />
          )}
        </Field>
  </Grid>
</Grid>

                    
        <UploadPhoto open={isDialogOpen} onClose={handleDialogClose} />
      </Form>
    )}
  </Formik>
  
     </DialogContent>
    <DialogActions>
      <Button onClick={onClose} >
      <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: '350', color: 'red' }}>
          Cancel
        </Typography>
      </Button>
      <Button onClick={handleUpload} color="primary" >
      <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: '350', color: file ? 'black' : 'gray' }}>
          Add
        </Typography>
      </Button>
    </DialogActions>
  </Dialog>
  );
};

export default AddProduct;
