import { Box, Grid, Typography, Container, Paper } from '@mui/material';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {
    const [focus, setFocus] = useState(false);

    return (
        <Box sx={{ my: 5 }}>
            <Typography
                variant="h3"
                sx={{ textAlign: 'center', mb: 3, color: '#6A52E5' }}
            >
                Survey
            </Typography>
            <Container>
                {/* only for first time display after loading the page-start */}
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ textAlign: 'center' }}
                >
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Paper
                            sx={{
                                boxShadow: 'inset 0 2px 48px 0 rgb(0 0 0 / 4%)',
                                borderRadius: '10px',
                                padding: '30px',
                                backgroundColor: '#f2ffff',
                                transition: '.3s ease-in-out',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ fontFamily: "'Monoton',cursive" }}
                            >
                                <CountUp
                                    start={focus ? 0 : undefined}
                                    end={60}
                                    duration={2}
                                    redraw={true}
                                    suffix=" +"
                                >
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={(isVisible) => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Typography>
                            <Typography variant="subtitle1">
                                {' '}
                                Products Added
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Paper
                            sx={{
                                boxShadow: 'inset 0 2px 48px 0 rgb(0 0 0 / 4%)',
                                borderRadius: '10px',
                                padding: '30px',
                                backgroundColor: '#f2ffff',
                                transition: '.3s ease-in-out',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ fontFamily: "'Monoton',cursive" }}
                            >
                                <CountUp
                                    start={focus ? 0 : undefined}
                                    end={150}
                                    duration={4}
                                    redraw={true}
                                    suffix=" +"
                                >
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={(isVisible) => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Typography>
                            <Typography variant="subtitle1">
                                {' '}
                                Hostel Booked
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Paper
                            sx={{
                                boxShadow: 'inset 0 2px 48px 0 rgb(0 0 0 / 4%)',
                                borderRadius: '10px',
                                padding: '30px',
                                backgroundColor: '#f2ffff',
                                transition: '.3s ease-in-out',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ fontFamily: "'Monoton',cursive" }}
                            >
                                <CountUp
                                    start={focus ? 0 : undefined}
                                    end={45}
                                    duration={1}
                                    redraw={true}
                                    suffix=" +"
                                >
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={(isVisible) => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Typography>
                            <Typography variant="subtitle1">
                                Store Created
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Paper
                            sx={{
                                boxShadow: 'inset 0 2px 48px 0 rgb(0 0 0 / 4%)',
                                borderRadius: '10px',
                                padding: '30px',
                                backgroundColor: '#f2ffff',
                                transition: '.3s ease-in-out',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ fontFamily: "'Monoton',cursive" }}
                            >
                                <CountUp
                                    start={focus ? 0 : undefined}
                                    end={130}
                                    duration={3}
                                    redraw={true}
                                    suffix=" +"
                                >
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={(isVisible) => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Typography>
                            <Typography variant="subtitle1">
                                {' '}
                                Products Sold
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* only for first time display after loading the page-end */}
            </Container>
        </Box>
    );
};

export default Counter;
