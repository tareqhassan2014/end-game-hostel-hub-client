import pxToRem from '../../function/pxToRem';

const stepper = {
    styleOverrides: {
        root: {
            padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
            borderRadius: pxToRem(8),
        },
    },
};

export default stepper;
