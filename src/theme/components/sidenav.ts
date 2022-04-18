import pxToRem from '../function/pxToRem';

const sidenav = {
    styleOverrides: {
        root: {
            width: pxToRem(250),
            WhiteSpace: 'nowrap',
            border: 'none',
        },

        paper: {
            width: pxToRem(250),
            height: `calc(100vh - ${pxToRem(32)})`,
            margin: pxToRem(16),
            borderRadius: pxToRem(12),
            border: 'none',
        },

        paperAnchorDockedLeft: {
            borderRight: 'none',
        },
    },
};

export default sidenav;
