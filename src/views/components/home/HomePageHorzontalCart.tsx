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
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import EuroIcon from '@mui/icons-material/Euro';
import HomeIcon from '@mui/icons-material/Home';
import { useSearchForHostelQuery } from 'src/app/api';
import { deepPurple } from '@mui/material/colors';

interface hostelData {
    address: string;
    admin: object;
    banner: string;
    createdAt: string;
    estimation: string;
    hostelName: string;
    member: [];
    request: [];
    status: string;
    thumbnail: string;
    totalSit: number;
    _id: string;
}

interface CreateHostelAddRequest {
    price: number;
    phone: string;
    details: string;
    numberOfVacancy: number;
    hostel: hostelData;
    _id: string;
}

const HomePageHorzontalCart = () => {
    const settings = {
        dots: true,
        infinite: false,

        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 5,
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

    const [allHostelAdds, setAllHostelAdds] = useState<
        CreateHostelAddRequest[] | undefined
    >(undefined);

    const {
        data: hostel,
        isLoading,
        isSuccess,
    } = useSearchForHostelQuery('/hostelAdd');

    useEffect(() => {
        setAllHostelAdds(hostel?.data.data);
    }, [hostel?.data.data]);
    console.log(allHostelAdds);
    const boxBg = {
        backgroundColor: deepPurple[50],
    };
    return (
        <Box style={boxBg} sx={{ width: '90%', mx: 'auto', my: 2, py: 1 }}>
            <Slider {...settings}>
                {allHostelAdds &&
                    allHostelAdds.map((item, index) => (
                        <Box key={index} sx={{ px: 1 }}>
                            <Card sx={{ py: 1, mb: 1, boxShadow: 1 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        maxWidth: '95%',
                                        width: 'auto',
                                        m: 'auto',
                                        my: 1,
                                    }}
                                    image="https://i.ibb.co/qJXxcCG/Hostel-min.jpg"
                                />
                                <CardContent sx={{ pb: 0, px: 2 }}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',

                                            my: 0.6,
                                        }}
                                    >
                                        <HomeIcon sx={{ fontSize: 20 }} />
                                        15 ft X 12 ft
                                    </Typography>

                                    <Rating name="Rating" value={4} readOnly />

                                    <Typography variant="h6">
                                        Double Bed
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.details.slice(0, 25)}...
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
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
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    borderRadius: '30px',
                                                    border: 'none',
                                                    padding: '4px 15px',
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
export default HomePageHorzontalCart;
