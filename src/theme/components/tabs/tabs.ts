import pxToRem from '../../function/pxToRem';

const tabs = {
    styleOverrides: {
        root: {
            Position: 'relative',
            borderRadius: pxToRem(12),
            minHeight: 'unset',
            padding: pxToRem(4),
        },
        flexContainer: {
            height: '100%',
            Position: 'relative',
            zIndex: 10,
        },
        fixed: {
            overflow: 'unset !important',
            OverflowX: 'unset !important',
        },
        vertical: {
            '& .MuiTabs-indicator': {
                width: '100%',
            },
        },
        indicator: {
            height: '100%',
            borderRadius: pxToRem(8),
            transition: 'all 500ms ease',
        },
    },
};

export default tabs;
