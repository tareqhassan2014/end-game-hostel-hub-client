import { styled } from '@mui/system';
import React, { Fragment } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { useDispatch } from 'react-redux';
import { toggleFullSideBar } from 'src/app/slices/theme/themeSlice';
import useAuth from 'src/hooks/useAuth';
import AdminVerticalNav from '../AdminDashboard/AdminVerticalNav';
import ModeratorVerticalNav from '../moderatorDashboard/ModeratorVerticalNav';
import UserVerticalNav from '../UserDashboard/UserVerticalNav';
import VendorVerticalNav from '../vendorDashboard/VendorVerticalNav';

const StyledScrollBar = styled(Scrollbar)(() => ({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
}));

const SideNavMobile = styled('div')(({ theme }) => ({
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

const Sidenav: React.FC = ({ children }) => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Fragment>
            <StyledScrollBar options={{ suppressScrollX: true }}>
                {children}
                {user.role === 'admin' && <AdminVerticalNav />}
                {user.role === 'user' && <UserVerticalNav />}
                {user.role === 'vendor' && <VendorVerticalNav />}
                {user.role === 'moderator' && <ModeratorVerticalNav />}
            </StyledScrollBar>

            <SideNavMobile onClick={() => dispatch(toggleFullSideBar(0))} />
        </Fragment>
    );
};

export default Sidenav;
