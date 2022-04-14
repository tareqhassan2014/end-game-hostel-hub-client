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
// icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BannerLottie1 from '../Lottie/BannerLottie1';
import BannerLottie2 from '../Lottie/BannerLottie2';
import BannerLottie3 from '../Lottie/BannerLottie3';
import BannerLottie4 from '../Lottie/BannerLottie4';
import BannerLottie5 from '../Lottie/BannerLottie5';
import BannerLottie6 from '../Lottie/BannerLottie6';
import BannerLottie7 from '../Lottie/BannerLottie7';
import { ArrowBack } from '@mui/icons-material';

const datas = [
    {
        name: 'Hostel Management',
        lottie: BannerLottie1,
    },
    {
        name: 'Find A Hostel',
        lottie: BannerLottie2,
    },
    {
        name: 'Shop',
        lottie: BannerLottie3,
    },
    {
        name: 'Buy sell',
        lottie: BannerLottie4,
    },
    {
        name: 'Buy sell',
        lottie: BannerLottie5,
    },
    {
        name: 'Inner Environment',
        lottie: BannerLottie6,
    },
    {
        name: 'Inner Environment',
        lottie: BannerLottie7,
    },
];

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
                                    FIND A HOSTEL
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

                                <Box
                                    sx={{
                                        display: { md: 'flex' },
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <MyButton size="small">
                                        Send us your queries
                                    </MyButton>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            height: '20px',
                                            mt: { md: 3, sm: 2, xs: 2 },
                                            fontSize: {
                                                md: 'inherit',
                                                sm: 'medium',
                                                xs: 'small',
                                            },
                                        }}
                                    >
                                        <TypeIt
                                            options={{
                                                strings: [
                                                    'Tell us your desires!',
                                                ],
                                                speed: 1,
                                                waitUntilVisible: true,
                                                loop: true,
                                                cursor: false,
                                            }}
                                        />
                                    </Typography>
                                </Box>
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

                                <Box
                                    sx={{
                                        display: { md: 'flex' },
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <MyButton size="small">
                                        Get Delivery Info
                                    </MyButton>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            height: '20px',
                                            mt: { md: 3, sm: 2, xs: 2 },
                                            fontSize: {
                                                md: 'inherit',
                                                sm: 'medium',
                                                xs: 'small',
                                            },
                                        }}
                                    >
                                        <TypeIt
                                            options={{
                                                strings: [
                                                    'Hit the deliveryman!',
                                                ],
                                                speed: 1,
                                                waitUntilVisible: true,
                                                loop: true,
                                                cursor: false,
                                            }}
                                        />
                                    </Typography>
                                </Box>
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
                                    variant="h2"
                                    sx={{
                                        mt: { md: '53px', sm: 2 },
                                        fontSize: { xs: '24px', sm: '32px' },
                                    }}
                                >
                                    DASHBOARD FEATURES
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
                                {/* <MyButton size="small">
                                    Get updated with dashboard
                                </MyButton> */}
                                <Box
                                    sx={{
                                        display: { md: 'flex' },
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <MyButton size="small">
                                        Get updated with dashboard
                                    </MyButton>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            height: '20px',
                                            mt: { md: 3, sm: 2, xs: 2 },
                                            fontSize: {
                                                md: 'inherit',
                                                sm: 'medium',
                                                xs: 'small',
                                            },
                                        }}
                                    >
                                        <TypeIt
                                            options={{
                                                strings: [
                                                    'Create your dashboard!',
                                                ],
                                                speed: 1,
                                                waitUntilVisible: true,
                                                loop: true,
                                                cursor: false,
                                            }}
                                        />
                                    </Typography>
                                </Box>
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
                                        mt: { md: '60px', sm: 2 },
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

                                <Box
                                    sx={{
                                        display: { md: 'flex' },
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <MyButton size="small">
                                        Request for the deal
                                    </MyButton>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            height: '20px',
                                            mt: { md: 3, sm: 2, xs: 2 },
                                            fontSize: {
                                                md: 'inherit',
                                                sm: 'medium',
                                                xs: 'small',
                                            },
                                        }}
                                    >
                                        <TypeIt
                                            options={{
                                                strings: ['Send your request!'],
                                                speed: 1,
                                                waitUntilVisible: true,
                                                loop: true,
                                                cursor: false,
                                            }}
                                        />
                                    </Typography>
                                </Box>
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
