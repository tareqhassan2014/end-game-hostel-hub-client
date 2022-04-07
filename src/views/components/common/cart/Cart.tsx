import React from 'react';
import { Link } from 'react-router-dom';
import './cart.scss';

const Cart = () => {
    return (
        <div className="custom_cart">
            <div className="container">
                <div className="card">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <img
                            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <h2>1</h2>
                        <h3>Hostel Hub</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quia, deserunt?
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <img
                            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <h2>02</h2>
                        <h3>Hostel Hub</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quia, deserunt?
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <img
                            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <h2>03</h2>
                        <h3>Hostel Hub</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quia, deserunt?
                        </p>
                        <Link to="/">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
