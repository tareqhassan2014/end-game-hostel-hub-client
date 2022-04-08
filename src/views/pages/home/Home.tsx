import { Box } from '@mui/system';
import Banner from 'src/views/components/banner/banner';
import AllService from 'src/views/components/home/AllService';
import Raju from 'src/views/components/home/Raju';
import Sponsors from 'src/views/components/home/Sponsors';

function Home() {
    return (
        <Box>
            <Banner />
            <Raju />
            <AllService />
            <Sponsors />
        </Box>
    );
}

export default Home;
