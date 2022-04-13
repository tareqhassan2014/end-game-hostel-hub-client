import PropTypes from 'prop-types';
import { useEffect } from 'react';
// react-router-dom components
import { useLocation } from 'react-router-dom';
import { setLayout } from 'src/app/reducers/mui/muiSlice';
import useController from 'src/hooks/useController';
import MDBox from 'src/views/components/MDBox';

function DashboardLayout({ children }) {
    const {
        controller: { miniSidenav },
    } = useController();
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout('dashboard');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <MDBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                p: 3,
                position: 'relative',

                [breakpoints.up('xl')]: {
                    marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
                    transition: transitions.create(
                        ['margin-left', 'margin-right'],
                        {
                            easing: transitions.easing.easeInOut,
                            duration: transitions.duration.standard,
                        }
                    ),
                },
            })}
        >
            {children}
        </MDBox>
    );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DashboardLayout;
