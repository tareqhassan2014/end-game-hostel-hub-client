import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerLottie from '../../Lottie/BannerLottie';
import { bannerItem, MyButton } from './style';

SwiperCore.use([Autoplay]);

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
                effect={'fade'}
                modules={[Autoplay, EffectFade]}
            >
                {bannerItem.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                background:
                                    'linear-gradient(to right, #1e3c72, #2a5298)',
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
