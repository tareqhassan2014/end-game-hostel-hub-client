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
import { toast } from 'react-toastify';
import { useCreateHostelMutation } from 'src/app/api';
import { logOut } from 'src/app/slices/auth/authSlice';
import { useAppDispatch } from 'src/hooks/hooks';
import useAuth from 'src/hooks/useAuth';

type Inputs = {
    address: string;
    hostelName: string;
    totalSit: number;
};

export default function CreateHostel() {
    const { user } = useAuth();
    const dispatch = useAppDispatch();

    const [createHostel, { isLoading, data, isSuccess, isError }] =
        useCreateHostelMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        try {
            const url = `auth/${user._id}/hostel`;
            const hostelData = { ...formData, url };
            await createHostel(hostelData).unwrap();

            dispatch(logOut());

            toast.success(
                'Hostel Created successfully!!, you will be logout automatically and you will enjoy a admin dashboard '
            );
        } catch (error: any) {
            toast.error(error?.data?.message);
            console.log(error?.data?.message);
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
                    Create Your Hostel
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
                        error={Boolean(errors.hostelName)}
                        label={errors.hostelName ? 'Error' : 'Store Name'}
                        helperText={errors.hostelName?.message}
                        {...register('hostelName', {
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
                        type="number"
                        margin="normal"
                        error={Boolean(errors.totalSit)}
                        label={errors.totalSit ? 'Error' : 'totalSit'}
                        helperText={errors.totalSit?.message}
                        autoComplete="totalSit"
                        {...register('totalSit', {
                            required: 'totalSit is required',
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
                        Create Hostel
                    </LoadingButton>
                </Box>
            </Box>
        </Container>
    );
}
