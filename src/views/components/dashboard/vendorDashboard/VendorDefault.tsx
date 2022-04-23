import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import React from 'react';
import CommonCart from '../common/CommonCart';
import { PieChart } from './PieChart';

const VendorDefault = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    ml: 5,
                    mt: 2,
                    '& > :not(style)': {
                        m: 1,
                        width: 'auto',
                        height: 'auto',
                    },
                }}
            >
                <CommonCart
                    icon={<SearchIcon />}
                    title="Title goes here"
                    text="Description goes to here"
                />

                <CommonCart
                    icon={<SearchIcon />}
                    title="Title goes here"
                    text="Description goes to here"
                />
                <CommonCart
                    icon={<SearchIcon />}
                    title="Title goes here"
                    text="Description goes to here"
                />
            </Box>
            <PieChart />
        </div>
    );
};

export default VendorDefault;
