import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddIcon from '@mui/icons-material/Add';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    IconButton,
    Input,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAdProductMutation } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import Swal from 'sweetalert2';

type Inputs = {
    price: number;
    phone: string;
    title: string;
    category: string;
    picture: string;
};

const AdProduct = () => {
    const { user } = useAuth();
    const [AdProduct, { isLoading }] = useAdProductMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
        try {
            if (user) {
                await AdProduct({ ...data, userId: user._id || '' }).unwrap();

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
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        margin="normal"
                        error={Boolean(errors.phone)}
                        label={errors.phone ? 'Error' : 'Phone'}
                        helperText={errors.phone?.message}
                        {...register('phone', {
                            required: 'Phone is required',
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
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.title)}
                        label={errors.title ? 'Error' : 'title'}
                        helperText={errors.title?.message}
                        autoComplete="title"
                        {...register('title', {
                            required: 'title is required',
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
                    <Button variant="contained" component="label">
                        <AddIcon />
                        Attach Image
                        <input
                            type="file"
                            required
                            autoComplete="picture"
                            {...register('picture', {
                                required: 'picture is required',
                            })}
                            hidden
                        />
                    </Button>

                    {/* <TextField
                        fullWidth
                        type="file"
                        required
                        margin="normal"
                        error={Boolean(errors.picture)}
                        autoComplete="picture"
                        {...register('picture', {
                            required: 'picture is required',
                        })}
                    /> */}

                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={isLoading}
                    >
                        Post product
                    </LoadingButton>
                </Box>
            </Box>
        </Container>
    );
};

export default AdProduct;
