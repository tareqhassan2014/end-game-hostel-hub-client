import contained from './contained';
import outlined from './outlined';
import root from './root';
import buttonText from './text';

const button = {
    defaultProps: {
        disableRipple: false,
    },
    styleOverrides: {
        root: { ...root },
        contained: { ...contained.base },
        containedSizeSmall: { ...contained.small },
        containedSizeLarge: { ...contained.large },
        containedPrimary: { ...contained.primary },
        containedSecondary: { ...contained.secondary },
        outlined: { ...outlined.base },
        outlinedSizeSmall: { ...outlined.small },
        outlinedSizeLarge: { ...outlined.large },
        outlinedPrimary: { ...outlined.primary },
        outlinedSecondary: { ...outlined.secondary },
        text: { ...buttonText.base },
        textSizeSmall: { ...buttonText.small },
        textSizeLarge: { ...buttonText.large },
        textPrimary: { ...buttonText.primary },
        textSecondary: { ...buttonText.secondary },
    },
};

export default button;
