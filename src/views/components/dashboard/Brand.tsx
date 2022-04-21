import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/logos/brandLogo.png';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';

const Brand: React.FC = ({ children }) => {
    const { sideNavWidth } = useThemeAndLayout();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p:
                    sideNavWidth === 80
                        ? '20px 18px 20px 20px'
                        : '20px 18px 20px 29px',
            }}
        >
            <Box display="flex" alignItems="center">
                <Box
                    component="img"
                    src={logo}
                    sx={{
                        height: sideNavWidth === 80 ? 30 : 50,
                        cursor: 'pointer',
                    }}
                    alt="logo"
                    onClick={() => navigate('/')}
                />
            </Box>
            <Box
                className="sidenavHoverShow"
                sx={{ display: sideNavWidth === 80 ? 'none' : 'block' }}
            >
                {children || null}
            </Box>
        </Box>
    );
};

export default Brand;
