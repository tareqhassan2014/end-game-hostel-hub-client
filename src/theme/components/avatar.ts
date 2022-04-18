import pxToRem from '../function/pxToRem';

const avatar = {
    styleOverrides: {
        root: {
            transition: 'all 200ms ease-in-out',
        },
        rounded: {
            borderRadius: pxToRem(8),
        },
        img: {
            height: 'auto',
        },
    },
};

export default avatar;
