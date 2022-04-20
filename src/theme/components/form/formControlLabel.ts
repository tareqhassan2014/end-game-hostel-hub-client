import pxToRem from '../../function/pxToRem';

const formControlLabel = {
    styleOverrides: {
        root: {
            display: 'block',
            minHeight: pxToRem(24),
            marginBottom: pxToRem(2),
        },

        label: {
            display: 'inline-block',
            fontSize: pxToRem(14),
            fontWeight: 700,

            lineHeight: 1,
            transform: `translateY(${pxToRem(1)})`,
            marginLeft: pxToRem(4),
        },
    },
};

export default formControlLabel;
