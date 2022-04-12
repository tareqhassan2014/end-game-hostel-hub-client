import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';
import typography from '../../base/typography';
import pxToRem from '../../functions/pxToRem';

const { md } = boxShadows;
const { size } = typography;
const { text, background } = colors;
const { borderRadius } = borders;

const menu = {
    defaultProps: {
        disableAutoFocusItem: true,
    },

    styleOverrides: {
        paper: {
            minWidth: pxToRem(160),
            boxShadow: md,
            padding: `${pxToRem(16)} ${pxToRem(8)}`,
            fontSize: size.sm,
            color: text.main,
            textAlign: 'left',
            backgroundColor: `${background.card} !important`,
            borderRadius: borderRadius.md,
        },
    },
};

export default menu;
