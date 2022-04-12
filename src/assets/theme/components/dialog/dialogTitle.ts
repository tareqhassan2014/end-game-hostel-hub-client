import typography from '../../base/typography';
import pxToRem from '../../functions/pxToRem';

const { size } = typography;

const dialogTitle = {
    styleOverrides: {
        root: {
            padding: pxToRem(16),
            fontSize: size.xl,
        },
    },
};

export default dialogTitle;
