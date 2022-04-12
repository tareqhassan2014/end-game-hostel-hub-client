import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';
import pxToRem from '../../functions/pxToRem';

const { background } = colors;
const { borderRadius } = borders;
const { md } = boxShadows;

const tabs = {
    styleOverrides: {
        root: {
            position: 'relative',
            backgroundColor: background.card,
            borderRadius: borderRadius.xl,
            minHeight: 'unset',
            padding: pxToRem(4),
        },

        flexContainer: {
            height: '100%',
            position: 'relative',
            zIndex: 10,
        },

        fixed: {
            overflow: 'unset !important',
            overflowX: 'unset !important',
        },

        vertical: {
            '& .MuiTabs-indicator': {
                width: '100%',
            },
        },

        indicator: {
            height: '100%',
            borderRadius: borderRadius.lg,
            backgroundColor: background.default,
            boxShadow: md,
            transition: 'all 500ms ease',
        },
    },
};

export default tabs;
