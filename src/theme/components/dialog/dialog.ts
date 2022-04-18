import pxToRem from '../../function/pxToRem';

const dialog = {
    styleOverrides: {
        paper: {
            borderRadius: pxToRem(8),
        },

        paperFullScreen: {
            borderRadius: 0,
        },
    },
};

export default dialog;
