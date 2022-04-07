import { Box } from '@mui/system';
import Banner from '../../components/banner/banner';
import AllService from '../../components/home/AllService';
import Raju from '../../components/home/Raju';
import Sponsors from '../../components/home/Sponsors';

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
