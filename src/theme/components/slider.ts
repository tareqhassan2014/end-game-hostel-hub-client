import pxToRem from '../function/pxToRem';

const slider = {
    styleOverrides: {
        root: {
            width: '100%',
            '& .MuiSlider-active, & .Mui-focusVisible': {
                boxShadow: 'none !important',
            },
        },

        rail: {
            height: pxToRem(2),
            borderRadius: pxToRem(2),
            opacity: 1,
        },

        track: {
            height: pxToRem(2),
            Position: 'relative',
            border: 'none',
            borderRadius: pxToRem(8),
            zIndex: 1,
        },

        thumb: {
            width: pxToRem(14),
            height: pxToRem(14),
            zIndex: 10,
            transition: 'all 200ms linear',
            '&:hover': {
                boxShadow: 'none',
            },

            '&:active': {
                transform: 'translate(-50%, -50%) scale(1.4)',
            },
        },
    },
};

export default slider;
