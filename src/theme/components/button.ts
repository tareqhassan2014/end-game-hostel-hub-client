import pxToRem from '../function/pxToRem';

const button = {
    defaultProps: {
        disableRipple: false,
    },
    styleOverrides: {
        root: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: pxToRem(12),
            fontWeight: 700,
            borderRadius: pxToRem(8),
            padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
            lineHeight: 1.4,
            TextAlign: 'center',
            TextTransform: 'uppercase',
            UserSelect: 'none',
            backgroundSize: '150% !important',
            backgroundPositionX: '25% !important',
            transition: 'all 150ms ease-in',

            '&:disabled': {
                pointerEvent: 'none',
                opacity: 0.65,
            },

            '& .material-icons': {
                fontSize: pxToRem(15),
                marginTop: pxToRem(-2),
            },
        },

        contained: {
            minHeight: pxToRem(40),
            padding: `${pxToRem(10)} ${pxToRem(24)}`,
            '&:active, &:active:focus, &:active:hover': {
                opacity: 0.85,
            },
            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(16)} !important`,
            },
        },

        containedSizeSmall: {
            minHeight: pxToRem(32),
            padding: `${pxToRem(6)} ${pxToRem(16)}`,
            fontSize: pxToRem(12),

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(12)} !important`,
            },
        },

        containedSizeLarge: {
            minHeight: pxToRem(47),
            padding: `${pxToRem(12)} ${pxToRem(28)}`,
            fontSize: pxToRem(14),

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(22)} !important`,
            },
        },

        outlined: {
            minHeight: pxToRem(40),
            padding: `${pxToRem(10)} ${pxToRem(24)}`,

            '&:hover': {
                opacity: 0.75,
            },

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(16)} !important`,
            },
        },
        outlinedSizeSmall: {
            minHeight: pxToRem(32),
            padding: `${pxToRem(6)} ${pxToRem(16)}`,
            fontSize: pxToRem(12),

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(12)} !important`,
            },
        },
        outlinedSizeLarge: {
            minHeight: pxToRem(47),
            padding: `${pxToRem(12)} ${pxToRem(28)}`,
            fontSize: pxToRem(14),

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(22)} !important`,
            },
        },
        text: {
            minHeight: pxToRem(40),

            boxShadow: 'none',
            padding: `${pxToRem(10)} ${pxToRem(24)}`,

            '&:hover': {
                boxShadow: 'none',
            },

            '&:focus': {
                boxShadow: 'none',
            },

            '&:active, &:active:focus, &:active:hover': {
                opacity: 0.85,
                boxShadow: 'none',
            },

            '&:disabled': {
                boxShadow: 'none',
            },

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(16)} !important`,
            },
        },
        textSizeSmall: {
            minHeight: pxToRem(32),
            padding: `${pxToRem(6)} ${pxToRem(16)}`,
            fontSize: pxToRem(12),

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(12)} !important`,
            },
        },
        textSizeLarge: {
            minHeight: pxToRem(47),
            padding: `${pxToRem(12)} ${pxToRem(28)}`,
            fontSize: pxToRem(14),

            '& .material-icon, .material-icons-round, svg': {
                fontSize: `${pxToRem(22)} !important`,
            },
        },
        textPrimary: {
            '&:focus:not(:hover)': {
                boxShadow: 'none',
            },
        },
        textSecondary: {
            '&:focus:not(:hover)': {
                boxShadow: 'none',
            },
        },
    },
};

export default button;
