import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';

const { background } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
    styleOverrides: {
        root: {
            backgroundColor: background.card,
            boxShadow: md,
            borderRadius: borderRadius.xl,
        },
    },
};

export default tableContainer;
