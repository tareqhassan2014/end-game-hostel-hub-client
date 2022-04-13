import { useLocation } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import View from './View';

const TheLayout = () => {
    const ShowDashboard = useLocation().pathname.includes('/dashboard');

    if (ShowDashboard) {
        return <AdminDashboard />;
    } else {
        return (
            <>
                <Header />
                <View />
                <Footer />
            </>
        );
    }
};

export default TheLayout;
