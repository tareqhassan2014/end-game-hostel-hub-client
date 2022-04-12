import { Box, Grid } from '@mui/material';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeatureApp = () => {
    const data = [
        {
            label: 'Launch Screen',
            desc: 'Wanna try our App? Grab this opportunity and browse comfortably.',
            goal: 'কম্পিউটার সায়েন্সের সুযোগ পাওনি কিন্তু কম্পিউটার সায়েন্সের মেইন মেইন জিনিসগুলো ধরে ধরে শিখতে চাইলে এই কোর্সে জয়েন করো।🥊 ',
            img: 'https://i.ibb.co/jzfQ5rM/launch-Screen.png',
        },
        {
            label: 'First Page',
            goal: 'আনলিমিটেড হেল্প, গাইডলাইন; এমনকি গুগল মিট এ স্ক্রিনশেয়ার করে সমস্যা সমাধান করতে চাইলে; এই কোর্সে জয়েন করো।💡',
            desc: 'Planning to manage your Hostel? Try us to enjoy hassle-free management.',
            img: 'https://i.ibb.co/xYzLvrZ/first-Page.png',
        },
        {
            label: 'Sign-up Page',
            desc: 'Need a secured and reliable data management? Explore our Authentication Feature. ',
            goal: 'আমাকে বিশ্বাস করুন, আমি আমার জীবনের চেয়ে কোডিং বেশি পছন্দ করি এবং আমি এতে আমার সময় ব্যয় করি।🎓',
            img: 'https://i.ibb.co/gDWhgpM/signup.png',
        },
        {
            label: 'Profile',
            desc: 'Keep your Profile aesthetic looked with our Hostel Hub App.',
            goal: 'লোকেদের জানাতে আপনার দুর্দান্ত প্রোফাইল তৈরি করুন যাতে তারা হিংসা অনুভব করে।💪',
            img: 'https://i.ibb.co/pjfD7bK/profile.png',
        },
        {
            label: 'Dashboard',
            desc: 'We offer our Dashboard with cool interface and various amazing features.',
            goal: 'আমাদের সাথে যোগাযোগ করে আপনার ড্যাশবোর্ড তৈরি করুন কারণ আপনার জন্য অফার চলছে।🚀',
            img: 'https://i.ibb.co/KLWzy3k/dashboard.png',
        },
        {
            label: 'Filter',
            desc: 'Why not save time using our efficient searching option with Filter?🕑',
            goal: 'সঠিকভাবে তথ্য সংগ্রহ করে আপনার ইচ্ছানুযায়ী রুম পান কারণ এটি অত্যন্ত প্রয়োজনীয়।',
            img: 'https://i.ibb.co/mbnKdCp/filter.png',
        },
        {
            label: 'Payment',
            goal: 'Facing issues with payment? Try us with a range of different Payment Gateway.',
            desc: 'The process of Payment has been displayed on it so here you are',
            img: 'https://i.ibb.co/wQHLBqk/transaction.png',
        },
    ];
    return (
        <Box
            sx={{
                py: { md: 3, sm: 2, xs: 1 },
                px: { md: 5, sm: 1, xs: 0.5 },
                background: 'lightBlue',
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
                                    <h1>{item.label}</h1>
                                    <br />
                                    <p>{item.desc}</p>
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
