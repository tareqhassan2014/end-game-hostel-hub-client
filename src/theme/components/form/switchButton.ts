import pxToRem from '../../function/pxToRem';

const switchButton = {
    defaultProps: {
        disableRipple: false,
    },

    styleOverrides: {
        switchBase: {
            '&.Mui-checked': {
                '& + .MuiSwitch-track': {
                    opacity: 1,
                },
            },

            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: '0.3 !important',
            },
        },

        track: {
            width: pxToRem(32),
            height: pxToRem(15),
            opacity: 1,
        },

        checked: {},
    },
};

export default switchButton;
