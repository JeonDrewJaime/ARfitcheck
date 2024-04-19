// ChangePasswordForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FilledButton } from '../../Components/UI/Buttons';
import StyledTextFields from '../../Components/UI/TextFields';
import {Grid } from '@mui/material';


const PasswordValidationSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function ChangePassword() {
  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      validationSchema={PasswordValidationSchema}
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
                  <Field name="password">
                    {({ field, meta }) => (
                      <StyledTextFields
                        field={field}
                        meta={meta}
                        id="password"
                        label="Password"
                        type="password"
                        errorText={meta.touched && meta.error ? meta.error : ''}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="confirmPassword">
                    {({ field, meta }) => (
                      <StyledTextFields
                        field={field}
                        meta={meta}
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        errorText={meta.touched && meta.error ? meta.error : ''}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <FilledButton type="submit" disabled={isSubmitting}>
                    CHANGE PASSWORD
                  </FilledButton>
                </Grid>
              </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ChangePassword;
