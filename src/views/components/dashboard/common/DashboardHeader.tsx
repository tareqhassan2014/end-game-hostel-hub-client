import { Badge, Icon, IconButton } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleFullSideBar } from 'src/app/slices/theme/themeSlice';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import '../../../pages/PostAvailableSit/PostAvailableSit.scss';
import AvatarMenu from './AvatarMenu';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

const location = window.location;

// pathname
const manageProductRoute = '/dashboard/manageProduct';
const manageOrderRoute = '/dashboard/manageOrder';
const pendingOrderRoute = '/dashboard/pendingOrder';
const confirmOrderRoute = '/dashboard/confirmOrder';

const TopBarRoot = styled('div')(() => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    height: 50,
}));

const TopBarContainer = styled(Box)(({ theme }) => ({
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

const IconBox = styled('div')(({ theme }) => ({
    display: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'none !important',
    },
}));

const DashboardHeader = () => {
    const navigate = useNavigate();
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
        <TopBarRoot>
            <TopBarContainer>
                <Box display="flex">
                    <StyledIconButton onClick={handleSidenavToggle}>
                        <Icon sx={{ color: 'white' }}>menu</Icon>
                    </StyledIconButton>
                    <IconBox>
                        <StyledIconButton
                            onClick={() => navigate('/dashboard/notification')}
                        >
                            <Badge badgeContent={4} color="secondary">
                                <Icon sx={{ color: 'white' }}>
                                    notifications
                                </Icon>
                            </Badge>
                        </StyledIconButton>
                    </IconBox>
                    {location.pathname === manageOrderRoute ||
                    location.pathname === manageProductRoute ||
                    location.pathname === pendingOrderRoute ||
                    location.pathname === confirmOrderRoute ? (
                        <input
                            className="searchBar"
                            style={{
                                marginLeft: '10%',

                                borderRadius: '3px',
                                border: 'none',
                            }}
                            type="text"
                        />
                    ) : (
                        ''
                    )}
                </Box>
                <Box display="flex" alignItems="center">
                    <AvatarMenu />
                </Box>
            </TopBarContainer>
            <Box sx={{ display: 'none' }}></Box>
        </TopBarRoot>
    );
};

export default DashboardHeader;
