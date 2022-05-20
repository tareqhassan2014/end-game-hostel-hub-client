import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateHostelsAdsMutation } from 'src/app/api';
import Swal from 'sweetalert2';

type Inputs = {
    price: number;
    description: string;
    title: string;
    numberOfValency: number;
    phone: string;
};

const AdminSitManage = () => {
    const [createHostelsAds, { isLoading }] = useCreateHostelsAdsMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (hostelData) => {
        try {
            await createHostelsAds(hostelData).unwrap();

            Swal.fire(
                'success',
                'A add for your hostel successfully created!!'
            );

            reset();
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
                    Create a Ad Your Hostel
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        autoFocus
                        fullWidth
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
                        required
                        fullWidth
                        margin="normal"
                        error={Boolean(errors.phone)}
                        label={errors.phone ? 'Error' : 'Phone'}
                        helperText={errors.phone?.message}
                        {...register('phone')}
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
                        fullWidth
                        required
                        type="number"
                        margin="normal"
                        error={Boolean(errors.numberOfValency)}
                        label={
                            errors.numberOfValency
                                ? 'Error'
                                : 'number Of vacancy'
                        }
                        helperText={errors.numberOfValency?.message}
                        autoComplete="numberOfValency"
                        {...register('numberOfValency', {
                            required: 'numberOfValency is required',
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
                        Add for Hostel
                    </LoadingButton>
                </Box>
            </Box>
        </Container>
    );
};

export default AdminSitManage;
