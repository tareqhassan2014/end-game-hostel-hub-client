import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from 'src/hooks/useAuth';

type Inputs = {
    price: number;
    name: string;
    category: string;
};

export default function CreateHostel() {
    const { user } = useAuth();

    // const [addProduct, { isLoading, data, isSuccess, isError }] =
    // useAddProductMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        try {
            const url = `store/${user._id}/product`;

            const productData = { ...formData, url };

            // const data = await addProduct(productData).unwrap();

            reset();
            toast.success('Product added successfully');
        } catch (error: any) {
            console.log(error?.data?.message);
            toast.error(error?.data?.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Add Product
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Product Name'}
                        helperText={errors.name?.message}
                        {...register('name', {
                            required: 'Name is required',
                        })}
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.category)}
                        label={errors.category ? 'Error' : 'category'}
                        helperText={errors.category?.message}
                        autoComplete="category"
                        {...register('category', {
                            required: 'category is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        required
                        type="number"
                        margin="normal"
                        error={Boolean(errors.price)}
                        label={errors.price ? 'Error' : 'price'}
                        helperText={errors.price?.message}
                        autoComplete="price"
                        {...register('price', {
                            required: 'price is required',
                            valueAsNumber: true,
                        })}
                    />

                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={false}
                    >
                        Add Product
                    </LoadingButton>
                </Box>
            </Box>
        </Container>
    );
}
