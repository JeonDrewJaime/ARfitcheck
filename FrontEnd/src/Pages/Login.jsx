import { Typography, Button, TextField, Grid, FormHelperText, InputAdornment, IconButton } from '@mui/material';
import { Warning } from '@mui/icons-material';
import Footer from '../Components/Footer.jsx';
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
              {/* First Column */}
              <Grid item xs={6} style={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                <img src="./src/assets/log.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Login" />
              </Grid>
              {/* Second Column */}
              <Grid item container xs={6} style={{ backgroundColor: '#F5F7F8', alignItems: "center", justifyContent: "center" }}>
                <Grid item container xs={12} direction="row" style={{ alignItems: "center", justifyContent: "center" }} rowGap={6}>
                  <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="./src/assets/Icon.png" style={{ width: '20%', height: '20%', objectFit: 'contain', marginTop: 20}} alt="Icon" />
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="username">
                      {({ field, meta }) => (
                        <div>
                          <TextField
                            {...field}
                            id="username"
                            label="Username"
                            variant="filled"
                            fullWidth
                            InputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 25 } }}
                            sx={{ '& input': { fontSize: 25, pt: 4 } }}
                            inputProps={{ style: { fontSize: 16, fontFamily: 'Kanit' } }}
                            error={meta.touched && Boolean(meta.error)}
                            InputProps={{
                              endAdornment: meta.touched && meta.error ? (
                                <InputAdornment position="end">
                                  <IconButton>
                                    <Warning color="error" />
                                  </IconButton>
                                </InputAdornment>
                              ) : null
                            }}
                          />
                          {meta.touched && meta.error && (
                            <FormHelperText sx={{ fontFamily: 'Kanit', fontSize: 14, color: 'red' }}>
                              {meta.error}
                            </FormHelperText>
                          )}
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="password">
                      {({ field, meta }) => (
                        <div>
                          <TextField
                            {...field}
                            id="password"
                            label="Password"
                            variant="filled"
                            fullWidth
                            InputLabelProps={{ sx: { fontFamily: 'Kanit', fontSize: 25 } }}
                            sx={{ '& input': { fontSize: 25, pt: 4 } }}
                            inputProps={{ style: { fontSize: 16, fontFamily: 'Kanit' } }}
                            type="password"
                            error={meta.touched && Boolean(meta.error)}
                            InputProps={{
                              endAdornment: meta.touched && meta.error ? (
                                <InputAdornment position="end">
                                  <IconButton>
                                    <Warning color="error" />
                                  </IconButton>
                                </InputAdornment>
                              ) : null
                            }}
                          />
                          {meta.touched && meta.error && (
                            <FormHelperText sx={{ fontFamily: 'Kanit', fontSize: 14, color: 'red' }}>
                              {meta.error}
                            </FormHelperText>
                          )}
                        </div>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: 'White',
                        '&:hover': { backgroundColor: '#414a4c', color: 'white' },
                        '&:not(:hover)': { backgroundColor: '#3d4242', color: 'white' },
                      }}
                    >
                      <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>LOG-IN</Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={10}>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        '&:hover': { borderColor: '#414a4c', backgroundColor: '#414a4c', color: 'white' },
                        '&:not(:hover)': { borderColor: '#3d4242', color: 'black' },
                      }}
                    >
                      <Typography sx={{ fontFamily: 'Kanit', fontSize: 25, padding: 0.5 }}>SIGN - UP</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
}
export default Login;