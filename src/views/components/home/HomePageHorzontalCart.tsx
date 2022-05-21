import EuroIcon from '@mui/icons-material/Euro';
import HomeIcon from '@mui/icons-material/Home';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import BedIcon from '@mui/icons-material/Bed';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Rating,
    Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { border, Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { useGetHostelsAdsQuery } from 'src/app/api';
import roomImg from './../../../assets/images/room-2.jpg';

// const useStyles = makeStyles(theme => ({
//     customHoverFocus: {
//       "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" }
//     }
//   }));

const HomePageHorizontalCart = () => {
    // const classes = useStyles();

    const iconStyle = {
        width: 60,
        height: 60,
    };

    const settings = {
        dots: true,
        infinite: false,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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

    const navigate = useNavigate();

    const [allHostelsAds, setAllHostelsAds] = useState<HostelAd[] | undefined>(
        undefined
    );

    const {
        data: hostel,
        isLoading,
        isSuccess,
    } = useGetHostelsAdsQuery('/hostelsAds');

    useEffect(() => {
        setAllHostelsAds(hostel?.data.data);
    }, [hostel?.data.data]);

    const boxBg = {
        backgroundColor: deepPurple[50],
    };
    return (
        <Box style={boxBg} sx={{ width: '90%', mx: 'auto', my: 2, py: 1 }}>
            <Slider {...settings}>
                {allHostelsAds &&
                    allHostelsAds.map((item, index) => (
                        <Box key={index} sx={{ px: 1, pt: 0 }}>
                            <Card
                                sx={{
                                    mb: 1,
                                    boxShadow: 1,
                                    py: '2px',
                                    px: '10px',
                                    backgroundColor: '#fff',
                                    borderRadius: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        overflow: 'hidden',
                                        my: 1,
                                        border: 0,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            borderRadius: '6px',
                                            maxWidth: '100%',
                                            width: '100%',
                                            m: 'auto',
                                            boxShadow: 0,
                                            transition: '.5s',
                                            transform: 'scale(1)',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                            },
                                        }}
                                        image={roomImg}
                                    />
                                </Box>
                                <CardContent sx={{ py: 2, px: 2 }}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            my: 0.6,
                                            backgroundColor: '#ECFAFB',
                                            py: 1,
                                            px: 2,
                                            borderRadius: '20px',
                                            mt: 2,
                                            mb: 3,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'start',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <BedIcon
                                                fontSize="medium"
                                                sx={{
                                                    backgroundColor: '#fff',
                                                    mr: 1,
                                                    boxSizing: 'border-box',
                                                    borderRadius: '20px',
                                                }}
                                            />

                                            <Box
                                                component="span"
                                                sx={{ color: '#64688c' }}
                                            >
                                                Adults: 4
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <CropLandscapeIcon
                                                fontSize="medium"
                                                sx={{
                                                    backgroundColor: '#fff',
                                                    mr: 1,
                                                    boxSizing: 'border-box',
                                                    borderRadius: '20px',
                                                }}
                                            />
                                            <Box
                                                component="span"
                                                sx={{ color: '#64688c' }}
                                            >
                                                30ft²
                                            </Box>
                                        </Box>
                                    </Typography>
                                    <Box component="span">
                                        <Rating
                                            style={{ fontSize: '1rem' }}
                                            name="Rating"
                                            value={4}
                                            readOnly
                                        />
                                    </Box>

                                    <Typography
                                        component="div"
                                        sx={{ height: 52 }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        sx={{ h: 80, fontSize: '12px' }}
                                    >
                                        {/* {item.description.slice(0, 115)}... */}
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Quas neque, nemo, id
                                        magnam magni ducimus consequatur qui
                                        dignissimos officia tenetur
                                        exercitationem
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ mb: 2 }}>
                                    <Grid container spacing={1}>
                                        <Grid
                                            item
                                            xs={12}
                                            lg={12}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Typography
                                                variant="button"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    ml: 0.5,
                                                    mt: 0.9,
                                                    color: 'warning.main',
                                                }}
                                            >
                                                <EuroIcon
                                                    sx={{ fontSize: 25 }}
                                                />
                                                {item.price} BDT
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    borderRadius: '30px',
                                                    border: 'none',
                                                    padding: '15px 25px',
                                                }}
                                                onClick={() =>
                                                    navigate(
                                                        `/search-hostel/${item._id}`
                                                    )
                                                }
                                            >
                                                Book Now
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Box>
                    ))}
            </Slider>
        </Box>
    );
};
export default HomePageHorizontalCart;
