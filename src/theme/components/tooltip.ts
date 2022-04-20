import Fade from '@mui/material/Fade';
import pxToRem from '../function/pxToRem';

const tooltip = {
    defaultProps: {
        arrow: true,
        TransitionComponent: Fade,
    },

    styleOverrides: {
        tooltip: {
            maxWidth: pxToRem(200),
            fontSize: pxToRem(14),
            fontWeight: 400,
            TextAlign: 'center',
            borderRadius: pxToRem(6),
            opacity: 0.7,
            padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
        },
    },
};

export default tooltip;
