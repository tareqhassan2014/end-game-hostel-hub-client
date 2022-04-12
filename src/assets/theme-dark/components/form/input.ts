import borders from '../../base/borders';
import colors from '../../base/colors';
import typography from '../../base/typography';
import rgba from '../../functions/rgba';

const { info, inputBorderColor, dark, grey, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
    styleOverrides: {
        root: {
            fontSize: size.sm,
            color: dark.main,

            '&:hover:not(.Mui-disabled):before': {
                borderBottom: `${borderWidth[1]} solid ${rgba(
                    inputBorderColor,
                    0.6
                )}`,
            },

            '&:before': {
                borderColor: rgba(inputBorderColor, 0.6),
            },

            '&:after': {
                borderColor: info.main,
            },

            input: {
                color: white.main,

                '&::-webkit-input-placeholder': {
                    color: grey[100],
                },
            },
        },
    },
};

export default input;
