import { Box } from '@mui/system';
import Banner from '../../components/banner/banner';
import Amirul from '../../components/home/Amirul';
import Raju from '../../components/home/Raju';
import Sponsors from '../../components/home/Sponsors';

function Home() {
    return (
        <Box>
            <Banner />
            <Raju />
            <Amirul />
            <Sponsors />
        </Box>
    );
}

export default Home;
