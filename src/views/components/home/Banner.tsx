import styled from '@emotion/styled';
import { Box, Button, Grid, Typography } from '@mui/material';
// swiper css
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
// typeit
import TypeIt from 'typeit-react';
// lottie-component
import BannerLottie1 from '../Lottie/BannerLottie1';
import BannerLottie4 from '../Lottie/BannerLottie4';
import BannerLottie5 from '../Lottie/BannerLottie5';
import BannerLottie6 from '../Lottie/BannerLottie6';
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
export default function Banners() {
    return (
        <Box
            sx={{
                py: { md: 3, sm: 2, xs: 1 },
                px: { md: 5, sm: 1, xs: 0.5 },
            }}
        >
            <Swiper
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Grid container>
                        <Grid md={6} xs={12} item>
                            <Box
                                sx={{
                                    ml: { sm: 3, xs: 2 },
                                    mb: { sm: 3, xs: 2 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: { xs: '24px', sm: '32px' },
                                    }}
                                    variant="h2"
                                >
                                    <TypeIt
                                        options={{
                                            strings: ['FIND A HOSTEL'],
                                            speed: 1,
                                            waitUntilVisible: true,
                                            loop: true,
                                            cursor: false,
                                        }}
                                    />
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        mt: { md: 2.5, xs: 1 },
                                        mb: { md: 4, xs: 3 },
                                        textAlign: { xm: 'justify' },
                                    }}
                                >
                                    You can live like royalty in elegant hostels
                                    or find a bargain at hostels right in the
                                    city center. If so then we have created for
                                    you a wonderful environment. Come fast and
                                    get your chance.
                                </Typography>
                                <MyButton size="small">
                                    Send us your queries
                                </MyButton>
                            </Box>
                        </Grid>
                        <Grid
                            md={6}
                            xs={12}
                            item
                            sx={{
                                height: {
                                    md: 430,
                                    sm: 350,
                                    xs: 300,
                                },
                            }}
                        >
                            <BannerLottie1 />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container>
                        <Grid
                            md={6}
                            xs={12}
                            item
                            sx={{
                                height: {
                                    md: 500,
                                    sm: 400,
                                    xs: 300,
                                    pb: { sm: 5, xs: 5 },
                                },
                            }}
                        >
                            <BannerLottie6 />
                        </Grid>
                        <Grid md={6} xs={12} item>
                            <Box
                                sx={{
                                    ml: { sm: 3, xs: 2 },
                                    mt: { sm: 3, xs: 2 },
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: { xs: '24px', sm: '32px' },
                                    }}
                                >
                                    GET FAST DELIVERY
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        mt: { md: 2.5, xs: 1 },
                                        mb: { md: 4, xs: 3 },
                                    }}
                                >
                                    No more waiting! receive your items from the
                                    delivery man timely. Get your exact quality
                                    products without any kinds of scratch and
                                    fracture. Make your delivery man satisfied
                                    and be happy yourself.
                                </Typography>
                                <MyButton size="small">
                                    Get Delivery Info
                                </MyButton>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container>
                        <Grid
                            md={6}
                            xs={12}
                            item
                            sx={{
                                height: {
                                    md: 500,
                                    sm: 400,
                                    xs: 300,
                                },
                            }}
                        >
                            <BannerLottie5 />
                        </Grid>
                        <Grid md={6} xs={12} item>
                            <Box
                                sx={{
                                    ml: { sm: 3, xs: 2 },
                                    mt: { sm: 3, xs: 2 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: { xs: '24px', sm: '32px' },
                                    }}
                                    variant="h2"
                                >
                                    <TypeIt
                                        options={{
                                            strings: ['DASHBOARD FEATURES'],
                                            speed: 1,
                                            waitUntilVisible: true,
                                            loop: true,
                                            cursor: false,
                                        }}
                                    />
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        mt: { md: 2.5, xs: 1 },
                                        mb: { md: 4, xs: 3 },
                                    }}
                                >
                                    The uniqueness of five different dashboards
                                    are the main attraction for you. A numerous
                                    analytical update defines different role
                                    player&#39;s experience. So do not get late,
                                    get our services and create your dashboard.
                                </Typography>
                                <MyButton size="small">
                                    Get updated with dashboard
                                </MyButton>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid container>
                        <Grid md={6} xs={12} item>
                            <Box
                                sx={{
                                    ml: { sm: 3, xs: 2 },
                                    mt: { sm: 3, xs: 2 },
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mt: { md: 5, sm: 2 },
                                        fontSize: { xs: '24px', sm: '32px' },
                                    }}
                                >
                                    BUY & SELL
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        mt: { md: 2.5, xs: 1 },
                                        mb: { md: 4, xs: 3 },
                                    }}
                                >
                                    Replace your products by purchasing and
                                    selling them to customers. Going through the
                                    process, make money as well as decorate your
                                    room with beautiful set-up of new products.
                                </Typography>
                                <MyButton size="small">
                                    Request for the deal
                                </MyButton>
                            </Box>
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
                            <BannerLottie4 />
                        </Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}
