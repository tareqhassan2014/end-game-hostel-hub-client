// @mui material components
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export default styled(LinearProgress)(({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const { color, value, variant } = ownerState;

    const { text, gradients } = palette;
    const { linearGradient } = functions;

    // background value
    let backgroundValue;

    if (variant === 'gradient') {
        backgroundValue = gradients[color]
            ? linearGradient(gradients[color].main, gradients[color].state)
            : linearGradient(gradients.info.main, gradients.info.state);
    } else {
        backgroundValue = palette[color]
            ? palette[color].main
            : palette.info.main;
    }

    return {
        '& .MuiLinearProgress-bar': {
            background: backgroundValue,
            width: `${value}%`,
            color: text.main,
        },
    };
});
