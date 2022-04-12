import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';
import linearGradient from '../../functions/linearGradient';
import pxToRem from '../../functions/pxToRem';

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

const stepper = {
    styleOverrides: {
        root: {
            background: linearGradient(
                gradients.info.main,
                gradients.info.state
            ),
            padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
            borderRadius: borderRadius.lg,
            boxShadow: colored.info,

            '&.MuiPaper-root': {
                backgroundColor: transparent.main,
            },
        },
    },
};

export default stepper;
