import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CommonCart from '../common/CommonCart';
import { PieChart } from './PieChart';

const VendorDefault = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    ml: 4,
                    mt: 2,
                    '& > :not(style)': {
                        m: 1,
                        width: 'auto',
                        height: 'auto',
                    },
                }}
            >
                <Link style={{ textDecoration: 'none' }} to="/">
                    <CommonCart
                        icon={
                            <ArrowDownwardIcon
                                sx={{
                                    fontSize: '30px',
                                    color: 'red',
                                    fontWeight: 'bold',
                                }}
                            />
                        }
                        title="87"
                        text="Total Pending Order"
                        color="#E2BBCE"
                    />
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <CommonCart
                        icon={
                            <CheckCircleIcon
                                sx={{
                                    fontSize: '30px',
                                    color: 'green',
                                    fontWeight: 'bold',
                                }}
                            />
                        }
                        title="98"
                        text="Confirm Order"
                        color="#BADDDA"
                    />
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <CommonCart
                        icon={
                            <AutoGraphIcon
                                sx={{
                                    fontSize: '30px',
                                    color: 'green',
                                    fontWeight: 'bold',
                                }}
                            />
                        }
                        title="40%"
                        text="Sell Rate"
                        color="#C4E7F8"
                    />
                </Link>
            </Box>
            <PieChart />
        </div>
    );
};

export default VendorDefault;
