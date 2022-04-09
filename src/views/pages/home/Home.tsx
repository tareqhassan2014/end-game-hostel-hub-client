import { Box } from '@mui/system';
import AllService from 'src/views/components/home/AllService';
import Banner from 'src/views/components/home/Banner';
import Sponsors from 'src/views/components/home/Sponsors';

function Home() {
    return (
        <Box>
            <Banner />
            {/* <FeatureApp /> */}
            <AllService />
            <Sponsors />
        </Box>
    );
}

export default Home;
