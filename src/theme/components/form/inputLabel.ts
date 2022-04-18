import pxToRem from '../../function/pxToRem';

const inputLabel = {
    styleOverrides: {
        root: {
            fontSize: pxToRem(14),

            lineHeight: 0.9,

            '&.MuiInputLabel-shrink': {
                lineHeight: 1.5,
                fontSize: pxToRem(16),

                '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend':
                    {
                        fontSize: '0.85em',
                    },
            },
        },

        sizeSmall: {
            fontSize: pxToRem(12),
            lineHeight: 1.625,

            '&.MuiInputLabel-shrink': {
                lineHeight: 1.6,
                fontSize: pxToRem(14),

                '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend':
                    {
                        fontSize: '0.72em',
                    },
            },
        },
    },
};

export default inputLabel;
