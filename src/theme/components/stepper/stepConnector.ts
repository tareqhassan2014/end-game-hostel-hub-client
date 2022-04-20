import pxToRem from '../../function/pxToRem';

const stepConnector = {
    styleOverrides: {
        root: {
            color: '#9fc9ff',
            transition: 'all 200ms linear',
        },

        alternativeLabel: {
            top: '14%',
            left: '-50%',
            right: '50%',
        },

        line: {
            borderWidth: `${pxToRem(2)} !important`,
            borderColor: 'currentColor',
            opacity: 0.5,
        },
    },
};

export default stepConnector;
