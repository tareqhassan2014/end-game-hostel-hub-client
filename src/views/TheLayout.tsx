import { useLocation } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import View from './View';

const TheLayout = () => {
    const hideDashboard = !useLocation().pathname.includes('/dashboard');

    return (
        <>
            {hideDashboard && (
                <Header>
                    <></>
                </Header>
            )}
            <View />
            {hideDashboard && <Footer />}
        </>
    );
};

export default TheLayout;
