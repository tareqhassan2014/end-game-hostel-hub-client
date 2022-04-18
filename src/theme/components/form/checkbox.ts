import pxToRem from '../../function/pxToRem';

const checkbox = {
    styleOverrides: {
        root: {
            '& .MuiSvgIcon-root': {
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: pxToRem(20),
                height: pxToRem(20),
                borderRadius: pxToRem(5.6),
            },
        },
    },
};

export default checkbox;
