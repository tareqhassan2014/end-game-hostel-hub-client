import { CircularProgress } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { Suspense } from 'react';

const StyledLoading = styled('div')(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: 'auto',
        height: '25px',
    },
    '& .circleProgress': {
        position: 'absolute',
        left: -7,
        right: 0,
        top: 'calc(50% - 25px)',
    },
}));

const Loading = () => {
    return (
        <StyledLoading>
            <Box position="relative">
                <CircularProgress className="circleProgress" />
            </Box>
        </StyledLoading>
    );
};

const DashboardSuspense: React.FC = ({ children }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default DashboardSuspense;
