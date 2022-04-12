import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';
import rgba from '../../functions/rgba';

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const card = {
    styleOverrides: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            minWidth: 0,
            wordWrap: 'break-word',
            backgroundColor: white.main,
            backgroundClip: 'border-box',
            border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
            borderRadius: borderRadius.xl,
            boxShadow: md,
            overflow: 'visible',
        },
    },
};

export default card;
