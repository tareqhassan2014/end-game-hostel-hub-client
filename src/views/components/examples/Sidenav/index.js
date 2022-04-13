import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    setMiniSidenav,
    setTransparentSidenav,
    setWhiteSidenav,
} from 'src/app/reducers/mui/muiSlice';
import useController from 'src/hooks/useController';
import MDBox from '../../MDBox';
import MDButton from '../../MDButton';
import MDTypography from '../../MDTypography';
import SidenavCollapse from './SidenavCollapse';
import SidenavRoot from './SidenavRoot';
import sidenavLogoLabel from './styles/sidenav';

function Sidenav({ color, brand, brandName, routes, ...rest }) {
    const { controller } = useController();
    const {
        miniSidenav,
        transparentSidenav,
        whiteSidenav,
        darkMode,
        sidenavColor,
    } = controller;
    const location = useLocation();
    const collapseName = location.pathname.replace('/', '');

    let textColor = 'white';

    if (transparentSidenav || (whiteSidenav && !darkMode)) {
        textColor = 'dark';
    } else if (whiteSidenav && darkMode) {
        textColor = 'inherit';
    }

    const closeSidenav = () => setMiniSidenav(true);

    useEffect(() => {
        // A function that sets the mini state of the sidenav.
        function handleMiniSidenav() {
            setMiniSidenav(window.innerWidth < 1200);
            setTransparentSidenav(
                window.innerWidth < 1200 ? false : transparentSidenav
            );
            setWhiteSidenav(window.innerWidth < 1200 ? false : whiteSidenav);
        }

        window.addEventListener('resize', handleMiniSidenav);

        handleMiniSidenav();

        return () => window.removeEventListener('resize', handleMiniSidenav);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const renderRoutes = routes.map(
        ({ type, name, icon, title, noCollapse, key, href, route }) => {
            let returnValue;

            if (type === 'collapse') {
                returnValue = href ? (
                    <Link
                        href={href}
                        key={key}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ textDecoration: 'none' }}
                    >
                        <SidenavCollapse
                            name={name}
                            icon={icon}
                            active={key === collapseName}
                            noCollapse={noCollapse}
                        />
                    </Link>
                ) : (
                    <NavLink key={key} to={route}>
                        <SidenavCollapse
                            name={name}
                            icon={icon}
                            active={key === collapseName}
                        />
                    </NavLink>
                );
            } else if (type === 'title') {
                returnValue = (
                    <MDTypography
                        key={key}
                        color={textColor}
                        display="block"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="uppercase"
                        pl={3}
                        mt={2}
                        mb={1}
                        ml={1}
                    >
                        {title}
                    </MDTypography>
                );
            } else if (type === 'divider') {
                returnValue = (
                    <Divider
                        key={key}
                        light={
                            (!darkMode &&
                                !whiteSidenav &&
                                !transparentSidenav) ||
                            (darkMode && !transparentSidenav && whiteSidenav)
                        }
                    />
                );
            }

            return returnValue;
        }
    );

    return (
        <SidenavRoot
            {...rest}
            variant="permanent"
            ownerState={{
                transparentSidenav,
                whiteSidenav,
                miniSidenav,
                darkMode,
            }}
        >
            <MDBox pt={3} pb={1} px={4} textAlign="center">
                <MDBox
                    display={{ xs: 'block', xl: 'none' }}
                    position="absolute"
                    top={0}
                    right={0}
                    p={1.625}
                    onClick={closeSidenav}
                    sx={{ cursor: 'pointer' }}
                >
                    <MDTypography variant="h6" color="secondary">
                        <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
                    </MDTypography>
                </MDBox>
                <MDBox
                    component={NavLink}
                    to="/"
                    display="flex"
                    alignItems="center"
                >
                    {brand && (
                        <MDBox
                            component="img"
                            src={brand}
                            alt="Brand"
                            width="2rem"
                        />
                    )}
                    <MDBox
                        width={!brandName && '100%'}
                        sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
                    >
                        <MDTypography
                            component="h6"
                            variant="button"
                            fontWeight="medium"
                            color={textColor}
                        >
                            {brandName}
                        </MDTypography>
                    </MDBox>
                </MDBox>
            </MDBox>
            <Divider
                light={
                    (!darkMode && !whiteSidenav && !transparentSidenav) ||
                    (darkMode && !transparentSidenav && whiteSidenav)
                }
            />
            <List>{renderRoutes}</List>
            <MDBox p={2} mt="auto">
                <MDButton
                    component="a"
                    href="https://www.creative-tim.com/product/material-dashboard-pro-react"
                    target="_blank"
                    rel="noreferrer"
                    variant="gradient"
                    color={sidenavColor}
                    fullWidth
                >
                    upgrade to pro
                </MDButton>
            </MDBox>
        </SidenavRoot>
    );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
    color: 'info',
    brand: '',
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
    ]),
    brand: PropTypes.string,
    brandName: PropTypes.string.isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
