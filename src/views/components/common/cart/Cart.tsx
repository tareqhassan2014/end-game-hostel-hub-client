import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './cart.scss';

interface Props {
    img: string;
    title: string;
    price: number;
    location: string;
    gender: string;
    rating: number;
}

const Cart = () => {
    // const Cart = ({ img='', title='title', price=200, rating=4, location='location', gender='gender' }: Props) => {
    return (
        <Box className="custom_cart">
            <Box className="container">
                <Box className="card">
                    <Typography component="span"></Typography>
                    <Typography component="span"></Typography>
                    <Typography component="span"></Typography>
                    <Typography component="span"></Typography>
                    <Box className="content">
                        <Box component="img" src="" alt="" />
                        <Typography variant="h2">1</Typography>
                        <Typography variant="h3">title</Typography>
                        <Typography variant="subtitle1">Price: $</Typography>
                        <Typography variant="subtitle1">location</Typography>
                        <Typography variant="subtitle1">gender</Typography>
                        <Link to="/cart">Read More</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Cart;
