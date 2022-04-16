import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Slider,
    Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
const SearchOldItems = () => {
    const allHostel: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
                        placeholder="Search Old Items "
                        inputProps={{ 'aria-label': 'Search Old Items' }}
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
                    <Grid xs={3} lg={2}>
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
                                        defaultValue={50}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                    />
                                </FormControl>
                            </Box>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Items Quality
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
                                    Environment
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
                                    Most Viewed
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
                    <Grid xs={8} lg={9}>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                p: { xs: 1, md: 2, lg: 3 },
                                m: 1,
                                borderRadius: 3,
                                height: 'auto',
                            }}
                        >
                            {allHostel.map((hostel, index) => (
                                <Grid key={index} item xs={12} md={6} lg={4}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://m.media-amazon.com/images/I/41RYmMyL0bL._AC_SY780_.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Hostel Hub
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles,
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Book</Button>
                                            <Button size="small">
                                                Details
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SearchOldItems;
