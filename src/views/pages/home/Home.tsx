import { Box } from '@mui/system';
import Banner from '../../components/banner/banner';
import AllService from '../../components/home/AllService';
import Raju from '../../components/home/Raju';
import Rashidul from '../../components/home/Rashidul';

function Home() {
    return (
        <Box>
            <Banner />
            <Raju />
            <AllService />
            <Rashidul />
        </Box>
    );
}

export default Home;
