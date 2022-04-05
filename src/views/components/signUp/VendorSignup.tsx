import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const VendorSignup = () => {
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
                This is Vendor Signup page
            </Typography>
        </Box>
    );
};

export default VendorSignup;
