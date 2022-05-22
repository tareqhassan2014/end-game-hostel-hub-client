import {
    Button,
    Card,
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
    return (
        <Card
            sx={{ maxWidth: '100%', pt: 1, cursor: 'pointer' }}
            onClick={() => navigate(`/search-hostel/${item._id}`)}
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
                <Typography component="div">{item.hostel.name}</Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: -0.5,
                    }}
                >
                    <Icon color="primary">sell</Icon> {item.price} BDT
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
                    <Icon color="primary">room</Icon> {item.hostel.address}
                </Typography>
                <Rating name="Rating" value={4} readOnly />
            </CardContent>
        </Card>
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
