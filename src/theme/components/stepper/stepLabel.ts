import pxToRem from '../../function/pxToRem';

const stepLabel = {
    styleOverrides: {
        label: {
            marginTop: `${pxToRem(8)} !important`,
            fontWeight: 400,
            fontSize: pxToRem(12),
            TextTransform: 'uppercase',

            '&.Mui-active': {
                fontWeight: `400 !important`,
            },

            '&.Mui-completed': {
                fontWeight: `400 !important`,
            },
        },
    },
};

export default stepLabel;
