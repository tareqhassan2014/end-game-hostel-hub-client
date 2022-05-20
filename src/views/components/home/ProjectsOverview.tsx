import React, { useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import image4 from './../../../assets/images/b1.png';
import { motion, useAnimation } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ProjectsOverview = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3,
                },
            });
        }
        if (!inView) {
            animation.start({ x: '-100vw' });
        }
    }, [inView, animation]);

    return (
        <Box color="secondary">
            <Container sx={{ py: 5 }}>
                <Grid container>
                    <Grid ref={ref} item lg={6} md={6} xs={12}>
                        <Box
                            sx={{ pr: 1 }}
                            component={motion.div}
                            animate={animation}
                        >
                            <Typography variant="h4" sx={{ color: '#4A148C' }}>
                                Hostel Hub Since 2022
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 4, color: '' }}>
                                High quality accommodation services
                            </Typography>
                            <Typography variant="subtitle2" sx={{ mb: 5 }}>
                                Hostel hub is related to the management system
                                of a hostel. All kinds of hostel facilities are
                                being provided by hostel hub. A student is to
                                face a lot of hassles to find a hostel in real
                                life. To reduce sufferings for getting a
                                wonderful hostel environment based accommodation
                                hostel hub is waiting for you. Hostel hub is
                                serving online based hostel booking procedures
                                for you. After being a member of hostel hub you
                                will be able to get your dream hostel
                                definitely.
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
                        <Box sx={{ width: { md: '100%' } }}>
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
                                        height: '100%',
                                        width: { md: '100%' },
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
