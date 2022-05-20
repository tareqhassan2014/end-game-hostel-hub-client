import { Box, styled } from '@mui/system';
import Scrollbar from 'react-perfect-scrollbar';

export const SidebarNavRoot = styled(Box)(
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

export const NavListBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

export const StyledScrollBar = styled(Scrollbar)(() => ({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
}));

export const SideNavMobile = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.54)',
    zIndex: -1,
    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
}));
