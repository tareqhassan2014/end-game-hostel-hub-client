import Fade from '@mui/material/Fade';
import borders from '../base/borders';
import colors from '../base/colors';
import typography from '../base/typography';
import pxToRem from '../functions/pxToRem';

const { black, white } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip = {
    defaultProps: {
        arrow: true,
        TransitionComponent: Fade,
    },

    styleOverrides: {
        tooltip: {
            maxWidth: pxToRem(200),
            backgroundColor: black.main,
            color: white.main,
            fontSize: size.sm,
            fontWeight: fontWeightRegular,
            textAlign: 'center',
            borderRadius: borderRadius.md,
            opacity: 0.7,
            padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
        },

        arrow: {
            color: black.main,
        },
    },
};

export default tooltip;
