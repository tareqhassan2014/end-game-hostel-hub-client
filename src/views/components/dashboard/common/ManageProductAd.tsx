import { Container, Grid, Paper, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetProductQuery } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';

interface AdProductRequest {
    price: number;
    phone: string;
    userId: string;
    title: string;
    category: string;
}

const ManageProductAd = () => {
    const { user } = useAuth();
    const { data, isLoading } = useGetProductQuery(
        `/product?userId=${user._id}`
    );

    const [product, setProduct] = useState<AdProductRequest[] | undefined>();

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
                            sm={6}
                            md={4}
                            lg={3}
                            key={index}
                            sx={{ py: 2 }}
                        >
                            <Paper sx={{ p: 1, m: 1 }} key={index}>
                                <p>{product.title}</p>
                                <p>{product.category}</p>
                                <p>{product.price}</p>
                                <p>{product.phone}</p>
                            </Paper>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default ManageProductAd;
