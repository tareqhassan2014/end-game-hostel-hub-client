import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Avatar,
    Button,
    Container,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import { Box } from '@mui/system';
import { cloneElement, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'src/app/slices/auth/authSlice';
import { toggleColorMode } from 'src/app/slices/theme/themeSlice';
import logo from 'src/assets/images/logos/brandLogo.png';
import useAuth from 'src/hooks/useAuth';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';

const pages = [
    {
        page: 'Home',
        link: '/',
    },
    {
        page: 'Dashboard',
        link: '/dashboard',
    },
    {
        page: 'Discover',
        link: '/discover',
    },
];

const settings = [
    {
        page: 'Profile',
        link: '/profile',
        icon: AccountCircleIcon,
    },

    {
        page: 'Dashboard',
        link: '/dashboard',
        icon: DashboardIcon,
    },
    {
        page: 'Logout',
        link: '/',
        icon: LogoutIcon,
    },
];

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header(props: Props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { mode } = useThemeAndLayout();

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
            <ElevationScroll {...props}>
                <AppBar
                    sx={{
                        backdropFilter: `saturate(200%) blur(1.875 rem)`,
                        py: 0.5,
                    }}
                >
                    <Toolbar>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Box
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        width: '100px',
                                    }}
                                >
                                    <Link to="/">
                                        <img
                                            style={{
                                                width: '100px',
                                                objectFit: 'contain',
                                            }}
                                            src={logo}
                                            alt=""
                                        />
                                    </Link>
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
                                            display: {
                                                xs: 'block',
                                                md: 'none',
                                            },
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

                                <IconButton
                                    sx={{ ml: 1 }}
                                    onClick={() => dispatch(toggleColorMode())}
                                    color="inherit"
                                >
                                    {mode === 'dark' ? (
                                        <Brightness7Icon />
                                    ) : (
                                        <Brightness4Icon />
                                    )}
                                </IconButton>

                                {user.email ? (
                                    <Tooltip title="Open settings">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{ p: 0 }}
                                        >
                                            <Avatar
                                                alt={user.name}
                                                src={user.img}
                                                sizes="small"
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
                                    {settings.map((item, key) => (
                                        <MenuItem
                                            key={key}
                                            onClick={() => {
                                                handleCloseUserMenu();
                                                navigate(item.link);

                                                if (item.page === 'Logout') {
                                                    dispatch(logOut());
                                                }
                                            }}
                                        >
                                            <ListItemIcon>
                                                <item.icon fontSize="small" />
                                            </ListItemIcon>
                                            {item.page}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Toolbar>
                        </Container>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    );
}
