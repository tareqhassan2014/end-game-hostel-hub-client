import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import MDTypography from '../MDTypography';
import MDProgressRoot from './MDProgressRoot';

// eslint-disable-next-line react/display-name
const MDProgress = forwardRef(
    ({ variant, color, value, label, ...rest }, ref) => (
        <>
            {label && (
                <MDTypography variant="button" fontWeight="medium" color="text">
                    {value}%
                </MDTypography>
            )}
            <MDProgressRoot
                {...rest}
                ref={ref}
                variant="determinate"
                value={value}
                ownerState={{ color, value, variant }}
            />
        </>
    )
);

// Setting default values for the props of MDProgress
MDProgress.defaultProps = {
    variant: 'contained',
    color: 'info',
    value: 0,
    label: false,
};

// Typechecking props for the MDProgress
MDProgress.propTypes = {
    variant: PropTypes.oneOf(['contained', 'gradient']),
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
    value: PropTypes.number,
    label: PropTypes.bool,
};

export default MDProgress;
