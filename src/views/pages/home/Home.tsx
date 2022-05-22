import { CssBaseline } from '@mui/material';
import Banner from 'src/views/components/home/Banner/Banner';
import Counter from 'src/views/components/home/Counter';
import HomePageHorizontalCart from 'src/views/components/home/HomePageHorzontalCart';
import HomeShowReview from 'src/views/components/home/HomeShowReview';
import ProjectsOverview from 'src/views/components/home/ProjectsOverview';

function Home() {
    return (
        <>
            <CssBaseline />
            <Banner />
            <ProjectsOverview />
            <Counter />
            {/* <AllService /> */}
            {/* <FeatureApp /> */}
            <HomePageHorizontalCart />
            <HomeShowReview />
        </>
    );
}

export default Home;
