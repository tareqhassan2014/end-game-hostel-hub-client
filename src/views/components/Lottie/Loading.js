import { Box } from '@mui/material';
import React from 'react';

const Loading = () => {
    return (
        <Box
            sx={{
                width: { md: '96%', lg: '100%', sm: '32' },
                height: { md: 500, sm: 400, xs: 300 },
                py: 2,
            }}
        >
            <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_slw1pr5o.json"
                style={{ width: 'inherit', height: 'inherit' }}
                background="transparent"
                speed="1"
                loop
                autoplay
            ></lottie-player>
        </Box>
    );
};

export default Loading;
