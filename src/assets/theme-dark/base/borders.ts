import pxToRem from '../functions/pxToRem';
import rgba from '../functions/rgba';
import colors from './colors';

const { white } = colors;

const borders = {
    borderColor: rgba(white.main, 0.4),

    borderWidth: {
        0: 0,
        1: pxToRem(1),
        2: pxToRem(2),
        3: pxToRem(3),
        4: pxToRem(4),
        5: pxToRem(5),
    },

    borderRadius: {
        xs: pxToRem(1.6),
        sm: pxToRem(2),
        md: pxToRem(6),
        lg: pxToRem(8),
        xl: pxToRem(12),
        xxl: pxToRem(16),
        section: pxToRem(160),
    },
};

export default borders;
