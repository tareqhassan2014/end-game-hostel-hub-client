import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    useGetGroceryQuery,
    useGetHostelsAdsQuery,
    useGetProductQuery,
} from 'src/app/api';
import { GroceryCard, HostelCard, ProductCard, RootContainer } from './Style';

const Discover = () => {
    const { data: products } = useGetProductQuery('/products');
    const { data: hostels, isLoading } = useGetHostelsAdsQuery('/hostelsAds');
    const { data: groceries } = useGetGroceryQuery('/grocery');

    const [Products, setProducts] = useState<IProduct[] | undefined>();
    const [Groceries, setGroceries] = useState<Grocery[] | undefined>();
    const [HostelsAds, setHostelsAds] = useState<HostelAd[] | undefined>();

    useEffect(() => {
        if (products) {
            setProducts(products?.data.data);
        } else if (groceries) {
            setGroceries(groceries?.data.data);
        } else if (hostels) {
            setHostelsAds(hostels?.data.data);
        }
    }, [groceries, hostels, products]);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%', transition: { duration: 0.4 } }}
            exit={{ x: window.innerWidth, transition: { duration: 0.05 } }}
        >
            <RootContainer
                title="Best hostel for You"
                destination="/search-hostel"
                isLoading={isLoading}
            >
                {HostelsAds &&
                    HostelsAds.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={3}>
                            <HostelCard item={item} />
                        </Grid>
                    ))}
            </RootContainer>
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
            <RootContainer
                title="Best Grocery for Your Hostel"
                destination="/search-grocery"
                isLoading={isLoading}
            >
                {Groceries &&
                    Groceries.map((grocery, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={3}>
                            <GroceryCard grocery={grocery} />
                        </Grid>
                    ))}
            </RootContainer>
        </motion.div>
    );
};

export default Discover;
