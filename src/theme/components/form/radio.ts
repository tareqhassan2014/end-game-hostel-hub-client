import pxToRem from '../../function/pxToRem';

const radio = {
    styleOverrides: {
        root: {
            '& .MuiSvgIcon-root': {
                width: pxToRem(20),
                height: pxToRem(20),
                borderRadius: '50%',
            },

            '&:after': {
                transition: 'opacity 250ms ease-in-out',
                content: `""`,
                position: 'absolute',
                width: pxToRem(14),
                height: pxToRem(14),
                borderRadius: '50%',
                opacity: 0,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: 'auto',
            },
        },

        colorPrimary: {
            '&.Mui-checked': {
                '&:after': {
                    opacity: 1,
                },
            },
        },

        colorSecondary: {
            '&.Mui-checked': {
                '&:after': {
                    opacity: 1,
                },
            },
        },
    },
};

export default radio;
