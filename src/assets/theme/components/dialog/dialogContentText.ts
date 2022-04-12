import colors from '../../base/colors';
import typography from '../../base/typography';

const { size } = typography;
const { text } = colors;

const dialogContentText = {
    styleOverrides: {
        root: {
            fontSize: size.md,
            color: text.main,
        },
    },
};

export default dialogContentText;
