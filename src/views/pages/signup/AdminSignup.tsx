import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AdminSignup = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '90vh',
                width: '95vw',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h3" align="center">
                This is admin Signup page
            </Typography>
        </Box>
    );
};

export default AdminSignup;