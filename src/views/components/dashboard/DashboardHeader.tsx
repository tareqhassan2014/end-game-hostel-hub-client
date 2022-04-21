import { Icon, IconButton } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { toggleFullSideBar } from 'src/app/slices/theme/themeSlice';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import AvatarMenu from './MatxMenu';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

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
                    <AvatarMenu />
                </Box>
            </TopBarContainer>
        </TopBarRoot>
    );
};

export default DashboardHeader;
