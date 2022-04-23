import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

interface Props {
    icon: any;
    title: string;
    text: string;
}

const CommonCart = ({ icon, title, text }: Props) => {
    return (
        <Paper elevation={2} sx={{ p: 2 }}>
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {icon}
                <Box sx={{ ml: 4 }}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="subtitle2">{text}</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default CommonCart;
