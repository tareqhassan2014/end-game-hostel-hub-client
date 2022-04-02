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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../app/reducers/auth/authSlice';
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
        page: 'Secure',
        link: '/secure',
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useAuth();

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
                        Hostel Hub
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
                                sx={{ my: 2, color: 'white', display: 'block' }}
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
                                    <Avatar alt={user.name} src={user.name} />
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
                                            dispatch(logOut());
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
    );
}
