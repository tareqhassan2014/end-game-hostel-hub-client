import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import image2 from './../../../assets/images/demo1-removebg.png';
import image3 from './../../../assets/images/removedBg1.png';
import image4 from './../../../assets/images/b1.png';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

const ProjectsOverview = () => {
    return (
        <Box color="secondary">
            <Container sx={{ py: 5 }}>
                <Grid container>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box sx={{ pr: 1 }}>
                            <Typography variant="h4" sx={{ color: '#4A148C' }}>
                                Hostel Hub Since 2022
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 4, color: '' }}>
                                High quality accomodation services
                            </Typography>
                            <Typography variant="subtitle2" sx={{ mb: 5 }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perferendis, amet consequatur
                                quisquam distinctio esse culpa tempore, rem
                                labore nemo tenetur totam sit. Harum cupiditate
                                consequuntur saepe modi doloremque eum
                                reprehenderit! Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Nesciunt
                                dignissimos ratione corrupti tenetur amet
                                doloribus assumenda modi unde minus aperiam!
                            </Typography>

                            <Button
                                sx={{ mt: 5 }}
                                color="primary"
                                variant="contained"
                            >
                                MORE DETAILS <KeyboardDoubleArrowRightIcon />
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12}>
                        <Box>
                            <Tilt
                                className="parallax-effect-img"
                                tiltMaxAngleX={40}
                                tiltMaxAngleY={40}
                                perspective={800}
                                transitionSpeed={1500}
                                scale={1.1}
                                gyroscope={true}
                            >
                                <Box
                                    sx={{
                                        height: {
                                            lg: '100%',
                                            md: '90%',
                                            sm: '100%',
                                        },
                                        width: '100%',
                                    }}
                                    component="img"
                                    src={image4}
                                    alt="demo-image"
                                />
                            </Tilt>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProjectsOverview;
