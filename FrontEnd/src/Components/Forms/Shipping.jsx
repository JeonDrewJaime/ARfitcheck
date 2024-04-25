import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Grid, MenuItem, Typography } from '@mui/material';
import StyledTextFields from '../UI/TextFields';
import { FilledButton } from '../UI/Buttons';
import PreLoader from '../PreLoader';

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

function Shipping() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
      }}
      validationSchema={ShippingValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission logic here
        console.log('Form submitted:', values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field name="country">
                {({ field, meta }) => (
                  <StyledTextFields
                    field={field}
                    meta={meta}
                    id="country"
                    label="Country"
                    disabled={true}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field name="address">
                {({ field, meta }) => (
                  <StyledTextFields
                    field={field}
                    meta={meta}
                    id="address"
                    label="Address Line"
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field name="barangay">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    InputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                    select
                    label="Barangay"
                    variant="filled"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error ? meta.error : ''}
                  >
                    {barangayOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: 'medium', color: 'black' }}>
                          {option}
                        </Typography>
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field name="city">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    InputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                    select
                    label="City/Municipality"
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
            <Grid item xs={12} sm={4}>
              <Field name="postalCode">
                {({ field, meta }) => (
                  <StyledTextFields
                    field={field}
                    meta={meta}
                    id="postalCode"
                    label="Postal Code"
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} justifyContent="flex-end">
                <Grid item xs={12}>
                  <FilledButton type="submit" disabled={isSubmitting} fullWidth>
                    UPDATE SHIPPING DETAILS
                  </FilledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default Shipping;
