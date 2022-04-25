import styled from '@emotion/styled';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// swiper css
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerLottie from '../Lottie/BannerLottie';
// css
import './Banner.css';

const MyButton = styled(Button)({
    backgroundColor: '#5d3f6a',
    display: 'inline-block',
    color: 'white',
    padding: '8px 15px',
    margin: 2,
    marginTop: '30px',
    fontSize: 10,
    borderRadius: 3,
    '&:hover': {
        backgroundColor: '#2ab7ca',
        color: 'white',
    },
});

SwiperCore.use([Autoplay]);

const bannerItem = [
    {
        title: 'Get a betterment environment for hostel life',
        description:
            'You can live like royalty in elegant hostels or find a bargain at hostels right in the city center. Come fast and get your chance.',
        button: ' Find Available Hostel',
        link: '/search-hostel',
        lottie: 'https://assets5.lottiefiles.com/packages/lf20_2gfeptkg.json',
    },
    {
        title: 'Buy and sell your products with good price.',
        description:
            'You can live like royalty in elegant hostels or find a bargain at hostels right in the city center. Come fast and get your chance.',
        button: ' Find Available Hostel',
        link: '/search-hostel',
        lottie: 'https://assets5.lottiefiles.com/packages/lf20_2gfeptkg.json',
    },
];

