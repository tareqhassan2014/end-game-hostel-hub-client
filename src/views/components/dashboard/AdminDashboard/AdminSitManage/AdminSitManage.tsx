import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddForHostelMutation } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import Swal from 'sweetalert2';

type Inputs = {
    price: number;
    phone: string;
    details: string;
    numberOfVacancy: number;
};

const AdminSitManage = () => {
    const { hostel } = useAuth();

    const [addForHostel, { isLoading }] = useAddForHostelMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (hostelData) => {
        try {
            await addForHostel({ ...hostelData, hostel: hostel._id }).unwrap();

            Swal.fire(
                'success',
                'A add for your hostel successfully created!!'
            );
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
                    Create a Add Your Hostel
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
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.details)}
                        label={errors.details ? 'Error' : 'details'}
                        helperText={errors.details?.message}
                        autoComplete="details"
                        {...register('details', {
                            required: 'details is required',
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
                        fullWidth
                        required
                        type="number"
                        margin="normal"
                        error={Boolean(errors.numberOfVacancy)}
                        label={
                            errors.numberOfVacancy
                                ? 'Error'
                                : 'number Of vacancy'
                        }
                        helperText={errors.numberOfVacancy?.message}
                        autoComplete="numberOfVacancy"
                        {...register('numberOfVacancy', {
                            required: 'numberOfVacancy is required',
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
