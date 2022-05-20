import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
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
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import * as React from 'react';
import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'src/app/slices/auth/authSlice';
import { toggleColorMode } from 'src/app/slices/theme/themeSlice';
import logo from 'src/assets/images/logos/brandLogo.png';
import useAuth from 'src/hooks/useAuth';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import './BookingModal.css';

//style modal start
const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    border: '10px solid #ffffff27',
    borderRadius: '15px',
    boxShadow: '0 5px 50px rgba(0, 0, 0, 0.15);',
    p: 2,
};
//style modal end

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
        link: 'dashboard/profile',
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

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header(props: Props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { mode } = useThemeAndLayout();

    //modal start
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };
    //modal end

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
            <HideOnScroll {...props}>
                <AppBar
                    sx={{
                        backdropFilter: `saturate(200%) blur(1.875 rem)`,
                        py: 0.5,
                        backgroundColor: 'white',
                        color: 'black',
                        borderEndEndRadius: '0.5rem',
                        borderEndStartRadius: '0.5rem',
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
                                                sx={{
                                                    color: 'primary.main',
                                                }}
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
                                                display: 'block',
                                                color: 'primary.main',
                                            }}
                                        >
                                            {page.page}
                                        </Button>
                                    ))}
                                </Box>
                                {/* modal section start */}

                                <button
                                    style={{
                                        background: '#4774FF',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        border: 'none',
                                        padding: '12px 20px',
                                    }}
                                    onClick={handleOpen}
                                >
                                    Book Now
                                </button>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={open}>
                                        <Box sx={style}>
                                            <button
                                                onClick={handleClose}
                                                className="bookingModalBtn"
                                            >
                                                X
                                            </button>
                                            <Typography
                                                sx={{
                                                    mb: 3,
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    color: '#4774FF',
                                                }}
                                                id="transition-modal-title"
                                                variant="h4"
                                                component="h2"
                                            >
                                                Search your Room
                                            </Typography>
                                            <form
                                                className="bookingModal"
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <input
                                                    {...register('location')}
                                                    placeholder="Location"
                                                />
                                                <input
                                                    {...register('location')}
                                                    placeholder="Location"
                                                />
                                                <input
                                                    {...register('location')}
                                                    placeholder="Location"
                                                />

                                                <div
                                                    style={{
                                                        display: 'flex',
                                                    }}
                                                >
                                                    <select
                                                        style={{
                                                            marginRight: '5px',
                                                        }}
                                                        {...register('bedType')}
                                                    >
                                                        <option value="">
                                                            Room
                                                        </option>
                                                        <option value="ac">
                                                            AC
                                                        </option>
                                                        <option value="normal">
                                                            Normal
                                                        </option>
                                                    </select>
                                                    <select
                                                        {...register('gender')}
                                                    >
                                                        <option value="">
                                                            Gender
                                                        </option>
                                                        <option value="male">
                                                            Male
                                                        </option>
                                                        <option value="female">
                                                            Female
                                                        </option>
                                                    </select>
                                                </div>

                                                <div
                                                    style={{
                                                        display: 'flex',
                                                    }}
                                                >
                                                    <select
                                                        style={{
                                                            marginRight: '5px',
                                                        }}
                                                        {...register('bedType')}
                                                    >
                                                        <option value="">
                                                            Bed Type
                                                        </option>
                                                        <option value="single">
                                                            Single
                                                        </option>
                                                        <option value="double">
                                                            Double
                                                        </option>
                                                    </select>
                                                    <select
                                                        {...register('gender')}
                                                    >
                                                        <option value="">
                                                            Price Range
                                                        </option>
                                                        <option value="5000- 10000">
                                                            $ 5000- 10000
                                                        </option>
                                                        <option value="10000-15000">
                                                            $ 10000-15000
                                                        </option>
                                                        <option value="15000-20000">
                                                            $ 15000-20000
                                                        </option>
                                                        <option value="20000-25000">
                                                            $ 20000-25000
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="searchButton">
                                                    <SearchIcon
                                                        sx={{
                                                            color: 'white',
                                                        }}
                                                    />
                                                    <button type="submit">
                                                        Search
                                                    </button>
                                                </div>
                                            </form>
                                        </Box>
                                    </Fade>
                                </Modal>
                                {/* modal section end */}
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
            </HideOnScroll>
            <Toolbar />
        </>
    );
}
