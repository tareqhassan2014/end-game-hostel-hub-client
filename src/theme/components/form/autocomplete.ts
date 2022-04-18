import pxToRem from '../../function/pxToRem';

const autocomplete = {
    styleOverrides: {
        popper: {
            padding: pxToRem(8),
            fontSize: pxToRem(14),
            TextAlign: 'left',
            borderRadius: pxToRem(6),
        },

        paper: {
            boxShadow: 'none',
        },

        option: {
            padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
            borderRadius: pxToRem(6),
            fontSize: pxToRem(14),
            transition: 'background-color 300ms ease, color 300ms ease',
        },
        noOptions: {
            fontSize: pxToRem(14),
        },
        loading: {
            fontSize: pxToRem(14),
        },
        tag: {
            display: 'flex',
            alignItems: 'center',
            height: 'auto',
            padding: pxToRem(4),

            '& .MuiChip-label': {
                lineHeight: 1.2,
                padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
            },
            '& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus':
                {
                    marginRight: 0,
                },
        },
    },
};

export default autocomplete;
