import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/firebase/useFirebase';
import useAuth from '../../../hooks/useAuth';

const pages = [
    {
        page: 'Home',
        link: '/',
    },
    {
        page: 'Contact',
        link: '/contact',
    },
    {
        page: 'VendorSignup',
        link: '/vendor-signup',
    },
    {
        page: 'Admin-signup',
        link: '/admin-signup',
    },
    {
        page: 'Cart',
        link: '/cart',
    },
    {
        page: 'Dashboard',
        link: '/dashboard',
    },
];

const settings = [
    {
        page: 'Profile',
        link: '/profile',
    },
    {
        page: 'Account',
        link: '/account',
    },
    {
        page: 'Dashboard',
        link: '/dashboard',
    },
    {
        page: 'Logout',
        link: '/',
    },
];

export default function Header() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { logout } = useFirebase();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                width: '30px',
                            }}
                        >
                            logo
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, key) => (
                                    <MenuItem
                                        key={key}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            navigate(page.link);
                                        }}
                                    >
                                        <Typography textAlign="center">
                                            {page.page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            {pages.map((page, key) => (
                                <Button
                                    key={key}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate(page.link);
                                    }}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                    }}
                                >
                                    {page.page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {user.email ? (
                                <Tooltip title="Open settings">
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <Avatar
                                            alt={user.name}
                                            src={user.img}
                                        />
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Button
                                    color="inherit"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </Button>
                            )}
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, key) => (
                                    <MenuItem
                                        key={key}
                                        onClick={() => {
                                            handleCloseUserMenu();
                                            navigate(setting.link);

                                            if (setting.page === 'Logout') {
                                                logout();
                                            }
                                        }}
                                    >
                                        <Typography textAlign="center">
                                            {setting.page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </>
    );
}
