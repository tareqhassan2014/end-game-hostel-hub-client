import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import CommonCart from '../common/CommonCart';

const UserDefault = () => {
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
        </div>
    );
};

export default UserDefault;
