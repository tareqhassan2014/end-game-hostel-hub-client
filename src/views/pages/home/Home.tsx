import AllService from 'src/views/components/home/AllService';
import Banner from 'src/views/components/home/Banner';
import Sponsors from 'src/views/components/home/Sponsors';

function Home() {
    return (
        <>
            <Banner />
            {/* <FeatureApp /> */}
            <AllService />
            <Sponsors />
        </>
    );
}

export default Home;
