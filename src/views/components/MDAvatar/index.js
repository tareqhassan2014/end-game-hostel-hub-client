import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import MDAvatarRoot from './MDAvatarRoot';

// eslint-disable-next-line react/display-name
const MDAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
    <MDAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of MDAvatar
MDAvatar.defaultProps = {
    bgColor: 'transparent',
    size: 'md',
    shadow: 'none',
};

// Typechecking props for the MDAvatar
MDAvatar.propTypes = {
    bgColor: PropTypes.oneOf([
        'transparent',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
    ]),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    shadow: PropTypes.oneOf([
        'none',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
        'inset',
    ]),
};

export default MDAvatar;
