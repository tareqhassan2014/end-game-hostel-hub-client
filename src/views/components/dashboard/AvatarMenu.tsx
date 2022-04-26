import { Avatar, Hidden, Icon, Menu, MenuItem } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'src/app/slices/auth/authSlice';
import useAuth from 'src/hooks/useAuth';

const MenuButton = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    color: theme.palette.text.primary,
    '& div:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const UserMenu = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 24,
    padding: 4,
    '& span': {
        margin: '0 8px',
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

const AvatarMenu: React.FC = (props) => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const children = React.Children.toArray(props.children);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <MenuButton onClick={handleClick}>
                <UserMenu>
                    <Hidden xsDown>
                        <span style={{ color: 'white' }}>
                            Hi <strong>{user.name}</strong>
                        </span>
                    </Hidden>
                    <Avatar src={user.img} sx={{ cursor: 'pointer' }} />
                </UserMenu>
            </MenuButton>

            <Menu
                elevation={8}
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {children.map((child, index) => (
                    <div key={index}>{child}</div>
                ))}

                <StyledItem onClick={handleClose}>
                    <Link to="/">
                        <Icon> home </Icon>
                        <span> Home </span>
                    </Link>
                </StyledItem>
                <StyledItem onClick={handleClose}>
                    <Link to="/dashboard/profile">
                        <Icon> person </Icon>
                        <span> Profile </span>
                    </Link>
                </StyledItem>
                <StyledItem onClick={handleClose}>
                    <Icon> settings </Icon>
                    <span> Settings </span>
                </StyledItem>
                <StyledItem onClick={() => dispatch(logOut())}>
                    <Icon> power_settings_new </Icon>
                    <span> Logout </span>
                </StyledItem>
            </Menu>
        </Fragment>
    );
};

export default AvatarMenu;
