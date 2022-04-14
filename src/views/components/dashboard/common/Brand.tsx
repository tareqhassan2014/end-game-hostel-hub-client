import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Box, styled } from '@mui/system';
import React from 'react';

const BrandRoot = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 18px 20px 29px',
}));

const StyledSpan = styled('span')(() => ({
    fontSize: 18,
    marginLeft: '.5rem',
    display: 'block',
}));

const Brand: React.FC = ({ children }) => {
    return (
        <BrandRoot>
            <Box display="flex" alignItems="center">
                <HomeWorkIcon />
                <StyledSpan className="sidenavHoverShow">Hostel Hub</StyledSpan>
            </Box>
            <Box className="sidenavHoverShow">{children || null}</Box>
        </BrandRoot>
    );
};

export default Brand;
