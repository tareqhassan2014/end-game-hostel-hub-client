import { Hidden, Switch } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFullSideBar } from 'src/app/slices/theme/themeSlice';
import useAuth from 'src/hooks/useAuth';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import { convertHexToRGB } from 'src/utility/convertHexToRGB';
import AdminVerticalNav from '../../AdminDashboard/AdminVerticalNav';
import MemberVerticalNav from '../../MemberDashboard/MemberVerticalNav';
import ModeratorVerticalNav from '../../moderatorDashboard/ModeratorVerticalNav';
import UserVerticalNav from '../../UserDashboard/UserVerticalNav';
import VendorVerticalNav from '../../vendorDashboard/VendorVerticalNav';
import Brand from '../Brand';
import {
    NavListBox,
    SidebarNavRoot,
    SideNavMobile,
    StyledScrollBar,
} from './style';

const Sidenav = () => {
    const { user } = useAuth();
    const theme = useTheme();
    const dispatch = useDispatch();
    const { sideNavWidth } = useThemeAndLayout();

    const primaryRGB = convertHexToRGB(theme.palette.primary.main);

    const handleSidenavToggle = () => {
        if (sideNavWidth === 260) {
            dispatch(toggleFullSideBar(80));
        }
        if (sideNavWidth === 80) {
            dispatch(toggleFullSideBar(260));
        }
    };

    return (
        <SidebarNavRoot width={sideNavWidth} color={primaryRGB}>
            <NavListBox>
                <Brand>
                    <Hidden smDown>
                        <Switch
                            onChange={handleSidenavToggle}
                            checked={sideNavWidth === 80}
                            color="secondary"
                            size="small"
                        />
                    </Hidden>
                </Brand>
                <Fragment>
                    <StyledScrollBar options={{ suppressScrollX: true }}>
                        {user.role === 'user' && <UserVerticalNav />}
                        {user.role === 'member' && <MemberVerticalNav />}
                        {user.role === 'admin' && <AdminVerticalNav />}
                        {user.role === 'moderator' && <ModeratorVerticalNav />}
                        {user.role === 'vendor' && <VendorVerticalNav />}
                    </StyledScrollBar>

                    <SideNavMobile
                        onClick={() => dispatch(toggleFullSideBar(0))}
                    />
                </Fragment>
            </NavListBox>
        </SidebarNavRoot>
    );
};

export default React.memo(Sidenav);
