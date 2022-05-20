import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetHostelsAdsQuery } from 'src/app/api';

const FindHostel = () => {
    const navigate = useNavigate();
    const [allHostelsAds, setAllHostelsAds] = useState<HostelAd[] | undefined>(
        undefined
    );

    const {
        data: hostel,
        isLoading,
        isSuccess,
    } = useGetHostelsAdsQuery('/hostelsAds');

    useEffect(() => {
        setAllHostelsAds(hostel?.data.data);
    }, [hostel?.data.data]);

    return (
        <Container sx={{ my: 5 }}>
            <Typography align="center" variant="h5">
                Top Rated Hostel
            </Typography>
            <Grid item xs={12} md={8} lg={9}>
                <Grid
                    sx={{
                        p: { xs: 1, md: 2, lg: 3 },
                        me: 1,
                        mt: 1,
                        borderRadius: 3,
                        height: 'auto',
                    }}
                    container
                    spacing={2}
                >
                    {isLoading && <div>Loading...</div>}

                    {allHostelsAds &&
                        allHostelsAds.map((hostel, index) => (
                            <Grid key={index} item xs={12} sm={6} lg={4}>
                                <Card sx={{ maxWidth: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            maxWidth: '90%',
                                            width: 'auto',
                                        }}
                                        image="https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc="
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {hostel.phone}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Price: {hostel.price} BDT
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Booking</Button>
                                        <Button
                                            size="small"
                                            onClick={() =>
                                                navigate(
                                                    `/search-hostel/${hostel._id}`
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
            </Grid>
        </Container>
    );
};

export default FindHostel;
