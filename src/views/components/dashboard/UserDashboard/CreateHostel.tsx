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
import { useCreateHostelMutation } from 'src/app/api';
import { logOut } from 'src/app/slices/auth/authSlice';
import { useAppDispatch } from 'src/hooks/hooks';
import useAuth from 'src/hooks/useAuth';
import Swal from 'sweetalert2';

type Inputs = {
    name: string;
    email: string;
    address: string;
    city: string;
    phone: string;
    totalSit: number;
    banner: File;
    thumbnail: File;
};

const Input = styled('input')({
    display: 'none',
});

export default function CreateHostel() {
    const { user } = useAuth();
    const dispatch = useAppDispatch();

    const [createHostel, { isLoading }] = useCreateHostelMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await createHostel({ ...data }).unwrap();

            Swal.fire(
                'Hostel Created successfully!!',
                'you will be logout automatically and you can enjoy admin dashboard ',
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
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Hostel Name'}
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
                        defaultValue={user?.phone}
                        error={Boolean(errors.phone)}
                        label={errors.phone ? 'Error' : 'phone'}
                        helperText={errors.phone?.message}
                        autoComplete="phone"
                        {...register('phone', {
                            required: 'phone is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.city)}
                        label={errors.city ? 'Error' : 'city'}
                        helperText={errors.city?.message}
                        autoComplete="city"
                        {...register('city', {
                            required: 'city is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        defaultValue={user?.email}
                        error={Boolean(errors.email)}
                        label={errors.email ? 'Error' : 'email'}
                        helperText={errors.email?.message}
                        autoComplete="email"
                        {...register('email')}
                    />

                    <TextField
                        fullWidth
                        required
                        type="number"
                        margin="normal"
                        error={Boolean(errors.totalSit)}
                        label={errors.totalSit ? 'Error' : 'Total Sit'}
                        helperText={errors.totalSit?.message}
                        autoComplete="totalSit"
                        {...register('totalSit', {
                            required: 'totalSit is required',
                            valueAsNumber: true,
                        })}
                    />

                    <label htmlFor="contained-button-banner">
                        <Input
                            accept="image/*"
                            id="contained-button-banner"
                            type="file"
                        />
                        <Button
                            fullWidth
                            sx={{ my: 1 }}
                            variant="contained"
                            component="span"
                            startIcon={<CloudUploadIcon />}
                        >
                            Banner
                        </Button>
                    </label>

                    <label htmlFor="contained-button-thumbnail">
                        <Input
                            accept="image/*"
                            id="contained-button-thumbnail"
                            type="file"
                        />
                        <Button
                            fullWidth
                            sx={{ my: 1 }}
                            variant="contained"
                            component="span"
                            startIcon={<CloudUploadIcon />}
                        >
                            Thumbnail
                        </Button>
                    </label>

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
