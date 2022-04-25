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
            <Container sx={{ my: 3 }}>
                <Box
                    sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}
                >
                    <Button size="small">see more</Button>
                </Box>
                <Grid
                    sx={{
                        borderRadius: 3,
                        height: 'auto',
                    }}
                    container
                    spacing={2}
                >
                    {items.map((item, index) => (
                        <Grid key={index} item xs={6} sm={4} lg={2}>
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
                                <CardContent sx={{ pb: 0 }}>
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
                                    >
                                        Price: {item.price} BDT
                                    </Typography>
                                    <Icon>location</Icon>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Location: {item.location}
                                    </Typography>

                                    <Rating
                                        name="Rating"
                                        value={item.rating}
                                        readOnly
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Booking</Button>
                                    <Button size="small">Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div>section-2</div>
            <div>section-3</div>
        </div>
    );
};

export default Discover;
