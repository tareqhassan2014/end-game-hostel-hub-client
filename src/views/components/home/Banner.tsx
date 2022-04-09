import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerLottie1 from '../Lottie/BannerLottie1';
import BannerLottie2 from '../Lottie/BannerLottie2';
import BannerLottie3 from '../Lottie/BannerLottie3';
import BannerLottie4 from '../Lottie/BannerLottie4';

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
];

SwiperCore.use([Autoplay]);
export default function Banners() {
    return (
        <>
            <Box sx={{ width: '100%', height: { xs: '96%', md: '30rem' } }}>
                <Swiper
                    loop={true}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {datas.map((data, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    display: { md: 'flex' },
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Grid container>
                                    <Grid
                                        md={6}
                                        item
                                        component={Link}
                                        to="/contact"
                                    >
                                        <div>
                                            <h1>Earn money</h1>
                                            <p>
                                                Register as a affiliate user and
                                                earn unlimited from us.
                                            </p>
                                            <button>Contact Us</button>
                                        </div>
                                    </Grid>
                                    <Grid
                                        md={6}
                                        item
                                        sx={{ m: { mt: 0 }, height: '100%' }}
                                    >
                                        <data.lottie />
                                    </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    );
}
