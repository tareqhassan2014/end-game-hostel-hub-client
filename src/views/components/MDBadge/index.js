import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import MDBadgeRoot from './MDBadgeRoot';

// eslint-disable-next-line react/display-name
const MDBadge = forwardRef(
    (
        {
            color,
            variant,
            size,
            circular,
            indicator,
            border,
            container,
            children,
            ...rest
        },
        ref
    ) => (
        <MDBadgeRoot
            {...rest}
            ownerState={{
                color,
                variant,
                size,
                circular,
                indicator,
                border,
                container,
                children,
            }}
            ref={ref}
            color="default"
        >
            {children}
        </MDBadgeRoot>
    )
);

// Setting default values for the props of MDBadge
MDBadge.defaultProps = {
    color: 'info',
    variant: 'gradient',
    size: 'sm',
    circular: false,
    indicator: false,
    border: false,
    children: false,
    container: false,
};

// Typechecking props of the MDBadge
MDBadge.propTypes = {
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
    variant: PropTypes.oneOf(['gradient', 'contained']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    circular: PropTypes.bool,
    indicator: PropTypes.bool,
    border: PropTypes.bool,
    children: PropTypes.node,
    container: PropTypes.bool,
};

export default MDBadge;
