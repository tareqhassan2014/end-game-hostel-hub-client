import pxToRem from '../../function/pxToRem';

const cardMedia = {
    styleOverrides: {
        root: {
            borderRadius: pxToRem(12),
            margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
        },

        media: {
            width: 'auto',
        },
    },
};

export default cardMedia;
