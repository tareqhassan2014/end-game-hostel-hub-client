import { Paper } from '@mui/material';
import { useAppTheme } from 'src/theme/UseAppTheme';
import AllService from 'src/views/components/home/AllService';
import Banner from 'src/views/components/home/Banner';
import Sponsors from 'src/views/components/home/Sponsors';
function Home() {
    const { mode } = useAppTheme();
    const bgcolor = mode === 'light' ? `white` : 'black';
    return (
        <Paper sx={{ bgcolor: bgcolor }}>
            <Banner />
            {/* <FeatureApp /> */}
            <AllService />
            <Sponsors />
        </Paper>
    );
}

export default Home;
