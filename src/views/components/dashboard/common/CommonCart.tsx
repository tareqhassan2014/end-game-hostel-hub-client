import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

interface Props {
    icon: any;
    title: string;
    text: string;
}

const CommonCart = ({ icon, title, text }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                    height: 128,
                },
            }}
        >
            <Paper
                sx={{
                    display: 'flex',
                    height: '100px',
                    alignItems: 'center',
                }}
                elevation={2}
            >
                <Grid container spacing={2}>
                    <Grid
                        sx={{ fontSize: '30px', padding: '10px' }}
                        item
                        xs={4}
                    >
                        {icon}
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{title}</Typography>

                        <Typography>{text}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default CommonCart;
