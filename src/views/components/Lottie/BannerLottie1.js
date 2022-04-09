import { Box } from '@mui/material';
import React from 'react';

const BannerLottie1 = () => {
    return (
        <Box
            sx={{
                width: { md: '96%', lg: '100%', sm: '32' },
                height: { md: 450, sm: 350, xs: 300 },
                py: 2,
            }}
        >
            <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_2gfeptkg.json"
                style={{ width: 'inherit', height: 'inherit' }}
                background="transparent"
                speed="1"
                loop
                autoplay
            ></lottie-player>
        </Box>
    );
};

export default BannerLottie1;
