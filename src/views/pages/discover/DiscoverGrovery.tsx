import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetGroceryQuery } from 'src/app/api';
import { GroceryCard, RootContainer } from './Style';

const DiscoverGrovery = () => {
    const { data: groceries, isLoading } = useGetGroceryQuery('/grocery');
    const [Groceries, setGroceries] = useState<Grocery[] | undefined>();

    useEffect(() => {
        if (groceries) {
            setGroceries(groceries?.data.data);
        }
    }, [groceries]);

    return (
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
    );
};

export default DiscoverGrovery;
