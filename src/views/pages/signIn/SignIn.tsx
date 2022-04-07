import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as DomLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../../../app/api';
import useFirebase from '../../../hooks/firebase/useFirebase';

type Inputs = {
    email: string;
    password: string;
};

export default function SignIn() {
    const [show, setShow] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();
    const { firebaseGoogle, firebaseFacebook, SignInFirebase } = useFirebase();
    const [signIn, { isLoading }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        try {
            SignInFirebase(email, password);
            reset();
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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        required
                        fullWidth
                        autoFocus
                        margin="normal"
                        autoComplete="email"
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        label={errors.email ? 'Error' : 'Email Address'}
                        {...register('email', {
                            required: 'Email is required',
                        })}
                    />
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        autoComplete="current-password"
                        error={Boolean(errors.password)}
                        type={show ? 'text' : 'password'}
                        label={errors.password ? 'Error' : 'Password'}
                        helperText={errors.password?.message}
                        {...register('password', {
                            required: 'password is required',
                        })}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Show password"
                        onClick={() => setShow(!show)}
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={isLoading}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <DomLink to="/signup">New here? Sign UP</DomLink>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item>
                            <Button onClick={firebaseGoogle}>Google</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={firebaseFacebook}>Facebook</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
