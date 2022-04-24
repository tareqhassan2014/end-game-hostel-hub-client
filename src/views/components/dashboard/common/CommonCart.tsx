import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

interface Props {
    icon: any;
    title: string;
    text: string;
    color: string;
}

const CommonCart = ({ icon, title, text, color }: Props) => {
    return (
        <Paper
            elevation={2}
            sx={{
                pl: 3,
                width: '300px',
                height: '100px',
                background: `${color}`,
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {icon}
                <Box sx={{ ml: 10, textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4">
                        {title}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2">
                        {text}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default CommonCart;
