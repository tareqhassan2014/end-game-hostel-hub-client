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
    const { store, user } = useAuth();
    console.log(user);
    return (
        <div className="store">
            <div className="profile">
                <div
                    className="left"
                    style={{
                        background: `url(${store.banner})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        height: '180px',
                        width: '100%',
                    }}
                >
                    <img width="200px" src={store.thumbnail} alt="" />
                </div>
                <div className="right">
                    <h6>Email: {user.email}</h6>
                    <h5>Name: {user.name}</h5>

                    <h5>Store Name: {store.storeName}</h5>
                    <h5>Address: {store.address}</h5>
                    <h5>Status: {store.status}</h5>
                    {/* <h5>Role: {store}</h5> */}
                </div>
            </div>
        </div>
    );
};

export default Store;
