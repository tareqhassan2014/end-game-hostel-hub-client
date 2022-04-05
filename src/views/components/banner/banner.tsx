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
import b1 from './../../../assets/dubai-slider-screen-1.jpg';
import b2 from './../../../assets/maldives-slider-img-1.jpg';
import b3 from './../../../assets/sydney-slider-img-1.jpg';
import './Banner.css';

const img = {
    backgroundImage: `${b1}`,
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Banner = () => {
    const images = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                'https://tourpress.b-cdn.net/wp-content/uploads/2017/11/dubai-slider-screen-1.jpg',
        },
        {
            label: 'Bird',
            imgPath:
                'https://tourpress.b-cdn.net/wp-content/uploads/2017/11/sydney-slider-img-1.jpg',
        },
        {
            label: 'Bali, Maldives',
            imgPath:
                'https://tourpress.b-cdn.net/wp-content/uploads/2017/11/maldives-slider-img-1.jpg',
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
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
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
                                    height: '95vh',
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
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

export default Banner;
