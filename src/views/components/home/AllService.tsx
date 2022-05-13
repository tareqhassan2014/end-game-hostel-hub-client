import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const AllService = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                m: 2,
                p: 2,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        sx={{ m: 1, bgcolor: 'secondary.main', color: 'white' }}
                    >
                        <MiscellaneousServicesOutlinedIcon />
                    </Avatar>
                    <Typography variant="h6" component="div" gutterBottom>
                        OUR SERVICES
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ textAlign: 'center', color: '#6A52E5', mb: 5 }}
                        component="div"
                        gutterBottom
                    >
                        Facilities & Service
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    marginTop: 4,
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <SearchIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Find Hostel
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Anyone find Mess or Hostel according to
                                    their location, budget and environment
                                    through this website
                                </Typography>
                            </CardContent>

                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton
                                        onClick={() =>
                                            navigate('/search-hostel')
                                        }
                                    >
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <MapsHomeWorkOutlinedIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Create Hostel
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Anyone can register a mess/hostel in this
                                    website and get their client easily and
                                    profite more.
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton
                                        onClick={() => navigate('/dashboard')}
                                    >
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <ShoppingCartOutlinedIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Create Shop
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas nemo velit
                                    aliquam?
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton
                                        onClick={() => navigate('/dashboard')}
                                    >
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <SellOutlinedIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Sell/Exchange Product
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor amet consectetur adipisic
                                    elit. Voluptas nemo velit repudiandae
                                    aliquam?
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton
                                        onClick={() =>
                                            navigate('/search-old-items')
                                        }
                                    >
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <MiscellaneousServicesOutlinedIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Easy Hostel Managment
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Laborum nostrum velit eos
                                    nulla! A!
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton
                                        onClick={() => navigate('/dashboard')}
                                    >
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <HourglassBottomIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Manage & Count Meal
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Iusto suscipit perferendis
                                    tempora quam.
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton
                                        onClick={() => navigate('/dashboard')}
                                    >
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <LocalShippingIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Product Home Delevery
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Lorem earum in corporis
                                    veritatis?
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton>
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: '100%',
                                minHeight: '300px',
                                borderRadius: 1,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            m: 1,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        }}
                                    >
                                        <FeedbackIcon />
                                    </Avatar>
                                </Box>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                >
                                    Give Feedback
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nam recusandae ab possimus
                                    sequi.
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title="Details">
                                    <IconButton>
                                        <ArrowRightAltOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default AllService;
