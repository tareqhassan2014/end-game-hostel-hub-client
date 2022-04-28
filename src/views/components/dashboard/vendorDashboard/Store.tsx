import React from 'react';
import useAuth from 'src/hooks/useAuth';
import '../../../pages/PostAvailableSit/PostAvailableSit.scss';

const data = {
    storeName: 'Dhaka Hostel',
    address: 'Dhaka, Bangladesh',
    thumbnail: 'https://i.ibb.co/KjBG9Xf/hostel-removebg-preview.png',
    banner: 'https://cdn.wallpapersafari.com/94/37/08mXhk.jpg',
    vendor: 'Vendor',
    status: 'Pending',
};

const background = {
    background: `url(${data.banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '180px',
    width: '100%',
};

const Store = () => {
    const { store } = useAuth();
    console.log(store);

    return (
        <div className="store">
            <div className="profile">
                <div className="left" style={background}>
                    <img width="200px" src={data.thumbnail} alt="" />
                </div>
                <div className="right">
                    <h5>Store Name: {data.storeName}</h5>
                    <h5>Address: {data.address}</h5>
                    <h5>Role: {data.vendor}</h5>
                </div>
            </div>
        </div>
    );
};

export default Store;
