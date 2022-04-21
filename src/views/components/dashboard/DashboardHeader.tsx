import { Icon, IconButton, Menu, MenuItem } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFullSideBar } from 'src/app/slices/theme/themeSlice';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

const TopbarRoot = styled('div')(() => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    height: 50,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': {
        marginRight: '10px',
        color: theme.palette.text.primary,
    },
}));

const IconBox = styled('div')(({ theme }) => ({
    display: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'none !important',
    },
}));

const DashboardHeader = () => {
    const dispatch = useDispatch();
    const { sideNavWidth } = useThemeAndLayout();

    const handleSidenavToggle = () => {
        if (sideNavWidth === 80) {
            dispatch(toggleFullSideBar(260));
        }
        if (sideNavWidth === 260) {
            dispatch(toggleFullSideBar(0));
        }
        if (sideNavWidth === 0) {
            dispatch(toggleFullSideBar(260));
        }
    };

    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                    <StyledIconButton onClick={handleSidenavToggle}>
                        <Icon sx={{ color: 'white' }}>menu</Icon>
                    </StyledIconButton>

                    <IconBox>
                        <StyledIconButton>
                            <Icon sx={{ color: 'white' }}>mail_outline</Icon>
                        </StyledIconButton>

                        <StyledIconButton>
                            <Icon sx={{ color: 'white' }}>web_asset</Icon>
                        </StyledIconButton>

                        <StyledIconButton>
                            <Icon sx={{ color: 'white' }}>star_outline</Icon>
                        </StyledIconButton>
                    </IconBox>
                </Box>
                <Box display="flex" alignItems="center">
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        open={false}
                    >
                        <StyledItem>
                            <Link to="/">
                                <Icon> home </Icon>
                                <span> Home </span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Link to="/page-layouts/user-profile">
                                <Icon> person </Icon>
                                <span> Profile </span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Icon> settings </Icon>
                            <span> Settings </span>
                        </StyledItem>
                        <StyledItem>
                            <Icon> power_settings_new </Icon>
                            <span> Logout </span>
                        </StyledItem>
                    </Menu>
                </Box>
            </TopbarContainer>
        </TopbarRoot>
    );
};

export default DashboardHeader;
