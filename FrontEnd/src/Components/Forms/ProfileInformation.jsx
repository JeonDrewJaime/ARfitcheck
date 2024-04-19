import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { FilledButton, OutlinedButton } from '../../Components/UI/Buttons';
import StyledTextFields from '../../Components/UI/TextFields';
import UploadPhoto from '../Dialogs/UploadPhoto';

function ProfileInformation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const ProfileValidationSchema = Yup.object().shape({
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

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', eMail: '', mobileNum: '' }}
      validationSchema={ProfileValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Profile Form submitted:', values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                <Grid item sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ width: 200, height: 200 }} alt="Avatar" src="/path/to/profile/image.jpg" />
                </Grid>
                <Grid item alignSelf="center">
                  <OutlinedButton onClick={handleButtonClick}>Upload image</OutlinedButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field name="firstName">
                    {({ field, meta }) => (
                      <StyledTextFields field={field} meta={meta} id="firstName" label="First Name" disabled={true}/>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="lastName">
                    {({ field, meta }) => (
                      <StyledTextFields field={field} meta={meta} id="lastName" label="Last Name"disabled={true} />
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
            </Grid>
            <Grid item xs={12}>
              <FilledButton type="submit" disabled={isSubmitting}>
                UPDATE PERSONAL INFORMATION
              </FilledButton>
            </Grid>
          </Grid>
          <UploadPhoto open={isDialogOpen} onClose={handleDialogClose} />
        </Form>
      )}
    </Formik>
  );
}
export default ProfileInformation;