import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from '@mui/material';
import React from 'react';
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
                        color="#fff"
                    />

                    <CommonCart
                        icon={<SearchIcon />}
                        title="Title goes here"
                        text="Description goes to here"
                        color="#fff"
                    />
                    <CommonCart
                        icon={<SearchIcon />}
                        title="Title goes here"
                        text="Description goes to here"
                        color="#fff"
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
