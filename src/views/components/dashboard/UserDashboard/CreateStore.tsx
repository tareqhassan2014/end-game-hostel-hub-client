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
import { useCreateStoreMutation } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';

type Inputs = {
    address: string;
    storeName: string;
};

export default function CreateStore() {
    const { user } = useAuth();

    const [createStore, { isLoading, data, isSuccess, isError }] =
        useCreateStoreMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        const url = `auth/${user._id}/store`;

        const storeData = { ...formData, url };

        try {
            const data = await createStore(storeData).unwrap();
            console.log('====================================');
            console.log(data);
            console.log('====================================');

            reset();
            toast.success('Account Store successfully');
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
                        error={Boolean(errors.storeName)}
                        label={errors.storeName ? 'Error' : 'Store Name'}
                        helperText={errors.storeName?.message}
                        {...register('storeName', {
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
