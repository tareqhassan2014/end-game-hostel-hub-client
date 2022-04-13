import GetAppIcon from '@mui/icons-material/GetApp';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeatureApp = () => {
    const myStyle = {
        backgroundImage:
            "url('https://i.ibb.co/SBsYjnc/background-1409125-960-720.png')",
        height: '500px',
        marginTop: '70px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const data = [
        {
            title: 'Launch Screen',
            des: 'Wanna try our App? Grab this opportunity and browse comfortably.📲',
            img: 'https://i.ibb.co/jzfQ5rM/launch-Screen.png',
        },
        {
            title: 'First Page',
            des: 'Planning to manage your Hostel? Try us to enjoy hassle-free management.📜',
            img: 'https://i.ibb.co/xYzLvrZ/first-Page.png',
        },
        {
            title: 'Sign-up Page',
            des: 'Need a secured and reliable data management? Explore our Authentication Feature.🗳',
            img: 'https://i.ibb.co/gDWhgpM/signup.png',
        },
        {
            title: 'Profile',
            des: 'Keep your Profile aesthetic looked with our Hostel Hub App.🗄',
            img: 'https://i.ibb.co/pjfD7bK/profile.png',
        },
        {
            title: 'Dashboard',
            des: 'We offer our Dashboard with cool interface and various amazing features.📊',
            img: 'https://i.ibb.co/KLWzy3k/dashboard.png',
        },
        {
            title: 'Filter',
            des: 'Why not save time using our efficient searching option with Filter?🕑',
            img: 'https://i.ibb.co/mbnKdCp/filter.png',
        },
        {
            title: 'Payment',
            des: 'Facing issues with payment? Try us with a range of different Payment Gateway.💳',
            img: 'https://i.ibb.co/wQHLBqk/transaction.png',
        },
    ];
    return (
        <Box
            style={myStyle}
            sx={{
                py: { md: 3, sm: 2, xs: 1 },
                px: { md: 5, sm: 1, xs: 0.5 },
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
                            <Grid md={6} xs={12} item>
                                <div>
                                    <Typography
                                        sx={{ pt: 3 }}
                                        style={{ color: 'lightBlue' }}
                                        variant="h2"
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{ pt: 5 }}
                                        style={{ color: 'black' }}
                                    >
                                        {item.des}
                                    </Typography>

                                    <Button
                                        sx={{ mt: 7 }}
                                        variant="contained"
                                        color="secondary"
                                        style={{ color: 'white' }}
                                    >
                                        Try it out!<GetAppIcon></GetAppIcon>
                                    </Button>
                                </div>
                            </Grid>
                            <Grid
                                md={6}
                                xs={12}
                                item
                                sx={{
                                    height: {
                                        md: 450,
                                        sm: 350,
                                        xs: 300,
                                    },
                                }}
                            >
                                <Box
                                    sx={{ height: '100%' }}
                                    component="img"
                                    src={item.img}
                                    alt=""
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
