import CallReceivedRoundedIcon from '@mui/icons-material/CallReceivedRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SsidChartRoundedIcon from '@mui/icons-material/SsidChartRounded';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';

const VendorDefault = () => {
    const smallCartData = [
        {
            name: 'Pending Order',
            total: 58,
            icon: CallReceivedRoundedIcon,
            color: ['#EC407A', '#D81B60'],
            link: 'pendingOrder',
        },
        {
            name: 'Confirm Order',
            total: 370,
            icon: CheckRoundedIcon,
            link: 'confirmOrder',
            color: ['#66BB6A', '#43A047'],
        },
        {
            name: 'Sell Rate',
            total: '20%',
            icon: SsidChartRoundedIcon,

            color: ['#49a3f1', '#1A73E8'],
        },
    ];

    return (
        <Box>
            <Box
                sx={{
                    width: '90%',
                    mt: '15px',
                    mx: 'auto',
                }}
            >
                <Grid container spacing={2}>
                    {smallCartData.map((meal, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={4}>
                            <Link to={`${meal.link}`}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 2,
                                        mt: '20px',
                                        borderRadius: 1,
                                        background: `linear-gradient(195deg, ${meal.color[0]}, ${meal.color[1]} )`,
                                        color: 'white',
                                    }}
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
                                            <Typography
                                                align="right"
                                                variant="h3"
                                            >
                                                {meal.total}
                                            </Typography>
                                            <Typography
                                                align="right"
                                                variant="h6"
                                            >
                                                {meal.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ width: '90%', mx: 'auto' }}>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 2 }} item xs={12} md={8}>
                        <LineChart />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ width: '90%', mx: 'auto', mt: '15px' }}>
                            <PieChart />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '90%', mx: 'auto' }}>{/* <BarChart /> */}</Box>
        </Box>
    );
};

export default VendorDefault;
