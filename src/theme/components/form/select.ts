import pxToRem from '../../function/pxToRem';

const select = {
    styleOverrides: {
        select: {
            display: 'grid',
            alignItems: 'center',
            padding: `0 ${pxToRem(12)} !important`,
        },

        selectMenu: {
            background: 'none',
            height: 'none',
            minHeight: 'none',
            overflow: 'unset',
        },

        icon: {
            display: 'none',
        },
    },
};

export default select;
