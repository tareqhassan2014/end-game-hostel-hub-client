import { Grid, Paper } from '@mui/material';
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
        <Paper
            sx={{
                py: { md: 3, sm: 2, xs: 1 },
                px: { md: 5, sm: 1, xs: 0.5 },
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
                <SwiperSlide>
                    <Grid container>
                        <Grid md={6} xs={12} item>
                            <div>
                                <h1>Earn money</h1>
                                <p>
                                    Register as a affiliate user and earn
                                    unlimited from us.
                                </p>
                                <button>Contact Us</button>
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
                            <BannerLottie1 />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container>
                        <Grid md={6} xs={12} item>
                            <div>
                                <h1>Earn money</h1>
                                <p>
                                    Register as a affiliate user and earn
                                    unlimited from us.
                                </p>
                                <button>Contact Us</button>
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
                            <BannerLottie2 />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container>
                        <Grid md={6} xs={12} item>
                            <div>
                                <h1>Earn money</h1>
                                <p>
                                    Register as a affiliate user and earn
                                    unlimited from us.
                                </p>
                                <button>Contact Us</button>
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
                            <BannerLottie3 />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container>
                        <Grid md={6} xs={12} item>
                            <div>
                                <h1>Earn money</h1>
                                <p>
                                    Register as a affiliate user and earn
                                    unlimited from us.
                                </p>
                                <button>Contact Us</button>
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
                            <BannerLottie4 />
                        </Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Paper>
    );
}
