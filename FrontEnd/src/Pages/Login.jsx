import {Grid, Typography} from '@mui/material';
import StyledTextFields from '../Components/UI/TextFields.jsx';
import { Link } from 'react-router-dom';
import { FilledButton, OutlinedButton} from '../Components/UI/Buttons.jsx';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

function Login() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  return (
    <div className="body">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form submitted:', values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Grid container spacing={0} rowGap={3.8} sx={{ pt: '5vH' }}>
              <Grid item xs={6} style={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                <img src="./src/assets/log.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Login" />
              </Grid>
              <Grid item container xs={6} style={{ backgroundColor: '#F5F7F8', alignItems: "center", justifyContent: "center" }}>
                <Grid item container xs={12} direction="row" style={{ alignItems: "center", justifyContent: "center" }} rowGap={6}>
                  <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="./src/assets/Icon.png" style={{ width: '20%', height: '20%', objectFit: 'contain', marginTop: 20}} alt="Icon" />
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="username">
                      {({ field, meta }) => (
                        <StyledTextFields
                          field={field}
                          meta={meta}
                          id="username"
                          label="Username"
                          inputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 20 } }}
                          inputProps={{ style: { fontSize: 20, fontFamily: 'Kanit' } }}
                          errorText="Username is required"
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
                          id="password"
                          label="Password"
                          type="password"
                          errorText="Password is required"
                        />
                      )}
                    </Field>
                  </Grid>
                   <Grid item xs={10}>
                    <FilledButton>LOG-IN</FilledButton>
                  </Grid>
                  <Grid item xs={10}>
                    <OutlinedButton>Sign-up</OutlinedButton>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1" align="center">
                     Don't have an account yet? <Link to="/signup">Sign Up</Link>
                     </Typography>
                                         </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Login;