import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from '@mui/material';
import CommonCart from '../common/CommonCart';
import LineChart from './LineChart';

const UserDefault = () => {
    return (
        <Container>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        ml: 2,
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
            </Box>
            <Box>
                <LineChart />
            </Box>
        </Container>
    );
};

export default UserDefault;
