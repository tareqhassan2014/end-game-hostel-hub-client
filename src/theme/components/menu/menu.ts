import pxToRem from '../../function/pxToRem';

const menu = {
    defaultProps: {
        disableAutoFocusItem: true,
    },

    styleOverrides: {
        paper: {
            minWidth: pxToRem(160),
            padding: `${pxToRem(16)} ${pxToRem(8)}`,
            fontSize: pxToRem(14),
            TextAlign: 'left',
            borderRadius: pxToRem(6),
        },
    },
};

export default menu;
