import borders from '../../base/borders';
import colors from '../../base/colors';
import typography from '../../base/typography';
import pxToRem from '../../functions/pxToRem';
import rgba from '../../functions/rgba';

const { size } = typography;
const { white } = colors;
const { borderWidth, borderColor } = borders;

const dialogContent = {
    styleOverrides: {
        root: {
            padding: pxToRem(16),
            fontSize: size.md,
            color: rgba(white.main, 0.8),
        },

        dividers: {
            borderTop: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
            borderBottom: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
        },
    },
};

export default dialogContent;
