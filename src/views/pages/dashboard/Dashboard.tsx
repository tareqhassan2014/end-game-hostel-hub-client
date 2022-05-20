import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import DashboardHeader from '../../components/dashboard/common/DashboardHeader';
import Sidenav from '../../components/dashboard/common/sideNave/Sidenav';
import { dashboardRoutes } from './dashboardRoutes';
import { ContentBox, Layout1Root, LayoutContainer } from './style';

const Dashboard = () => {
    const { user } = useAuth();
    const { sideNavWidth } = useThemeAndLayout();

    const proRoutes = dashboardRoutes.filter((router) =>
        router.role.includes(user.role || 'user')
    );

    return (
        <Layout1Root>
            {sideNavWidth !== 0 && <Sidenav />}

            <LayoutContainer width={sideNavWidth}>
                <ContentBox>
                    <DashboardHeader />
                    <Box flexGrow={1} position="relative">
                        {/* <AnimatedDashboard></AnimatedDashboard> */}
                        <Routes>
                            {proRoutes.map((route, idx) => {
                                return (
                                    route.element && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            element={<route.element />}
                                        />
                                    )
                                );
                            })}
                        </Routes>
                    </Box>
                </ContentBox>
            </LayoutContainer>
        </Layout1Root>
    );
};

export default Dashboard;
