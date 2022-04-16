import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
const AboutOurTeam = () => {
    return (
        <Box sx={{ mt: 6 }}>
            <Typography
                variant="h2"
                sx={{ textAlign: 'center', color: '#6A52E5', mb: 5 }}
                component="div"
                gutterBottom
            >
                Out Team
            </Typography>
            <Typography
                variant="h5"
                sx={{ textAlign: 'center', color: '#6A52E5', mb: 5 }}
                component="div"
                gutterBottom
            >
                A Hostel hub team members work cooperatively alongside other
                workers and take responsibilities specific to the different
                Fulfillment Center areas.
            </Typography>
        </Box>
    );
};

export default AboutOurTeam;
