import { Container, Paper } from '@mui/material';
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
    const { data } = useGetProductQuery(`/product?userId=${user._id}`);

    const [product, setProduct] = useState<AdProductRequest[] | undefined>();

    useEffect(() => {
        if (data) {
            setProduct(data.data.data);
        }
    }, [data]);

    return (
        <Container>
            {product &&
                product.map((product, index) => (
                    <Paper sx={{ p: 1, mb: 2 }} key={index}>
                        <p>{product.title}</p>
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                        <p>{product.phone}</p>
                    </Paper>
                ))}
        </Container>
    );
};

export default ManageProductAd;
