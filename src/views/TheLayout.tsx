import { useLocation } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import View from './View';

const TheLayout = () => {
    const ShowDashboard = !useLocation().pathname.includes('/dashboard');

    return (
        <>
            {ShowDashboard && <Header />}
            <View />
            {ShowDashboard && <Footer />}
        </>
    );
};

export default TheLayout;
