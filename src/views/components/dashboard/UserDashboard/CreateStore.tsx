import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateStoreMutation } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import AlertModal from './AlertModal';

type Inputs = {
    address: string;
    storeName: string;
};

export default function CreateStore() {
    const { user } = useAuth();
    const dispatch = useDispatch();
    //handle modal  start
    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    //handle modal end

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
            // {
            //     isSuccess && handleModalOpen();
            // }
            toast.success(
                'Store created successfully and your role upgraded to vendor'
            );
            // dispatch(logOut());
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
            <AlertModal
                openModal={openModal}
                handleModalClose={handleModalClose}
            />
        </Container>
    );
}
