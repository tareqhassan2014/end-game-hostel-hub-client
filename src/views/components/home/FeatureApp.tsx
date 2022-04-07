import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Grid } from '@mui/material';
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
            desc: 'Hi there, you are welcome by Md. Mahmudul Hasan so lets start',
            goal: 'কম্পিউটার সায়েন্সে পড়ার সুযোগ পাওনি কিন্তু কম্পিউটার সায়েন্সের মেইন মেইন জিনিসগুলো ধরে ধরে শিখতে চাইলে এই কোর্সে জয়েন করো।🥊 ',
            imgPath: 'https://i.ibb.co/7zssLnd/launch-screen.png',
        },
        {
            label: 'First Page',
            goal: 'আনলিমিটেড হেল্প, গাইডলাইন; এমনকি গুগল মিট এ স্ক্রিনশেয়ার করে সমস্যা সমাধান করতে চাইলে; এই কোর্সে জয়েন করো।🚀',
            desc: 'Here, you will see the welcome page and others information will be available on it',
            imgPath: 'https://i.ibb.co/cQpZH6m/welcome-page.png',
        },
        {
            label: 'Sign-up Page',
            desc: 'This is Extra opportunity for you because we want you to store your data',
            goal: 'আমাকে বিশ্বাস করুন, আমি আমার জীবনের চেয়ে কোডিং বেশি পছন্দ করি এবং আমি এতে আমার সময় ব্যয় করি।🥊',
            imgPath: 'https://i.ibb.co/jL9YMgY/signup.png',
        },
        {
            label: 'Profile',
            desc: 'Do not lose your hope until capture your ambitions',
            goal: 'লোকেদের জানাতে আপনার দুর্দান্ত প্রোফাইল তৈরি করুন যাতে তারা হিংসা অনুভব করে।🔥',
            imgPath: 'https://i.ibb.co/4PTzZ3k/profile.png',
        },
        {
            label: 'Dashboard',
            desc: 'There are different types of dashboard for every user',
            goal: 'আমাদের সাথে যোগাযোগ করে আপনার ড্যাশবোর্ড তৈরি করুন কারণ আপনার জন্য অফার চলছে।🚀',
            imgPath: 'https://i.ibb.co/RT1h8zf/dashboard.png',
        },
        {
            label: 'Filter',
            desc: 'If you are A Customer then you are able to filter your rooms',
            goal: 'সঠিকভাবে তথ্য সংগ্রহ করে আপনার ইচ্ছানুযায়ী রুম পান কারণ এটি অত্যন্ত প্রয়োজনীয়।🔥',
            imgPath: 'https://i.ibb.co/K9rKk2J/filter.png',
        },
        {
            label: 'Payment',
            goal: 'সর্বোত্তম পরিষেবা পাওয়ার পরে কোনো দ্বিধা ছাড়াই আমাদের অর্থ প্রদান করুন কারণ আমরা আপনার জন্য।🚀',
            desc: 'The process of Payment has been displayed on it so here you are',
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
            <Grid container sx={{ justifyContent: 'space-between' }}>
                <Grid item md={6} sm={12} xs={12}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            height: 'auto',
                            p: { md: 2, sm: 1, xs: 1 },
                            bgcolor: 'background.default',
                        }}
                    >
                        <Typography variant="body1" sx={{ mt: 3 }}>
                            {images[activeStep].label} 🔥
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 1, mb: 5 }}>
                            {images[activeStep].desc}
                        </Typography>
                        <Typography variant="h6">
                            {images[activeStep].goal}
                        </Typography>
                        <Button
                            sx={{
                                backgroundColor: '#43515a',
                                color: 'white',
                                padding: '10px 25px',
                                marginTop: '40px',
                                fontSize: 10,
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: 'gray',
                                    color: 'smoke',
                                },
                            }}
                            size="small"
                        >
                            See More
                        </Button>
                    </Paper>
                </Grid>
                <Grid item md={5} sm={12} xs={12} sx={{ mr: 2 }}>
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
                                            height: '400px',
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
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeatureApp;