const Banners = () => {
    const navigate = useNavigate();

    const handleFindHostelButton = () => {
        navigate('/search-hostel');
    };
    const handleDashboardButton = () => {
        navigate('/dashboard');
    };
    const handleDeliveryButton = () => {
        navigate('/dashboard/profile');
    };
    const handleDealButton = () => {
        navigate('/search-old-items');
    };

    return (
        <Box
            sx={{
                py: { md: '60px', sm: 2, xs: 1 },
                px: { md: 5, sm: 1, xs: 0.5 },
                background: 'linear-gradient(to right, #1e3c72, #2a5298)',
                color: 'white',
            }}
        >
            <Swiper
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {bannerItem.map((item, index) => {
                    <SwiperSlide key={index}>
                        <Grid
                            container
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Grid
                                md={6}
                                sm={12}
                                xs={12}
                                item
                                sx={{
                                    mb: { md: 0, sm: 4, xs: 4 },
                                    height: { md: 430, sm: 350, xs: 300 },
                                }}
                            >
                                <BannerLottie src={item.lottie} />
                            </Grid>
                            <Grid md={6} sm={12} xs={12} item>
                                <Box
                                    sx={{
                                        p: { sm: 5, xs: 0, md: 0 },
                                        mt: { sm: 5, xs: 5 },
                                        mx: { sm: 3, xs: 2 },
                                        mb: { md: 0, sm: 4, xs: 4 },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            mt: { md: 5, sm: 2 },
                                            fontSize: {
                                                md: '46px',
                                                xs: '24px',
                                                sm: '32px',
                                            },
                                            fontWeight: '700',
                                            lineHeight: '1.2',
                                            fontFamily: 'Poppins, sans-serif',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            pt: { md: 2 },
                                            pb: { md: 1 },
                                            mt: { md: 2.5, xs: 3 },
                                            mb: { md: 4, xs: 3 },
                                            textAlign: { xm: 'justify' },
                                            fontSize: {
                                                md: '16px',
                                                // xs: '24px',
                                                // sm: '32px',
                                            },
                                            fontWeight: 'normal',
                                            lineHeight: '24px',
                                            fontFamily: 'Poppins, sans-serif',
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <button
                                        onClick={() => navigate(item.link)}
                                        className="button-62"
                                        role="button"
                                    >
                                        {item.button}
                                    </button>
                                </Box>
                            </Grid>
                        </Grid>
                    </SwiperSlide>;
                })}

                <SwiperSlide>
                    <Grid
                        container
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Grid md={6} sm={12} xs={12} item>
                            <Box
                                sx={{
                                    p: { sm: 5, xs: 0, md: 0 },
                                    mt: { sm: 5, xs: 5 },
                                    mx: { sm: 3, xs: 2 },
                                    mb: { md: 0, sm: 4, xs: 4 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: {
                                            md: '46px',
                                            xs: '24px',
                                            sm: '32px',
                                        },
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    Get a betterment environment for hostel life
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        pt: { md: 2 },
                                        pb: { md: 1 },
                                        mt: { md: 2.5, xs: 3 },
                                        mb: { md: 4, xs: 3 },
                                        textAlign: { xm: 'justify' },
                                        fontSize: {
                                            md: '16px',
                                            // xs: '24px',
                                            // sm: '32px',
                                        },
                                        fontWeight: 'normal',
                                        lineHeight: '24px',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    You can live like royalty in elegant hostels
                                    or find a bargain at hostels right in the
                                    city center. Come fast and get your chance.
                                </Typography>
                                <button
                                    onClick={handleFindHostelButton}
                                    className="button-62"
                                    role="button"
                                >
                                    Find Available Hostel
                                </button>
                            </Box>
                        </Grid>
                        <Grid
                            md={6}
                            sm={12}
                            xs={12}
                            item
                            sx={{
                                mb: { md: 0, sm: 4, xs: 4 },
                                height: { md: 430, sm: 350, xs: 300 },
                            }}
                        >
                            <BannerLottie src="https://assets5.lottiefiles.com/packages/lf20_2gfeptkg.json" />
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid
                        container
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Grid
                            md={6}
                            sm={12}
                            xs={12}
                            item
                            sx={{
                                // display: 'flex',
                                height: '100%',
                                mb: { md: 0, sm: 4, xs: 4 },
                            }}
                        >
                            <BannerLottie src="https://assets4.lottiefiles.com/packages/lf20_n5hsffgz.json" />
                        </Grid>
                        <Grid md={6} sm={12} xs={12} item>
                            <Box
                                sx={{
                                    p: { sm: 5, xs: 0, md: 0 },
                                    mt: { sm: 5, xs: 5 },
                                    mx: { sm: 3, xs: 2 },
                                    mb: { md: 0, sm: 4, xs: 4 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: {
                                            md: '46px',
                                            xs: '24px',
                                            sm: '32px',
                                        },
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    Five different unique dashboards are the
                                    main attraction
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        pt: { md: 2 },
                                        pb: { md: 1 },
                                        mt: { md: 2.5, xs: 3 },
                                        mb: { md: 4, xs: 3 },
                                        textAlign: { xm: 'justify' },
                                        fontSize: {
                                            md: '16px',
                                            // xs: '24px',
                                            // sm: '32px',
                                        },
                                        fontWeight: 'normal',
                                        lineHeight: '24px',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    A numerous analytical update defines
                                    different role player&#39;s experience.get
                                    our services and create your dashboard.
                                </Typography>
                                <button
                                    onClick={handleDashboardButton}
                                    className="button-62"
                                    role="button"
                                >
                                    Create Your Dashboard
                                </button>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid
                        container
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Grid
                            md={6}
                            sm={12}
                            xs={12}
                            item
                            sx={{
                                mb: { md: 0, sm: 4, xs: 4 },
                                height: 500,
                            }}
                        >
                            <BannerLottie src="https://assets7.lottiefiles.com/packages/lf20_3tryizhw.json" />
                        </Grid>
                        <Grid md={6} sm={12} xs={12} item>
                            <Box
                                sx={{
                                    p: { sm: 5, xs: 0, md: 0 },
                                    mt: { sm: 5, xs: 0 },
                                    mx: { sm: 3, xs: 4 },
                                    mb: { md: 0, sm: 4, xs: 4 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        mt: { md: 5, sm: 0, sx: 0 },
                                        fontSize: {
                                            md: '46px',
                                            xs: '24px',
                                            sm: '32px',
                                        },
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    Receive your delivery items from the
                                    delivery man timely
                                </Typography>
                                <Typography
                                    sx={{
                                        pt: { md: 2 },
                                        pb: { md: 1 },
                                        mt: { md: 2.5, xs: 3 },
                                        mb: { md: 4, xs: 3 },
                                        textAlign: { xm: 'justify' },
                                        fontSize: {
                                            md: '16px',
                                            // xs: '24px',
                                            // sm: '32px',
                                        },
                                        fontWeight: 'normal',
                                        lineHeight: '24px',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    Get your exact quality products without any
                                    kinds of scratch and fracture. Make your
                                    delivery man satisfied and be happy
                                    yourself.
                                </Typography>
                                <button
                                    onClick={handleDeliveryButton}
                                    className="button-62"
                                    role="button"
                                >
                                    Get Delivery Info
                                </button>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid
                        container
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Grid md={6} sm={12} xs={12} item>
                            <Box
                                sx={{
                                    p: { sm: 5, xs: 0, md: 2 },
                                    mt: { sm: 5, xs: 5, md: 0 },
                                    mx: { sm: 3, xs: 2 },
                                    mb: { md: 0, sm: 4, xs: 4 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: {
                                            md: '46px',
                                            xs: '24px',
                                            sm: '32px',
                                        },
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    Buy and sell your products with good price.
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        pt: { md: 2 },
                                        pb: { md: 1 },
                                        mt: { md: 2.5, xs: 3 },
                                        mb: { md: 4, xs: 3 },
                                        textAlign: { xm: 'justify' },
                                        fontSize: {
                                            md: '16px',
                                            // xs: '24px',
                                            // sm: '32px',
                                        },
                                        fontWeight: 'normal',
                                        lineHeight: '24px',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    Replace your products by purchasing and
                                    selling them. make money and decorate your
                                    rooms with super new set-up
                                </Typography>
                                <button
                                    onClick={handleDealButton}
                                    className="button-62"
                                    role="button"
                                >
                                    Deal With Your Need
                                </button>
                            </Box>
                        </Grid>
                        <Grid
                            md={6}
                            sm={12}
                            xs={12}
                            item
                            sx={{
                                mb: { md: 0, sm: 4, xs: 2 },
                                height: { md: 450, sm: 350, xs: 300 },
                            }}
                        >
                            <BannerLottie src="https://assets3.lottiefiles.com/private_files/lf30_ti7aknf9.json" />
                        </Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default Banners;
