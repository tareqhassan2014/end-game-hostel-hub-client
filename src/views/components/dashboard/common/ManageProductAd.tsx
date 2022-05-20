import { Container, Grid, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetProductQuery } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import ProductCardDb from '../AdminDashboard/relative/ProductCard';

const ManageProductAd = () => {
    const { user } = useAuth();
    const { data, isLoading } = useGetProductQuery(
        `/products?user=${user._id}`
    );

    const [product, setProduct] = useState<IProduct[] | undefined>();

    useEffect(() => {
        if (data) {
            setProduct(data.data.data);
        }
    }, [data]);

    return (
        <Container>
            {isLoading && (
                <Grid container>
                    {[...new Array(12)].map((_, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={index}
                            sx={{ py: 2 }}
                        >
                            <Skeleton
                                sx={{ bgcolor: 'grey.500' }}
                                variant="rectangular"
                                width={210}
                                height={118}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}

            <Grid container>
                {product &&
                    product.map((product, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            key={index}
                            sx={{ py: 2 }}
                        >
                            <ProductCardDb product={product}></ProductCardDb>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default ManageProductAd;
