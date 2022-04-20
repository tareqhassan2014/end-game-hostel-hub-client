import pxToRem from '../../function/pxToRem';

const card = {
    styleOverrides: {
        root: {
            Position: 'relative',
            minWidth: 0,
            WordWrap: 'break-word',
            backgroundClip: 'border-box',
            borderRadius: pxToRem(12),
            overflow: 'visible',
        },
    },
};

export default card;
