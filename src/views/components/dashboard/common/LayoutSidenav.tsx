import { Hidden, Switch } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFullSideBar } from 'src/app/slices/theme/themeSlice';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import { convertHexToRGB } from 'src/utility/convertHexToRGB';
import Brand from './Brand';
import Sidenav from './SideNav';
// import Sidenav from './Sidenav';

const SidebarNavRoot = styled(Box)(
    ({ width, color }: { width: number; color: string | undefined }) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: width,
        boxShadow:
            '0px 5px 5px -3px rgba(0, 0, 0, 0.06),0px 8px 10px 1px rgba(0, 0, 0, 0.042),0px 3px 14px 2px rgba(0, 0, 0, 0.036)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        zIndex: 111,
        overflow: 'hidden',
        color,
        transition: 'all 250ms ease-in-out',
        background: `linear-gradient(to bottom, rgba(${color}, 0.96), rgba(${color}, 0.96))`,
        '&:hover': {
            width: 260,
            '& .sidenavHoverShow': {
                display: 'block',
            },
            '& .compactNavItem': {
                width: '100%',
                maxWidth: '100%',
                '& .nav-bullet': {
                    display: 'block',
                },
                '& .nav-bullet-text': {
                    display: 'none',
                },
            },
        },
    })
);

const NavListBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

const LayoutSidenav = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { sideNavWidth } = useThemeAndLayout();

    const primaryRGB = convertHexToRGB(theme.palette.primary.main);

    const handleSidenavToggle = () => {
        if (sideNavWidth === 260) {
            dispatch(toggleFullSideBar(80));
        }
        if (sideNavWidth === 80) {
            dispatch(toggleFullSideBar(260));
        }
    };

    return (
        <SidebarNavRoot width={sideNavWidth} color={primaryRGB}>
            <NavListBox>
                <Brand>
                    <Hidden smDown>
                        <Switch
                            onChange={handleSidenavToggle}
                            checked={sideNavWidth === 80}
                            color="secondary"
                            size="small"
                        />
                    </Hidden>
                </Brand>
                <Sidenav />
            </NavListBox>
        </SidebarNavRoot>
    );
};

export default React.memo(LayoutSidenav);
