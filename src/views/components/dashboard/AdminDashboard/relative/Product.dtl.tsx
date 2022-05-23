import { Container, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { Fragment } from 'react';
import './dashboard.css';

const ProductDtl = () => {
    return (
        <Fragment>
            <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={7} lg={8}>
                        <Container
                            sx={{
                                display: 'grid',
                                justifyItems: 'center',
                                width: '85%',
                            }}
                        >
                            <Box>
                                <img
                                    src="https://bslthemes.com/kinsley/wp-content/uploads/2021/08/room-1.jpg"
                                    alt="ProductDtl Image"
                                    loading="lazy"
                                    width="100%"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'grid',
                                    width: '100%',
                                    marginTop: '30px',
                                    marginBottom: '30px',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    className="dtlHed text-left"
                                    sx={{
                                        marginTop: 'px',
                                    }}
                                >
                                    Kinsley is waiting for you!
                                </Typography>
                                <Typography
                                    className="mt-5"
                                    variant="body2"
                                    gutterBottom
                                >
                                    body2. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam
                                    beatae rerum inventore consectetur, neque
                                    doloribus, cupiditate numquam dignissimos
                                    laborum fugiat deleniti? Eum quasi quidem
                                    quibusdam.
                                </Typography>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={4}>
                        <Box
                            sx={{
                                width: '90%',
                                height: '300px',
                                position: 'fixed',
                                zIndex: '100',
                            }}
                        >
                            <Paper variant="outlined" square>
                                <Box
                                    sx={{ width: '90%', height: '300px' }}
                                ></Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
};

export default ProductDtl;
