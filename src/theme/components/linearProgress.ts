import pxToRem from '../function/pxToRem';

const linearProgress = {
    styleOverrides: {
        root: {
            height: pxToRem(6),
            borderRadius: pxToRem(6),
            overflow: 'visible',
            Position: 'relative',
        },

        bar: {
            height: pxToRem(6),
            borderRadius: pxToRem(2),
            Position: 'absolute',
            transform: `translate(0, 0) !important`,
            transition: 'width 0.6s ease !important',
        },
    },
};

export default linearProgress;
