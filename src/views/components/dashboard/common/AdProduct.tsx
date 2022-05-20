import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAdProductMutation } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import Swal from 'sweetalert2';

const Input = styled('input')({
    display: 'none',
});

const AdProduct = () => {
    const { user } = useAuth();
    const [AdProduct, { isLoading }] = useAdProductMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AdProductRequest>();

    const onSubmit: SubmitHandler<AdProductRequest> = async (data) => {
        console.log(data);
        try {
            if (user) {
                await AdProduct({ ...data }).unwrap();

                Swal.fire('success', 'product posted successfully!!');
            }
        } catch (error: any) {
            Swal.fire({
                showConfirmButton: false,
                icon: 'error',
                title: 'Oops...',
                text: `${error?.data?.message || 'Please try again letter'}`,
            });
            console.log(error);
        }
    };

    const inputFields = (
        <>
            <TextField
                fullWidth
                autoFocus
                required
                margin="normal"
                error={Boolean(errors.title)}
                label={errors.title ? 'Error' : 'Title'}
                helperText={errors.title?.message}
                autoComplete="title"
                {...register('title', {
                    required: 'title is required',
                })}
            />

            <TextField
                required
                fullWidth
                margin="normal"
                error={Boolean(errors.category)}
                label={errors.category ? 'Error' : 'category'}
                helperText={errors.category?.message}
                {...register('category', {
                    required: 'category is required',
                })}
            />

            <TextField
                required
                fullWidth
                margin="normal"
                error={Boolean(errors.description)}
                label={errors.description ? 'Error' : 'description'}
                helperText={errors.description?.message}
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

            <TextField
                required
                fullWidth
                margin="normal"
                error={Boolean(errors.phone)}
                label={errors.phone ? 'Error' : 'Phone'}
                helperText={errors.phone?.message}
                {...register('phone', {
                    required: 'Phone is required',
                })}
            />

            <label htmlFor="contained-button-file">
                <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <Button
                    variant="contained"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
            </label>
        </>
    );

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
                    Add A Product
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    {inputFields}

                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={isLoading}
                    >
                        Add product
                    </LoadingButton>
                </Box>
            </Box>
        </Container>
    );
};

export default AdProduct;
