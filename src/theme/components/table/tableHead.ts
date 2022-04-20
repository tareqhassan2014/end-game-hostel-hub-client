import pxToRem from '../../function/pxToRem';

const tableHead = {
    styleOverrides: {
        root: {
            display: 'block',
            padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
            borderRadius: `${pxToRem(12)} ${pxToRem(12)} 0 0`,
        },
    },
};

export default tableHead;
