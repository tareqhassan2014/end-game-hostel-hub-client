import PropTypes from 'prop-types';
import { useEffect } from 'react';
// react-router-dom components
import { useLocation } from 'react-router-dom';
import { setLayout } from 'src/app/reducers/mui/muiSlice';
import MDBox from 'src/views/components/MDBox';

function PageLayout({ background, children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout('page');
    }, [pathname]);

    return (
        <MDBox
            width="100vw"
            height="100%"
            minHeight="100vh"
            bgColor={background}
            sx={{ overflowX: 'hidden' }}
        >
            {children}
        </MDBox>
    );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
    background: 'default',
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
    background: PropTypes.oneOf(['white', 'light', 'default']),
    children: PropTypes.node.isRequired,
};

export default PageLayout;
