// @mui material components
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MDBox from '../MDBox';
import MDAlertCloseIcon from './MDAlertCloseIcon';
import MDAlertRoot from './MDAlertRoot';

function MDAlert({ color, dismissible, children, ...rest }) {
    const [alertStatus, setAlertStatus] = useState('mount');

    const handleAlertStatus = () => setAlertStatus('fadeOut');

    // The base template for the alert
    const alertTemplate = (mount = true) => (
        <Fade in={mount} timeout={300}>
            <MDAlertRoot ownerState={{ color }} {...rest}>
                <MDBox display="flex" alignItems="center" color="white">
                    {children}
                </MDBox>
                {dismissible ? (
                    <MDAlertCloseIcon
                        onClick={mount ? handleAlertStatus : null}
                    >
                        &times;
                    </MDAlertCloseIcon>
                ) : null}
            </MDAlertRoot>
        </Fade>
    );

    switch (true) {
        case alertStatus === 'mount':
            return alertTemplate();
        case alertStatus === 'fadeOut':
            setTimeout(() => setAlertStatus('unmount'), 400);
            return alertTemplate(false);
        default:
            alertTemplate();
            break;
    }

    return null;
}

// Setting default values for the props of MDAlert
MDAlert.defaultProps = {
    color: 'info',
    dismissible: false,
};

// Typechecking props of the MDAlert
MDAlert.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
    ]),
    dismissible: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default MDAlert;
