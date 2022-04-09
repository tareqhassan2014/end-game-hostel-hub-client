import { Box } from '@mui/material';

const BannerLottie2 = () => {
    return (
        <Box
            sx={{
                width: { md: '96%', lg: '100%', sm: '32' },
                height: { md: 500, sm: 400, xs: 300 },
                py: 2,
            }}
        >
            <lottie-player
                src="https://assets4.lottiefiles.com/private_files/lf30_9kdbftpx.json"
                style={{ width: 'inherit', height: 'inherit' }}
                background="transparent"
                speed="1"
                loop
                autoplay
            ></lottie-player>
        </Box>
    );
};

export default BannerLottie2;
