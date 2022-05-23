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
import { useNavigate } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const LoadingContainer = () => {
    return (
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
    );
};

interface IHostelCard {
    item: HostelAd;
}

export const HostelCard = ({ item }: IHostelCard) => {
    const navigate = useNavigate();
    console.log(item, item.title, item.hostel.city, item.hostel.totalSit);

    return (
        <Box sx={{ maxWidth: '100%', borderRadius: 0 }}>
            <Card sx={{ borderRadius: 0 }}>
                <Box sx={{ overflow: 'hidden', position: 'relative' }}>
                    <CardMedia
                        component="img"
                        sx={{
                            borderRadius: 0,
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            m: 'auto',
                            transition: '.5s',
                            transform: 'scale(1)',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            },
                        }}
                        image="https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc="
                    />
                    <Typography
                        component="div"
                        sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 50,
                            backgroundColor: '#fff',
                            color: '#235784',
                            py: 1,
                            px: 2,
                            fontWeight: 'bold',
                            borderStartStartRadius: 1,
                        }}
                    >
                        ৳{item.price}
                        <Typography component="span" sx={{ color: '#2C3C4A' }}>
                            /month
                        </Typography>
                    </Typography>
                </Box>

                <CardContent sx={{ pb: 0, px: 2 }}>
                    <Typography
                        component="div"
                        sx={{
                            fontSize: '17px',
                            height: '46px',
                            fontWeight: 'bolder',
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            ml: -0.5,
                            color: '#235784',
                            fontWeight: 'light',
                            mt: 2,
                            mb: 1,
                        }}
                    >
                        <Typography
                            component="span"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <PlaceIcon /> {item?.hostel.city}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                ml: 3,
                            }}
                        >
                            <PeopleOutlineIcon sx={{ mr: 1 }} />{' '}
                            {item?.hostel.totalSit}
                        </Typography>
                    </Typography>
                    <Typography
                        component="span"
                        color="text.secondary"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            style={{ fontSize: '1.02rem' }}
                            name="Rating"
                            value={item?.hostel.rating}
                            readOnly
                        />
                    </Typography>
                </CardContent>
                <CardActions
                    onClick={() => navigate(`/search-hostel/${item._id}`)}
                    sx={{
                        color: '#235784',
                        fontSize: ' 1rem',
                        fontWeight: 'bold',
                        ml: 1,
                        cursor: 'pointer',
                        mt: 3,
                    }}
                >
                    See availability <ArrowRightAltIcon />
                </CardActions>
            </Card>
        </Box>
    );
};

interface IProductCard {
    product: IProduct;
}

export const ProductCard = ({ product }: IProductCard) => {
    const navigate = useNavigate();
    return (
        <Card
            sx={{ maxWidth: '100%', pt: 1 }}
            onClick={() => navigate(`/product/${product._id}`)}
        >
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
                <Typography gutterBottom variant="h6" component="div">
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
                    <Icon color="primary">sell</Icon> {product.price} BDT
                </Typography>
            </CardContent>
        </Card>
    );
};

interface IGroceryCard {
    grocery: Grocery;
}
export const GroceryCard = ({ grocery }: IGroceryCard) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: '100%', pt: 1 }}>
            <CardMedia
                component="img"
                sx={{
                    maxWidth: '90%',
                    width: 'auto',
                    m: 'auto',
                }}
                image="https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc="
                alt={grocery.title}
            />
            <CardContent sx={{ pb: 0, px: 2 }}>
                <Typography gutterBottom variant="h6" component="div">
                    {grocery.title}
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
                    <Icon color="primary">sell</Icon> {grocery.price} BDT
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
                    <Icon color="primary">room</Icon> {grocery.store.address}
                </Typography>
                <Rating name="Rating" value={4} readOnly />
            </CardContent>
        </Card>
    );
};

interface ContainerProps {
    destination: string;
    title: string;
    isLoading: boolean;
    children: React.ReactNode;
}

export const RootContainer = ({
    destination,
    title,
    children,
    isLoading,
}: ContainerProps) => {
    const navigate = useNavigate();
    return (
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
                {title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Button size="small" onClick={() => navigate(destination)}>
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
                {isLoading ? <LoadingContainer /> : children}
            </Grid>
        </Container>
    );
};
