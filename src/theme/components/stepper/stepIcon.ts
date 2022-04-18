import pxToRem from '../../function/pxToRem';

const stepIcon = {
    styleOverrides: {
        root: {
            strokeWidth: pxToRem(10),
            width: pxToRem(13),
            height: pxToRem(13),
            borderRadius: '50%',
            zIndex: 99,
            transition: 'all 200ms linear',
        },
    },
};

export default stepIcon;
