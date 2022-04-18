import { CssBaseline } from '@mui/material';
import AllService from 'src/views/components/home/AllService';
import Banner from 'src/views/components/home/Banner';
import FeatureApp from 'src/views/components/home/FeatureApp';
import Sponsors from 'src/views/components/home/Sponsors';

function Home() {
    return (
        <>
            <CssBaseline />
            <Banner />
            <AllService />
            <FeatureApp />
            <Sponsors />
        </>
    );
}

export default Home;
