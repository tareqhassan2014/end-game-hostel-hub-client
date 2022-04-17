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

const Cart = ({ img, title, price, rating, location, gender }: Props) => {
    return (
        <div className="custom_cart">
            <div className="container">
                <div className="card">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <img src={img} alt="" />
                        <h2>1</h2>
                        <h3>{title}</h3>
                        <p>Price: ${price}</p>
                        <p>{location}</p>
                        <p>{gender}</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
