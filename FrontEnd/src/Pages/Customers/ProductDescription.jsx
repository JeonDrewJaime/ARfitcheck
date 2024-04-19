import React from 'react';
import { Typography, Grid, Box, Rating } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import StyledTextFields from '../../Components/UI/TextFields';
import { FilledButton } from '../../Components/UI/Buttons';

function ProductDescription() {
    const CartValidationSchema = Yup.object().shape({
        cart: Yup.string().required('Product quantity is required'),
    });
    return (
        <div>
            <Formik
                initialValues={{ cart: '' }}
                validationSchema={CartValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('Profile Form submitted:', values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Grid container spacing={0} rowGap={3.8} sx={{ pt: '5vH' }}>
                            <Grid item xs={6} style={{ backgroundColor: '#4B4B4B', height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box style={{ backgroundColor: '#D9D9D9', width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
                                        Image Here
                                    </span>
                                </Box>
                            </Grid>
                       
                            <Grid item  xs={6} style={{ backgroundColor: '#F5F7F8',m:3 }}>
                       
                                <Grid item xs={12} style={{ backgroundColor: '#C9C9C9'}}>
                                    <Typography sx={{ fontFamily: 'Kanit', fontSize: 50, fontWeight: 'bold', color: 'black' }}>
                                        PRODUCT NAME
                                    </Typography>
                                    <Rating
                                        name="product-rating"
                                        value={3}
                                        emptyIcon={<StarBorderIcon style={{ color: 'black' }} />}
                                        icon={<StarIcon style={{ color: 'black' }} />}
                                    />
                                    <Typography sx={{ fontFamily: 'Kanit', fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: '20px' }}>
                                        Price
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 'regular', color: 'black' }}>
                                        Stock
                                    </Typography>
                                    <Grid container direction="column" spacing={2} sx = {{mt: "20%", pb:"5%"}}>
                                <Grid item container justifyContent="space-between" alignItems="center">
                                <Grid item xs={6}>
                                    <Field name="cart">
                                        {({ field, meta }) => (
                                            <StyledTextFields field={field} meta={meta} id="cart" label="Quantity" />
                                        )}
                                    </Field>
                                    </Grid>
                                    <Grid container  sx={{ width: "45%", justifyContent:'center', alignItems: "center" }}>
                                    <FilledButton type="submit" disabled={isSubmitting}>
                                        ADD TO CART
                                    </FilledButton>
                                </Grid>
                                
                                </Grid>
                                
                                </Grid>
                           

                                </Grid>
                              
<Grid item xs={12} style={{ backgroundColor: 'black'}}>
    
    </Grid>
                              
                            </Grid>
                        </Grid>
                        
                    </Form>
                )}
                
            </Formik>
            
        </div>
    );
}

export default ProductDescription;
