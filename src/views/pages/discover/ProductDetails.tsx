import { Button, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../assets/images/apple.png';

const ProductDetails = () => {
    return (
        <Container>
            <Grid sx={{ mt: 3 }} container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ width: '100%' }}>
                        <img
                            style={{
                                width: '100%',
                                objectFit: 'contain',
                                height: '400px',
                            }}
                            src={img}
                            alt=""
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ width: '100%', minHeight: '90vh' }}>
                        <span
                            style={{
                                backgroundColor: 'black',
                                padding: '5px',
                                color: 'white',
                            }}
                        >
                            Books
                        </span>

                        <Typography
                            sx={{ fontWeight: 'bold', mt: 1 }}
                            variant="h5"
                        >
                            Emma by Jane Austen (1816)
                        </Typography>
                        <Typography
                            sx={{ fontWeight: 'bold', mt: 1 }}
                            variant="h6"
                        >
                            $99
                        </Typography>

                        <Typography
                            sx={{ fontWeight: 'bold', mt: 1, mb: 1 }}
                            variant="subtitle2"
                        >
                            Location: Dhaka
                        </Typography>
                        <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                        />
                        <Typography
                            sx={{
                                mt: 2,
                                color: 'secondary',
                                textAlign: 'justify',
                            }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Illum nostrum quod ab eligendi. Dolorum
                            laborum harum, delectus doloremque aut tempore
                            voluptatibus consequatur voluptas velit doloribus,
                            tenetur, cupiditate impedit architecto ipsa itaque.
                            Dolor quisquam voluptas accusamus. Voluptatibus
                            vitae numquam nam aliquam ipsa porro voluptas cumque
                            magni, doloremque qui accusamus tempora illo.
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', mt: 1 }}>
                            Note: 6 month used
                        </Typography>
                        <Button
                            sx={{
                                backgroundColor: 'black',
                                borderRadius: 0,
                                mt: 2,
                            }}
                            variant="contained"
                        >
                            ADD TO CART
                        </Button>
                        <p style={{ fontSize: '12px' }}>
                            {' '}
                            <span style={{ fontWeight: 'bold' }}>
                                In stock
                            </span>{' '}
                            Pickup and free shipping are available
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetails;
