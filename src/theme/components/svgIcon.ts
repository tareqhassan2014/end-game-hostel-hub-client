import pxToRem from '../function/pxToRem';

const svgIcon = {
    styleOverrides: {
        fontSizeInherit: {
            fontSize: 'inherit !important',
        },

        fontSizeSmall: {
            fontSize: `${pxToRem(20)} !important`,
        },

        fontSizeLarge: {
            fontSize: `${pxToRem(36)} !important`,
        },
    },
};

export default svgIcon;
