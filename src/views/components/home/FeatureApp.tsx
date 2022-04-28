import GetAppIcon from '@mui/icons-material/GetApp';
import { Box, Button, Grid, Typography } from '@mui/material';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay]);

const FeatureApp = () => {
    const myStyle = {
        backgroundImage:
            "url('https://i.ibb.co/SBsYjnc/background-1409125-960-720.png')",
        height: '90%',
        marginTop: '70px',
        paddingTop: '30px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const data = [
        {
            title: 'LAUNCH SCREEN',
            des: 'Wanna try our App? Grab this opportunity and browse comfortably 📲',
            img: 'https://i.ibb.co/jzfQ5rM/launch-Screen.png',
        },
        {
            title: 'FIRST PAGE',
            des: 'Planning to manage your Hostel? Try us to enjoy hassle-free management 📜',
            img: 'https://i.ibb.co/xYzLvrZ/first-Page.png',
        },
        {
            title: 'SIGN-UP PAGE',
            des: 'Need a secured and reliable data management? Explore our Authentication Feature 🗳',
            img: 'https://i.ibb.co/gDWhgpM/signup.png',
        },
        {
            title: 'PROFILE',
            des: 'Keep your Profile aesthetic looked with our Hostel Hub App 🗄',
            img: 'https://i.ibb.co/pjfD7bK/profile.png',
        },
        {
            title: 'DASHBOARD',
            des: 'We offer our Dashboard with cool interface and various amazing features 📊',
            img: 'https://i.ibb.co/KLWzy3k/dashboard.png',
        },
        {
            title: 'FILTER',
            des: 'Why not save time using our efficient searching option with Filter? 🕑',
            img: 'https://i.ibb.co/mbnKdCp/filter.png',
        },
        {
            title: 'PAYMENT',
            des: 'Facing issues with payment? Try us with a range of different Payment Gateway method💳',
            img: 'https://i.ibb.co/wQHLBqk/transaction.png',
        },
    ];
    return (
        <Box
            style={myStyle}
            sx={{
                py: { md: 5, sm: 2, xs: 1 },
                px: { md: 3, sm: 1, xs: 0.5 },
                // background: 'lightBlue',
            }}
        >
            <Swiper
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {data.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Grid container>
                            <Grid md={6} sm={6} xs={12} item>
                                <Box
                                    sx={{
                                        ml: 2,
                                        minWidth: {
                                            md: 'auto',
                                            sm: '500px',
                                            xs: 'auto',
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            pt: 3,
                                            fontSize: {
                                                xs: '24px',
                                                sm: '32px',
                                            },
                                        }}
                                        style={{ color: 'lightBlue' }}
                                        variant="h2"
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="subtitle2"
                                        sx={{ pt: 5 }}
                                        style={{ color: 'white' }}
                                    >
                                        {item.des}
                                    </Typography>

                                    <Button
                                        sx={{ mt: 7 }}
                                        variant="contained"
                                        color="secondary"
                                        style={{ color: 'white' }}
                                    >
                                        Try it out! <GetAppIcon></GetAppIcon>
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid
                                md={6}
                                sm={12}
                                xs={12}
                                item
                                sx={{
                                    height: {
                                        lg: 400,
                                        md: 400,
                                        sm: 375,
                                        xs: 300,
                                    },
                                    mt: { xs: 3 },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: {
                                            lg: '100%',
                                            md: '90%',
                                            sm: '100%',
                                        },
                                        width: '100%',
                                    }}
                                    component="img"
                                    src={item.img}
                                    alt="feature-image"
                                />
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default FeatureApp;
