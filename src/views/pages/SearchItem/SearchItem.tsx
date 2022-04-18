import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Rating,
    Slider,
    Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';

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
const SearchItem = () => {
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
                hostel.city.toLowerCase().includes(searchText.toLowerCase()) &&
                hostel.price <= price &&
                hostel.gender === gender
        );
        SetmatchItem(matchProductToSearch);
    };

    return (
        <Box sx={{ mt: 5, width: '100%', overflow: 'hidden' }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 5,
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
                        onChange={changeSearch}
                    />
                    <IconButton
                        type="submit"
                        sx={{ p: '10px' }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mx: { xs: 1, md: 3, lg: 5 },
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={3} lg={2}>
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
                    <Grid item xs={8} lg={9}>
                        <Grid
                            sx={{
                                p: { xs: 1, md: 2, lg: 3 },
                                m: 1,
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
                                        md={6}
                                        lg={4}
                                    >
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc="
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
                                                    Price: {hostel.price} BDT
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Type: {hostel.gender} Hostel
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Location: {hostel.city}
                                                </Typography>

                                                <Rating
                                                    name="Rating"
                                                    value={hostel.rating}
                                                    readOnly
                                                />
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">
                                                    Booking
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
                                        mb: 5,
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
    );
};

export default SearchItem;
