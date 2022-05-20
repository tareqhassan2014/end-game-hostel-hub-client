import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useCreateStoreMutation } from 'src/app/api';
import { logOut } from 'src/app/slices/auth/authSlice';
import Swal from 'sweetalert2';

export default function CreateStore() {
    const dispatch = useDispatch();

    const [createStore, { isLoading }] = useCreateStoreMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CreateStoreRequest>();

    const onSubmit: SubmitHandler<CreateStoreRequest> = async (data) => {
        try {
            await createStore({ ...data }).unwrap();

            reset();

            Swal.fire(
                'Store Created successfully!!',
                'you will be logout automatically and you can enjoy vendor dashboard ',
                'success'
            );

            dispatch(logOut());
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
                    Create Your Store
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
                        label={errors.name ? 'Error' : 'Store Name'}
                        helperText={errors.name?.message}
                        {...register('name', {
                            required: 'Store Name is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.address)}
                        label={errors.address ? 'Error' : 'Address'}
                        helperText={errors.address?.message}
                        autoComplete="address"
                        {...register('address', {
                            required: 'Address is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.phone)}
                        label={errors.phone ? 'Error' : 'phone'}
                        helperText={errors.phone?.message}
                        autoComplete="phone"
                        {...register('phone', {
                            required: 'phone is required',
                        })}
                    />

                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={isLoading}
                    >
                        Create Store
                    </LoadingButton>
                </Box>
            </Box>
        </Container>
    );
}
