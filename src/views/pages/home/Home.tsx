import { Box } from '@mui/system';
import Banner from '../../components/banner/banner';
import Amirul from '../../components/home/Amirul';
import Raju from '../../components/home/Raju';
import Rashidul from '../../components/home/Rashidul';

function Home() {
    return (
        <Box>
            <Banner />
            <Raju />
            <Amirul />
            <Rashidul />
        </Box>
    );
}

export default Home;
