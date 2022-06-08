import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetProductQuery } from 'src/app/api';
import { ProductCard, RootContainer } from './Style';

const DiscoverProduct = () => {
    const { data: products, isLoading } = useGetProductQuery('/products');
    const [Products, setProducts] = useState<IProduct[] | undefined>();

    useEffect(() => {
        if (products) {
            setProducts(products?.data.data);
        }
    }, [products]);

    return (
        <RootContainer
            title="Best Products for You"
            destination="/search-old-items"
            isLoading={isLoading}
        >
            {Products &&
                Products.map((product, index) => (
                    <Grid key={index} item xs={12} sm={6} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
        </RootContainer>
    );
};

export default DiscoverProduct;
