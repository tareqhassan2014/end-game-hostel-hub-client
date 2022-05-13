import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import FilterListIcon from '@mui/icons-material/FilterList';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
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
    Rating,
    Slider,
    Tooltip,
    Typography,
} from '@mui/material';

interface hostelData {
    id: number;
    first_name: string;
    email: string;
    gender: string;
    photo: string;
    city: string;
    rating: number;
    price: number;
}
const drawerWidth = 200;

function SearchOldItems(props: any) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const [allHostel, SetAllHostel] = useState<hostelData[]>([]);
    const [matchItem, SetmatchItem] = useState<hostelData[]>([]);
    const [price, setPrice] = useState<number>(1000);
    const [gender, setGender] = useState<string>('Male');

    useEffect(() => {
        fetch('/MOCK_DATA.JSON')
            .then((res) => res.json())
            .then((data) => {
                SetAllHostel(data);
                SetmatchItem(data);
            });
    }, []);

    const priceChange = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number);
    };
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
    };
    const changeSearch = (e: any) => {
        const searchText = e.target.value;
        const matchProductToSearch = allHostel.filter(
            (hostel) =>
                hostel.first_name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) && hostel.price <= price
        );
        SetmatchItem(matchProductToSearch);
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
                    Product Quality
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
                    // height: { sm: '40px', md: '50px' },
                    width: { sm: '100%' },
                    // ml: { sm: `${drawerWidth}px` },
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
                                placeholder="Search Product By Name "
                                inputProps={{
                                    'aria-label': 'Search Product By Name',
                                }}
                                onChange={changeSearch}
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
                                {matchItem.length !== 0 ? (
                                    matchItem.map((hostel, index) => (
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
                                                    image="https://m.media-amazon.com/images/I/41RYmMyL0bL._AC_SY780_.jpg"
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                    >
                                                        {hostel.first_name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        Price: {hostel.price}{' '}
                                                        BDT
                                                    </Typography>

                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        Location: {hostel.city}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">
                                                        Buy
                                                    </Button>
                                                    <Button size="small">
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
                                        Product Not Found
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
export default SearchOldItems;
