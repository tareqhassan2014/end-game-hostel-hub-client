import { useMediaQuery } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { Outlet } from 'react-router-dom';
import DashboardHeader from './components/dashboard/common/DashboardHeader';
import SideNav from './components/dashboard/common/SideNav';

const Layout1Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    background: theme.palette.background.default,
}));

const ContentBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    overflowY: 'auto',
    OverflowX: 'hidden',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const StyledScrollBar = styled(Scrollbar)(() => ({
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
}));

const LayoutContainer = styled(Box)(() => ({
    height: '100vh',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    verticalAlign: 'top',
    marginLeft: 260,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
}));

const DashboardLayout = () => {
    const sidenavMode = 'full' || 'compact';

    const getSidenavWidth = () => {
        if (sidenavMode === 'full') {
            return 260;
        } else if (sidenavMode === 'compact') {
            return 80;
        } else {
            return 0;
        }
    };

    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    const layoutClasses = `theme-${theme.palette.type}`;

    return (
        <Layout1Root className={layoutClasses}>
            <SideNav />
            <LayoutContainer>
                <DashboardHeader />
                <ContentBox>
                    <Box flexGrow={1} position="relative">
                        <Outlet />
                    </Box>
                </ContentBox>
            </LayoutContainer>
        </Layout1Root>
    );
};

export default React.memo(DashboardLayout);
