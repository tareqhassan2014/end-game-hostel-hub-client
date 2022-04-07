import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const FeatureApp = () => {
    const images = [
        {
            label: 'Launch Screen',
            imgPath: 'https://i.ibb.co/7zssLnd/launch-screen.png',
        },
        {
            label: 'First Page',
            imgPath: 'https://i.ibb.co/cQpZH6m/welcome-page.png',
        },
        {
            label: 'Sign-up Page',
            imgPath: 'https://i.ibb.co/jL9YMgY/signup.png',
        },
        {
            label: 'Profile',
            imgPath: 'https://i.ibb.co/4PTzZ3k/profile.png',
        },
        {
            label: 'Dashboard',
            imgPath: 'https://i.ibb.co/RT1h8zf/dashboard.png',
        },
        {
            label: 'Filter',
            imgPath: 'https://i.ibb.co/K9rKk2J/filter.png',
        },
        {
            label: 'Payment',
            imgPath: 'https://i.ibb.co/WWRKXTJ/payment.png',
        },
    ];

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <Box
            sx={{
                maxWidth: '100%',
                flexGrow: 1,
                paddingTop: { md: '68px', sm: '64px', xs: '48px' },
            }}
        >
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: '90vh',
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'background.default',
                            }}
                        >
                            <Typography>{images[activeStep].label}</Typography>
                        </Paper>
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Previews
                    </Button>
                }
            />
        </Box>
    );
};

export default FeatureApp;
