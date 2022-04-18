import pxToRem from '../../function/pxToRem';

const tab = {
    styleOverrides: {
        root: {
            display: 'flex',
            alignItems: 'center',
            FlexDirection: 'row',
            flex: '1 1 auto',
            TextAlign: 'center',
            maxWidth: 'unset !important',
            minWidth: 'unset !important',
            minHeight: 'unset !important',
            fontSize: pxToRem(16),
            fontWeight: 400,
            TextTransform: 'none',
            lineHeight: 'inherit',
            padding: pxToRem(4),
            borderRadius: pxToRem(8),
            opacity: '1 !important',

            '& .material-icons, .material-icons-round': {
                marginBottom: '0 !important',
                marginRight: pxToRem(6),
            },

            '& svg': {
                marginBottom: '0 !important',
                marginRight: pxToRem(6),
            },
        },

        labelIcon: {
            paddingTop: pxToRem(4),
        },
    },
};

export default tab;
