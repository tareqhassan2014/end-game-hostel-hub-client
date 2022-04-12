import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';

const { white } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
    styleOverrides: {
        root: {
            backgroundColor: white.main,
            boxShadow: md,
            borderRadius: borderRadius.xl,
        },
    },
};

export default tableContainer;
