import { Icon } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    setMiniSidenav,
    setOpenConfigurator,
} from 'src/app/reducers/mui/muiSlice';
import brandDark from 'src/assets/images/logo-ct-dark.png';
import brandWhite from 'src/assets/images/logo-ct.png';
import useController from 'src/hooks/useController';
import Configurator from 'src/views/components/examples/Configurator';
import Sidenav from 'src/views/components/examples/Sidenav';
import Billing from 'src/views/components/layouts/billing';
import Dashboard from 'src/views/components/layouts/dashboard';
import Notifications from 'src/views/components/layouts/notifications';
import Tables from 'src/views/components/layouts/tables';
import MDBox from 'src/views/components/MDBox';
import Profile from '../profile/Profile';
import SignIn from '../signIn/SignIn';
import SignUp from '../signup/SignUp';

const routes = [
    {
        type: 'collapse',
        name: 'Dashboard',
        key: 'dashboard',
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: '/dashboard',
        component: <Dashboard />,
    },
    {
        type: 'collapse',
        name: 'Tables',
        key: 'tables',
        icon: <Icon fontSize="small">table_view</Icon>,
        route: '/tables',
        component: <Tables />,
    },
    {
        type: 'collapse',
        name: 'Billing',
        key: 'billing',
        icon: <Icon fontSize="small">receipt_long</Icon>,
        route: '/billing',
        component: <Billing />,
    },

    {
        type: 'collapse',
        name: 'Notifications',
        key: 'notifications',
        icon: <Icon fontSize="small">notifications</Icon>,
        route: '/notifications',
        component: <Notifications />,
    },
    {
        type: 'collapse',
        name: 'Profile',
        key: 'profile',
        icon: <Icon fontSize="small">person</Icon>,
        route: '/profile',
        component: <Profile />,
    },
    {
        type: 'collapse',
        name: 'Sign In',
        key: 'sign-in',
        icon: <Icon fontSize="small">login</Icon>,
        route: '/authentication/sign-in',
        component: <SignIn />,
    },
    {
        type: 'collapse',
        name: 'Sign Up',
        key: 'sign-up',
        icon: <Icon fontSize="small">assignment</Icon>,
        route: '/authentication/sign-up',
        component: <SignUp />,
    },
];

const AdminDashboard = () => {
    const { controller } = useController();
    const {
        miniSidenav,
        direction,
        layout,
        openConfigurator,
        sidenavColor,
        transparentSidenav,
        whiteSidenav,
        darkMode,
    } = controller;

    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const { pathname } = useLocation();

    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            setMiniSidenav(false);
            setOnMouseEnter(true);
        }
    };

    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSidenav(true);
            setOnMouseEnter(false);
        }
    };

    // Change the openConfigurator state
    const handleConfiguratorOpen = () => setOpenConfigurator(!openConfigurator);

    // Setting the dir attribute for the body element
    useEffect(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const configsButton = (
        <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="3.25rem"
            height="3.25rem"
            bgColor="white"
            shadow="sm"
            borderRadius="50%"
            position="fixed"
            right="2rem"
            bottom="2rem"
            zIndex={99}
            color="dark"
            sx={{ cursor: 'pointer' }}
            onClick={handleConfiguratorOpen}
        >
            <Icon fontSize="small" color="inherit">
                settings
            </Icon>
        </MDBox>
    );

    return (
        <>
            {layout === 'dashboard' && (
                <>
                    <Sidenav
                        routes={routes}
                        color={sidenavColor}
                        brand={
                            (transparentSidenav && !darkMode) || whiteSidenav
                                ? brandDark
                                : brandWhite
                        }
                        brandName="Material Dashboard 2"
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    />
                    <Configurator />
                    {configsButton}
                </>
            )}
            {layout === 'vr' && <Configurator />}
        </>
    );
};

export default AdminDashboard;
