import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import HomeIcon from '@mui/icons-material/Home';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Slider,
    Tooltip,
    Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchForHostelQuery } from 'src/app/api';

interface CreateHostelAddRequest {
    price: number;
    phone: string;
    details: string;
    numberOfVacancy: number;
    hostel: string;
    _id: string;
}

const drawerWidth = 200;

const SearchItem = (props: any) => {
    const navigate = useNavigate();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [allHostelAdds, setAllHostelAdds] = React.useState<
        CreateHostelAddRequest[] | undefined
    >(undefined);

    const [query, setQuery] = React.useState('/hostelAdd');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { data, isLoading, isSuccess } = useSearchForHostelQuery(query);

    useEffect(() => {
        setAllHostelAdds(data?.data.data);
    }, [data?.data.data]);

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const [price, setPrice] = useState<number>(1000);
    const [gender, setGender] = useState<string>('Male');

    const priceChange = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number);
    };
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
    };

    const drawer = (
        <Box
            sx={{
                p: 3,

                mt: 4,
            }}
        >
            <Box>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Price Range
                    </FormLabel>
                    <Slider
                        defaultValue={1000}
                        step={100}
                        min={500}
                        max={2500}
                        valueLabelDisplay="auto"
                        onChange={priceChange}
                    />
                </FormControl>
            </Box>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Rooms Quality
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="High"
                    name="radio-buttons-group"
                >
                    <FormControlLabel
                        value="High"
                        control={<Radio />}
                        label="High"
                    />
                    <FormControlLabel
                        value="Mid"
                        control={<Radio />}
                        label="Mid"
                    />
                    <FormControlLabel
                        value="Low"
                        control={<Radio />}
                        label="Low"
                    />
                </RadioGroup>
            </FormControl>
            <Divider />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Male"
                    name="radio-buttons-group"
                    onChange={handleRadioChange}
                >
                    <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                    />
                    <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                    />
                </RadioGroup>
            </FormControl>
            <Divider />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Room Quality
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="High"
                    name="radio-buttons-group"
                >
                    <FormControlLabel
                        value="High"
                        control={<Radio />}
                        label="High"
                    />
                    <FormControlLabel
                        value="Mid"
                        control={<Radio />}
                        label="Mid"
                    />
                    <FormControlLabel
                        value="Low"
                        control={<Radio />}
                        label="Low"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    );

    return (
        <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="relative"
                sx={{
                    width: { sm: '100%' },
                    backgroundColor: 'transparent',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' }, pt: 4, ms: 10 }}
                    >
                        <FilterListIcon />
                    </IconButton>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 3,
                        }}
                    >
                        <Paper
                            component="form"
                            sx={{
                                p: '5px 7px',
                                display: 'flex',

                                alignItems: 'center',
                                width: { xs: '90%', md: '80%', lg: '65%' },
                            }}
                        >
                            <IconButton sx={{ p: '10px' }} aria-label="Hostel">
                                <HomeIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Hostel By Location "
                                inputProps={{
                                    'aria-label': 'Search Hostel By Location',
                                }}
                            />
                            <IconButton
                                type="submit"
                                sx={{ p: '10px' }}
                                aria-label="search"
                            ></IconButton>
                        </Paper>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                    <Tooltip title="ok">
                        <IconButton onClick={handleDrawerToggle}>
                            <ArrowRightAltOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                    <Tooltip title="ok">
                        <IconButton onClick={handleDrawerToggle}>
                            <ArrowRightAltOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    minHeight: '100vh',
                    // p: 3,
                    width: `100%`,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mx: { xs: 1, md: 3, lg: 5 },
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid
                            item
                            sx={{ display: { xs: 'none', md: 'block' } }}
                            md={3}
                            lg={2}
                        >
                            <Box
                                sx={{
                                    boxShadow: 2,
                                    p: 3,

                                    mt: 4,
                                    borderRadius: 3,
                                    height: 'auto',
                                }}
                            >
                                <Box>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">
                                            Price Range
                                        </FormLabel>
                                        <Slider
                                            defaultValue={1000}
                                            step={100}
                                            min={500}
                                            max={2500}
                                            valueLabelDisplay="auto"
                                            onChange={priceChange}
                                        />
                                    </FormControl>
                                </Box>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">
                                        Rooms Quality
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="High"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="High"
                                            control={<Radio />}
                                            label="High"
                                        />
                                        <FormControlLabel
                                            value="Mid"
                                            control={<Radio />}
                                            label="Mid"
                                        />
                                        <FormControlLabel
                                            value="Low"
                                            control={<Radio />}
                                            label="Low"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <Divider />
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">
                                        Type
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Male"
                                        name="radio-buttons-group"
                                        onChange={handleRadioChange}
                                    >
                                        <FormControlLabel
                                            value="Male"
                                            control={<Radio />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="Female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <Divider />
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">
                                        Room Quality
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="High"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="High"
                                            control={<Radio />}
                                            label="High"
                                        />
                                        <FormControlLabel
                                            value="Mid"
                                            control={<Radio />}
                                            label="Mid"
                                        />
                                        <FormControlLabel
                                            value="Low"
                                            control={<Radio />}
                                            label="Low"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
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
                                {allHostelAdds ? (
                                    allHostelAdds.map((hostel, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            xs={12}
                                            sm={6}
                                            lg={4}
                                        >
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
                                                        Price: {hostel.price}{' '}
                                                        BDT
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">
                                                        Booking
                                                    </Button>
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
                                    ))
                                ) : (
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            textAlign: 'center',
                                            color: '#6A52E5',
                                            m: 5,
                                        }}
                                        component="div"
                                        gutterBottom
                                    >
                                        Hostel Not Found
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default SearchItem;
