import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
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

const MyButton = styled('button')({
    border: 0,
    fontSize: 16,
    color: '#fff',
    lineHeight: 2.5,
    fontWeight: 500,
    borderRadius: 12,
    padding: '0 1rem',
    textAlign: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    outline: 'transparent',
    textDecoration: 'none',
    display: 'inline-block',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    textTransform: 'capitalize',
    transition: 'box-shadow 0.2s ease-in-out',
    background: 'linear-gradient(to right, #dd5e89, #e49767)',
    fontFamily:
        "-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    '&:hover': {
        boxShadow:
            '0 0 0.15rem rgba(0, 0, 0, 0.5), -0.125rem -0.25rem 1rem rgba(71, 172, 239, 0.5), 0.125rem 0.25rem 1rem rgba(255, 154, 90, 0.5)',
    },
    '&:focus': {
        boxShadow:
            '0 0 0.15rem rgba(0, 0, 0, 0.5), -0.125rem -0.25rem 1rem rgba(71, 172, 239, 0.5), 0.125rem 0.25rem 1rem rgba(255, 154, 90, 0.5)',
    },
});

SwiperCore.use([Autoplay]);

const bannerItem = [
    {
        title: 'Get a betterment environment for hostel life',
        description:
            'You can live like royalty in elegant hostels or find a bargain at hostels right in the city center. Come fast and get your chance.',
        button: 'Find Available Hostel',
        link: '/search-hostel',
        lottie: 'https://assets5.lottiefiles.com/packages/lf20_2gfeptkg.json',
    },
    {
        title: 'Five different unique dashboards are the main attraction',
        description:
            'A numerous analytical update defines different role player&#39;s experience.get our services and create your dashboard.',
        button: 'Create Your Dashboard',
        link: '/dashboard',
        lottie: 'https://assets4.lottiefiles.com/packages/lf20_n5hsffgz.json',
    },
    {
        title: 'Buy and sell your products with good price',
        description:
            ' Replace your products by purchasing and selling them. make money and decorate your rooms with super new set-up',
        button: 'Deal With Your Need',
        link: '/search-old-items',
        lottie: 'https://assets3.lottiefiles.com/private_files/lf30_ti7aknf9.json',
    },
    {
        title: 'Receive your delivery items from the delivery man timely',
        description:
            'Get your exact quality products without any kinds of scratch and fracture. Make your delivery man satisfied and be happy yourself.',
        button: 'Get Delivery Info',
        link: '/dashboard/profile',
        lottie: 'https://assets7.lottiefiles.com/packages/lf20_3tryizhw.json',
    },
];

const Banners = () => {
    const navigate = useNavigate();

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
                {bannerItem.map((item, index) => (
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
                                    <MyButton
                                        onClick={() => navigate(item.link)}
                                    >
                                        {item.button}
                                    </MyButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Banners;
