import { Box, styled } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import LayoutSidenav from '../../components/dashboard/LayoutSidenav';
import { dashboardRoutes } from './dashboardRoutes';

const Layout1Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    background: theme.palette.background.default,
}));

const ContentBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    overflowY: 'auto',
    overflowX: 'hidden',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const LayoutContainer = styled(Box)(({ width }: { width: number }) => ({
    height: '100vh',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    verticalAlign: 'top',
    marginLeft: width,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
}));

const Dashboard = () => {
    const { user } = useAuth();
    const { sideNavWidth } = useThemeAndLayout();

    const proRoutes = dashboardRoutes.filter((router) =>
        router.role.includes(user.role || 'user')
    );

    return (
        <Layout1Root>
            {sideNavWidth && <LayoutSidenav />}

            <LayoutContainer width={sideNavWidth}>
                <ContentBox>
                    <DashboardHeader />
                    <Box flexGrow={1} position="relative">
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
