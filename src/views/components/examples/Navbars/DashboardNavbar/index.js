// @material-ui core components
import AppBar from '@mui/material/AppBar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    setMiniSidenav,
    setOpenConfigurator,
    setTransparentNavbar,
} from 'src/app/reducers/mui/muiSlice';
import useController from 'src/hooks/useController';
import MDBox from 'src/views/components/MDBox';
import MDInput from 'src/views/components/MDInput';
import Breadcrumbs from '../../Breadcrumbs';
import NotificationItem from '../../Items/NotificationItem';
import {
    navbar,
    navbarContainer,
    navbarIconButton,
    navbarMobileMenu,
    navbarRow,
} from './styles';

function DashboardNavbar({ absolute, light, isMini }) {
    const [navbarType, setNavbarType] = useState();
    const [openMenu, setOpenMenu] = useState(false);
    const route = useLocation().pathname.split('/').slice(1);
    const {
        controller: {
            miniSidenav,
            transparentNavbar,
            fixedNavbar,
            openConfigurator,
            darkMode,
        },
    } = useController();

    useEffect(() => {
        // Setting the navbar type
        if (fixedNavbar) {
            setNavbarType('sticky');
        } else {
            setNavbarType('static');
        }

        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {
            setTransparentNavbar(
                (fixedNavbar && window.scrollY === 0) || !fixedNavbar
            );
        }

        /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
        window.addEventListener('scroll', handleTransparentNavbar);

        // Call the handleTransparentNavbar function to set the state with the initial value.
        handleTransparentNavbar();

        // Remove event listener on cleanup
        return () =>
            window.removeEventListener('scroll', handleTransparentNavbar);
    }, [fixedNavbar]);

    const handleMiniSidenav = () => setMiniSidenav(!miniSidenav);
    const handleConfiguratorOpen = () => setOpenConfigurator(!openConfigurator);
    const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
    const handleCloseMenu = () => setOpenMenu(false);

    // Render the notifications menu
    const renderMenu = () => (
        <Menu
            anchorEl={openMenu}
            anchorReference={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}
            sx={{ mt: 2 }}
        >
            <NotificationItem
                icon={<Icon>email</Icon>}
                title="Check new messages"
            />
            <NotificationItem
                icon={<Icon>podcasts</Icon>}
                title="Manage Podcast sessions"
            />
            <NotificationItem
                icon={<Icon>shopping_cart</Icon>}
                title="Payment successfully completed"
            />
        </Menu>
    );

    // Styles for the navbar icons
    const iconsStyle = ({
        palette: { dark, white, text },
        functions: { rgba },
    }) => ({
        color: () => {
            let colorValue = light || darkMode ? white.main : dark.main;

            if (transparentNavbar && !light) {
                colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
            }

            return colorValue;
        },
    });

    return (
        <AppBar
            position={absolute ? 'absolute' : navbarType}
            color="inherit"
            sx={(theme) =>
                navbar(theme, { transparentNavbar, absolute, light, darkMode })
            }
        >
            <Toolbar sx={(theme) => navbarContainer(theme)}>
                <MDBox
                    color="inherit"
                    mb={{ xs: 1, md: 0 }}
                    sx={(theme) => navbarRow(theme, { isMini })}
                >
                    <Breadcrumbs
                        icon="home"
                        title={route[route.length - 1]}
                        route={route}
                        light={light}
                    />
                </MDBox>
                {isMini ? null : (
                    <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
                        <MDBox pr={1}>
                            <MDInput label="Search here" />
                        </MDBox>
                        <MDBox color={light ? 'white' : 'inherit'}>
                            <Link to="/authentication/sign-in/basic">
                                <IconButton
                                    sx={navbarIconButton}
                                    size="small"
                                    disableRipple
                                >
                                    <Icon sx={iconsStyle}>account_circle</Icon>
                                </IconButton>
                            </Link>
                            <IconButton
                                size="small"
                                disableRipple
                                color="inherit"
                                sx={navbarMobileMenu}
                                onClick={handleMiniSidenav}
                            >
                                <Icon sx={iconsStyle} fontSize="medium">
                                    {miniSidenav ? 'menu_open' : 'menu'}
                                </Icon>
                            </IconButton>
                            <IconButton
                                size="small"
                                disableRipple
                                color="inherit"
                                sx={navbarIconButton}
                                onClick={handleConfiguratorOpen}
                            >
                                <Icon sx={iconsStyle}>settings</Icon>
                            </IconButton>
                            <IconButton
                                size="small"
                                disableRipple
                                color="inherit"
                                sx={navbarIconButton}
                                aria-controls="notification-menu"
                                aria-haspopup="true"
                                variant="contained"
                                onClick={handleOpenMenu}
                            >
                                <Icon sx={iconsStyle}>notifications</Icon>
                            </IconButton>
                            {renderMenu()}
                        </MDBox>
                    </MDBox>
                )}
            </Toolbar>
        </AppBar>
    );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
    absolute: false,
    light: false,
    isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
    absolute: PropTypes.bool,
    light: PropTypes.bool,
    isMini: PropTypes.bool,
};

export default DashboardNavbar;
