// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import useController from 'src/hooks/useController';
import MDButtonRoot from './MDButtonRoot';

// eslint-disable-next-line react/display-name
const MDButton = forwardRef(
    ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => {
        const { controller } = useController();
        const { darkMode } = controller;

        return (
            <MDButtonRoot
                {...rest}
                ref={ref}
                color="primary"
                variant={variant === 'gradient' ? 'contained' : variant}
                size={size}
                ownerState={{
                    color,
                    variant,
                    size,
                    circular,
                    iconOnly,
                    darkMode,
                }}
            >
                {children}
            </MDButtonRoot>
        );
    }
);

// Setting default values for the props of MDButton
MDButton.defaultProps = {
    size: 'medium',
    variant: 'contained',
    color: 'white',
    circular: false,
    iconOnly: false,
};

// Typechecking props for the MDButton
MDButton.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'gradient']),
    color: PropTypes.oneOf([
        'white',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
    ]),
    circular: PropTypes.bool,
    iconOnly: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default MDButton;
