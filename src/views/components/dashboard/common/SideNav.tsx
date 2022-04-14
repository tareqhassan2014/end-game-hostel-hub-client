import { Switch } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import Brand from './Brand';
import SidenavLinks from './SidenavLinks';

const boxShadow =
    '0px 5px 5px -3px rgba(0, 0, 0, 0.06),0px 8px 10px 1px rgba(0, 0, 0, 0.042),0px 3px 14px 2px rgba(0, 0, 0, 0.036)';

const SidebarNavRoot = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: 260,
    boxShadow,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    zIndex: 111,
    overflow: 'hidden',
    color: theme.palette.text.primary,
    transition: 'all 250ms ease-in-out',
    backgroundImage: `linear-gradient(to bottom, rgba(${theme.palette.primary.main}, 0.96), rgba(${theme.palette.primary.main}, 0.96)))`,
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
}));

const NavListBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

const SideNav = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <SidebarNavRoot>
            <NavListBox>
                <Brand>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Brand>
                <SidenavLinks />
            </NavListBox>
        </SidebarNavRoot>
    );
};

export default SideNav;
