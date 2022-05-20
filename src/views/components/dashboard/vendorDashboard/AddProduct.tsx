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
import { useAddGroceryMutation } from 'src/app/api';

export default function CreateHostel() {
    const [AddGrocery, { isLoading }] = useAddGroceryMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<addGroceryRequest>();

    const onSubmit: SubmitHandler<addGroceryRequest> = async (data) => {
        try {
            await AddGrocery({ ...data }).unwrap();

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
                        error={Boolean(errors.title)}
                        label={errors.title ? 'Error' : 'Product title'}
                        helperText={errors.title?.message}
                        {...register('title', {
                            required: 'title is required',
                        })}
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.description)}
                        label={errors.description ? 'Error' : 'description'}
                        helperText={errors.description?.message}
                        autoComplete="description"
                        {...register('description', {
                            required: 'description is required',
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
                        loading={isLoading}
                    >
                        Add Product
                    </LoadingButton>
                </Box>
            </Box>
        </Container>
    );
}
