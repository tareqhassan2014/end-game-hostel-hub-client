import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { Divider } from '@mui/material';
import UserLineChart from './UserLineChart';
import UserBarChart from './UserBarChart';
import UserPiChart from './UserPiChart';

const UserDefault = () => {
    const smallCartData = [
        {
            name: 'Morning Total Meal',
            total: 21,
            icon: FastfoodIcon,
            color: ['#FF0099', '#3b8d99'],
            difarence: 5,
        },
        {
            name: 'Mid Day Total Meal',
            total: 18,
            icon: LunchDiningIcon,
            color: ['#4286f4', '#373B44'],
            difarence: 5,
        },
        {
            name: 'Night Total Meal',
            total: 27,
            icon: DinnerDiningIcon,
            color: ['#2193b0', '#6dd5ed'],
            difarence: 5,
        },
    ];

    return (
        <Box>
            <Box sx={{ width: '90%', mt: '15px', mx: 'auto' }}>
                <Grid container spacing={2}>
                    {smallCartData.map((meal, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={4}>
                            <Paper
                                elevation={2}
                                sx={{ p: 2, mt: '20px', borderRadius: 4 }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        width: '90%',
                                        mx: 'auto',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            background: `linear-gradient(195deg, ${meal.color[0]}, ${meal.color[1]} )`,
                                            py: '10px',
                                            px: '10px',
                                            borderRadius: 2,
                                            mt: '-35px',
                                        }}
                                    >
                                        <meal.icon
                                            sx={{
                                                height: '2em',
                                                width: '2em',
                                            }}
                                            style={{ fill: '#ffffff' }}
                                        />
                                    </Box>
                                    <Box sx={{ ml: 2, width: '100%' }}>
                                        <Typography align="right" variant="h3">
                                            {meal.total}
                                        </Typography>
                                        <Typography align="right" variant="h6">
                                            {meal.name}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Divider
                                    sx={{
                                        height: '0px',
                                    }}
                                />
                                <Box sx={{ width: '90%', mx: 'auto' }}>
                                    <Typography
                                        align="right"
                                        variant="subtitle1"
                                    >
                                        <span
                                            style={{
                                                color: `${meal.color[1]}`,
                                            }}
                                        >
                                            {' '}
                                            {meal.difarence}%
                                        </span>{' '}
                                        Than Last Day
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ width: '90%', mx: 'auto', my: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <UserLineChart />
                        <UserBarChart />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ width: '90%', mx: 'auto', mt: '15px' }}>
                            <UserPiChart />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default UserDefault;
