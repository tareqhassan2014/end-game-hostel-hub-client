import pxToRem from '../../function/pxToRem';

const inputOutlined = {
    styleOverrides: {
        root: {
            fontSize: pxToRem(14),
            borderRadius: pxToRem(6),
        },

        input: {
            padding: pxToRem(12),
        },

        inputSizeSmall: {
            fontSize: pxToRem(12),
            padding: pxToRem(10),
        },

        multiline: {
            padding: 0,
        },
    },
};

export default inputOutlined;
