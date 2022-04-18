import pxToRem from '../../function/pxToRem';

const menuItem = {
    styleOverrides: {
        root: {
            minWidth: pxToRem(160),
            minHeight: 'unset',
            padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
            borderRadius: pxToRem(6),
            fontSize: pxToRem(14),
            transition: 'background-color 300ms ease, color 300ms ease',
        },
    },
};

export default menuItem;
