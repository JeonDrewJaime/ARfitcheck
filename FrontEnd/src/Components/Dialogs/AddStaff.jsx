import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import StyledTextFields from '../../Components/UI/TextFields';

const AddStaff = ({ open, onClose }) => {
  const StaffValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    eMail: Yup.string().email('Invalid email').required('Email is required'),
    mobileNum: Yup.string()
      .matches(/^[0-9]{11}$/, {
        message: 'Mobile Number must be only numeric characters and consists of 11 digits',
        excludeEmptyString: true,
      })
      .required('Mobile Number is required'),
  });

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpload = () => {
    // Your upload logic here
    console.log('Uploading file:', file);
    // Clear selected file and close dialog
    setFile(null);
    setFileName('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography sx={{ fontFamily: 'Inter', fontSize: 25, fontWeight: 'bold', color: 'black', paddingY: '1vh' }}>
          Add Staff
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ firstName: '', lastName: '', eMail: '', mobileNum: '' }}
          validationSchema={StaffValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Profile Form submitted:', values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field name="firstName">
                    {({ field, meta }) => (
                      <StyledTextFields field={field} meta={meta} id="firstName" label="First Name" />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="lastName">
                    {({ field, meta }) => (
                      <StyledTextFields field={field} meta={meta} id="lastName" label="Last Name" />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="eMail">
                    {({ field, meta }) => (
                      <StyledTextFields field={field} meta={meta} id="eMail" label="Email" />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="mobileNum">
                    {({ field, meta }) => (
                      <StyledTextFields field={field} meta={meta} id="mobileNum" label="Mobile Number" />
                    )}
                  </Field>
                </Grid>
              </Grid>
              <DialogActions>
                <Button onClick={onClose}>
                  <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: '350', color: 'red' }}>
                    Cancel
                  </Typography>
                </Button>
                <Button onClick={handleUpload} color="primary" disabled={isSubmitting || !isValid}>
                  <Typography sx={{ fontFamily: 'Kanit', fontSize: 20, fontWeight: '350', color: file ? 'black' : 'gray' }}>
                    Add
                  </Typography>
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaff;
