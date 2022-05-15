import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Icon,
    Rating,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Slider from 'react-slick';

const HomeShowReview = () => {
    const settings = {
        dots: true,
        infinite: false,

        autoplay: true,
        speed: 2000,

        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const Feedbacks = [
        {
            name: 'Ariana',
            address: 'America',
            rating: 5,
            img: 'https://i.ibb.co/v17Vs37/01-Aria-na.jpg',
            feedback:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex cum repudiandae labore temporibus dolorum perferendis est voluptatem odio illum.',
        },
        {
            name: 'Tarek Hasan',
            address: 'Khulna',
            rating: 5,
            img: 'https://i.ibb.co/XkhhhqV/ea7a3c32163929-567197ac70bda.png',
            feedback:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex cum repudiandae labore temporibus dolorum perferendis est voluptatem odio illum.',
        },
        {
            name: 'Asfika lira',
            address: ' Khulna',
            rating: 5,
            img: 'https://i.ibb.co/gtBw9VQ/download.png',
            feedback:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex cum repudiandae labore temporibus dolorum perferendis est voluptatem odio illum.',
        },
        {
            name: 'Raju ahmed',
            address: 'Dhaka',
            rating: 4,
            img: 'https://i.ibb.co/XkhhhqV/ea7a3c32163929-567197ac70bda.png',
            feedback:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex cum repudiandae labore temporibus dolorum perferendis est voluptatem odio illum.',
        },
    ];

    return (
        <Box sx={{ width: '90%', mx: 'auto', my: 4 }}>
            <Box sx={{ mb: 2 }}>
                <Typography
                    align="center"
                    variant="h5"
                    component="div"
                    gutterBottom
                >
                    Feedback From Our Members
                </Typography>
                <Typography
                    align="center"
                    variant="body2"
                    component="div"
                    gutterBottom
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Expedita officia nulla fuga error. Enim illum animi
                    molestiae minus illo! Placeat, laborum.
                </Typography>
            </Box>
            <Slider {...settings}>
                {Feedbacks &&
                    Feedbacks.map((review, index) => (
                        <Box key={index} sx={{ px: 1 }}>
                            <Box
                                component="img"
                                height="70px"
                                sx={{ borderRadius: '50%', mx: 'auto' }}
                                src={review.img}
                            />
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                align="center"
                            >
                                {review.name}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="caption"
                                component="div"
                                align="center"
                            >
                                From {review.address}
                            </Typography>
                            <Card sx={{ pt: 1, mb: 1 }}>
                                <CardContent>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Rating
                                            name="Rating"
                                            value={review.rating}
                                            readOnly
                                        />
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        align="center"
                                    >
                                        {review.feedback}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
            </Slider>
        </Box>
    );
};

export default HomeShowReview;
