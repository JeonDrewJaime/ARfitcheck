import React from 'react';
import { Grid } from '@mui/material';
import StyledTextFields from '../Components/UI/TextFields.jsx';
import { FilledButton } from '../Components/UI/Buttons.jsx';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../LogIn.css';
function SignUp() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    fullName: Yup.string().required('Full name is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  return (
    <div className="body">
      <Formik
        initialValues={{ email: '', fullName: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form submitted:', values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Grid container spacing={0} rowGap={3.8} sx={{ pt: '5vH' }}>
              <Grid item container xs={6} style={{ backgroundColor: '#F5F7F8', alignItems: "center", justifyContent: "center" }}>
                <Grid item container xs={12} direction="row" style={{ alignItems: "center", justifyContent: "center" }} rowGap={6}>
                  <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="./src/assets/Icon.png" style={{ width: '20%', height: '20%', objectFit: 'contain', marginTop: 20}} alt="Icon" />
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="email">
                      {({ field, meta }) => (
                        <StyledTextFields
                          field={field}
                          meta={meta}
                          id="Email"
                          label="Email"
                          inputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                          inputProps={{ style: { fontSize: 20, fontFamily: 'Kanit' } }}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="fullName">
                      {({ field, meta }) => (
                        <StyledTextFields
                          field={field}
                          meta={meta}
                          id="FullName"
                          label="Full Name"
                          inputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                          inputProps={{ style: { fontSize: 20, fontFamily: 'Kanit' } }}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="password">
                      {({ field, meta }) => (
                        <StyledTextFields
                          field={field}
                          meta={meta}
                          id="Password"
                          label="Password"
                          type="password"
                          inputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                          inputProps={{ style: { fontSize: 20, fontFamily: 'Kanit' } }}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="confirmPassword">
                      {({ field, meta }) => (
                        <StyledTextFields
                          field={field}
                          meta={meta}
                          id="ConfirmPassword"
                          label="Confirm Password"
                          type="password"
                          inputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                          inputProps={{ style: { fontSize: 20, fontFamily: 'Kanit' } }}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10}>
                    <FilledButton>Sign-up</FilledButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                <img src="./src/assets/Signup.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Login" />
              </Grid>  
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default SignUp;