import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Icon,
    Rating,
    Skeleton,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetHostelsAdsQuery, useGetProductQuery } from 'src/app/api';

const items = [
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'daulotpout, Khulna',
        rating: 5,
    },
];

const Discover = () => {
    const navigate = useNavigate();
    const { data: products } = useGetProductQuery('/products');
    const { data: hostel, isLoading } = useGetHostelsAdsQuery('/hostelsAds');

    const [AllProducts, setAllProducts] = useState<IProduct[] | undefined>();

    const [allHostelsAds, setAllHostelsAds] = useState<HostelAd[] | undefined>(
        undefined
    );

    useEffect(() => {
        setAllHostelsAds(hostel?.data.data);
    }, [hostel?.data.data]);

    useEffect(() => {
        if (products) {
            setAllProducts(products.data.data);
        }
    }, [products]);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%', transition: { duration: 0.4 } }}
            exit={{ x: window.innerWidth, transition: { duration: 0.05 } }}
        >
            <Container sx={{ my: 5 }}>
                <Typography
                    variant="h5"
                    align="center"
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
                    Best hostel for You
                </Typography>
                <Box
                    sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}
                >
                    <Button
                        size="small"
                        onClick={() => navigate('/search-hostel')}
                    >
                        see more
                    </Button>
                </Box>
                <Grid
                    sx={{
                        height: 'auto',
                    }}
                    container
                    spacing={2}
                >
                    {isLoading && (
                        <Grid container>
                            {[...new Array(12)].map((_, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    lg={3}
                                    key={index}
                                    sx={{ py: 2 }}
                                >
                                    <Skeleton
                                        sx={{ bgcolor: 'grey.500' }}
                                        variant="rectangular"
                                        width={210}
                                        height={118}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {allHostelsAds &&
                        allHostelsAds.map((item, index) => (
                            <Grid key={index} item xs={12} sm={6} lg={2}>
                                <Card sx={{ maxWidth: '100%', pt: 1 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            maxWidth: '90%',
                                            width: 'auto',
                                            m: 'auto',
                                        }}
                                        image="https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc="
                                    />
                                    <CardContent sx={{ pb: 0, px: 2 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                        >
                                            {item.hostel.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                ml: -0.5,
                                            }}
                                        >
                                            <Icon color="primary">sell</Icon>{' '}
                                            {item.price} BDT
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                ml: -1,
                                            }}
                                        >
                                            <Icon color="primary">room</Icon>{' '}
                                            {item.hostel.address}
                                        </Typography>
                                        <Rating
                                            name="Rating"
                                            value={4}
                                            readOnly
                                        />
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" size="small">
                                            Booking
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() =>
                                                navigate(
                                                    `/search-hostel/${item._id}`
                                                )
                                            }
                                        >
                                            Details
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Container>
            <Container sx={{ my: 5 }}>
                <Typography
                    variant="h5"
                    align="center"
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
                    Best Product
                </Typography>
                <Box
                    sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}
                >
                    <Button
                        size="small"
                        onClick={() => navigate('/search-old-items')}
                    >
                        see more
                    </Button>
                </Box>
                <Grid
                    sx={{
                        height: 'auto',
                    }}
                    container
                    spacing={2}
                >
                    {isLoading && (
                        <Grid container>
                            {[...new Array(12)].map((_, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    key={index}
                                    sx={{ py: 2 }}
                                >
                                    <Skeleton
                                        sx={{ bgcolor: 'grey.500' }}
                                        variant="rectangular"
                                        width={210}
                                        height={118}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {AllProducts &&
                        AllProducts.map((product, index) => (
                            <Grid key={index} item xs={12} sm={6} lg={2}>
                                <Card sx={{ maxWidth: '100%', pt: 1 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            maxWidth: '90%',
                                            width: 'auto',
                                            m: 'auto',
                                        }}
                                        image="https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc="
                                    />
                                    <CardContent sx={{ pb: 0, px: 2 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                        >
                                            {product.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                ml: -0.5,
                                            }}
                                        >
                                            <Icon color="primary">sell</Icon>{' '}
                                            {product.price} BDT
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" size="small">
                                            Booking
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() =>
                                                navigate(
                                                    `/product/${product._id}`
                                                )
                                            }
                                        >
                                            Details
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Container>
            <Container sx={{ my: 5 }}>
                <Typography
                    variant="h5"
                    align="center"
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
                    Best Grocery for your hostel
                </Typography>
                <Box
                    sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}
                >
                    <Button
                        size="small"
                        onClick={() => navigate('/search-groceries')}
                    >
                        see more
                    </Button>
                </Box>
                <Grid
                    sx={{
                        height: 'auto',
                    }}
                    container
                    spacing={2}
                >
                    {items.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={2}>
                            <Card sx={{ maxWidth: '100%', pt: 1 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        maxWidth: '90%',
                                        width: 'auto',
                                        m: 'auto',
                                    }}
                                    image="https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc="
                                    alt={item.name}
                                />
                                <CardContent sx={{ pb: 0, px: 2 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            ml: -0.5,
                                        }}
                                    >
                                        <Icon color="primary">sell</Icon>{' '}
                                        {item.price} BDT
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            ml: -1,
                                        }}
                                    >
                                        <Icon color="primary">room</Icon>{' '}
                                        {item.location}
                                    </Typography>
                                    <Rating
                                        name="Rating"
                                        value={item.rating}
                                        readOnly
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small">
                                        Booking
                                    </Button>
                                    <Button variant="outlined" size="small">
                                        Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </motion.div>
    );
};

export default Discover;
