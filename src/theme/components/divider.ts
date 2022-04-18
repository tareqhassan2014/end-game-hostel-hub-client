import pxToRem from '../function/pxToRem';

const divider = {
    styleOverrides: {
        root: {
            height: pxToRem(1),
            margin: `${pxToRem(16)} 0`,
            borderBottom: 'none',
            opacity: 0.25,
        },

        vertical: {
            width: pxToRem(1),
            height: '100%',
            margin: `0 ${pxToRem(16)}`,
            borderRight: 'none',
        },
    },
};

export default divider;
