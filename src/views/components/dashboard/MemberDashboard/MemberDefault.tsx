import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import UserDoughnutChart from '../UserDashboard/UserDoughnutChart';
import UserLineChart from '../UserDashboard/UserLineChart';

const MemberDefault = () => {
    const smallCartData = [
        {
            name: 'Current Month Meals',
            total: 21,
            icon: RamenDiningIcon,
            color: ['#FF0099', '#3b8d99'],
            difference: 8,
        },
        {
            name: 'Last Month Meals',
            total: 18,
            icon: BrunchDiningIcon,
            color: ['#4286f4', '#373B44'],
            difference: 6,
        },
        {
            name: 'Last Month Bills',
            total: 27,
            icon: AccountBalanceWalletIcon,
            color: ['#2193b0', '#6dd5ed'],
            difference: 3,
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
                                            {meal.difference}%
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
                        {/* <UserBarChart /> */}
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ width: '90%', mx: 'auto', mt: '15px' }}>
                            {/* <UserPiChart /> */}
                            <UserDoughnutChart />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default MemberDefault;
