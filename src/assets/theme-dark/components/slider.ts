import borders from '../base/borders';
import boxShadows from '../base/boxShadows';
import colors from '../base/colors';
import pxToRem from '../functions/pxToRem';

const { grey, white, black, info } = colors;
const { borderRadius, borderWidth } = borders;
const { sliderBoxShadow } = boxShadows;

const slider = {
    styleOverrides: {
        root: {
            width: '100%',

            '& .MuiSlider-active, & .Mui-focusVisible': {
                boxShadow: 'none !important',
            },

            '& .MuiSlider-valueLabel': {
                color: black.main,
            },
        },

        rail: {
            height: pxToRem(2),
            background: grey[200],
            borderRadius: borderRadius.sm,
            opacity: 1,
        },

        track: {
            background: info.main,
            height: pxToRem(2),
            position: 'relative',
            border: 'none',
            borderRadius: borderRadius.lg,
            zIndex: 1,
        },

        thumb: {
            width: pxToRem(14),
            height: pxToRem(14),
            backgroundColor: white.main,
            zIndex: 10,
            boxShadow: sliderBoxShadow.thumb,
            border: `${borderWidth[1]} solid ${info.main}`,

            '&:hover': {
                boxShadow: 'none',
            },
        },
    },
};

export default slider;
