import colors from '../../base/colors';
import typography from '../../base/typography';
import rgba from '../../functions/rgba';

const { size } = typography;
const { white } = colors;

const dialogContentText = {
    styleOverrides: {
        root: {
            fontSize: size.md,
            color: rgba(white.main, 0.8),
        },
    },
};

export default dialogContentText;
