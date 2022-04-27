import { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://immense-harbor-60117.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);
    return (
        <div>
            {products.map((product) => (
                <ManageProduct key={product._id} product={product} />
            ))}
        </div>
    );
};

export default useProducts;
