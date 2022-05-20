import { CssBaseline } from '@mui/material';
import AllService from 'src/views/components/home/AllService';
import Banner from 'src/views/components/home/Banner/Banner';
import Counter from 'src/views/components/home/Counter';
import FeatureApp from 'src/views/components/home/FeatureApp';
import HomePageHorzontalCart from 'src/views/components/home/HomePageHorzontalCart';
import HomeShowReview from 'src/views/components/home/HomeShowReview';
import ProjectsOverview from 'src/views/components/home/ProjectsOverview';
import Sponsors from 'src/views/components/home/Sponsors';

function Home() {
    return (
        <>
            <CssBaseline />
            <Banner />
            <ProjectsOverview />
            <Counter />
            {/* <AllService /> */}
            {/* <FeatureApp /> */}
            <HomePageHorzontalCart />
            <HomeShowReview />
        </>
    );
}

export default Home;
