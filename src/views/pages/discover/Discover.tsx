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
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const items = [
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
    {
        name: 'Hostel Name',
        price: 100,
        location: 'Barir Pisona',
        rating: 5,
    },
];

const Discover = () => {
    return (
        <div>
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
                    <Button size="small">see more</Button>
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
                    <Button size="small">see more</Button>
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
                    <Button size="small">see more</Button>
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
        </div>
    );
};

export default Discover;
