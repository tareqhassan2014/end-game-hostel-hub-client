import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Divider } from '@mui/material';
import LineChartAdmin from './LineChartAdmin';
import BarChartAdmin from './BarChartAdmin';
import PieChartAdmin from './PieChartAdmin';

const AdminDefault = () => {
    const smallCartData = [
        {
            name: 'Available Sit',
            total: 8,
            icon: HotelIcon,

            color: ['#EC407A', '#D81B60'],
        },
        {
            name: 'Total Due',
            total: 3700,
            icon: AttachMoneyIcon,

            color: ['#66BB6A', '#43A047'],
        },
        {
            name: 'Total Cost',
            total: 28000,
            icon: MonetizationOnIcon,
            color: ['#49a3f1', '#1A73E8'],
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
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ width: '90%', mx: 'auto' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <LineChartAdmin />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ width: '90%', mx: 'auto', mt: '15px' }}>
                            <PieChartAdmin />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '90%', mx: 'auto' }}>
                <BarChartAdmin />
            </Box>
        </Box>
    );
};

export default AdminDefault;
