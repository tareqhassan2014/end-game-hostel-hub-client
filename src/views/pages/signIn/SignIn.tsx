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
import { useDispatch } from 'react-redux';
import { Link as DomLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../../../app/api';
import { setCredentials } from '../../../app/reducers/auth/authSlice';
import useFirebase from '../../../hooks/firebase/useFirebase';

type Inputs = {
    email: string;
    password: string;
};

export default function SignIn() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const { state } = useLocation();
    const navigate = useNavigate();
    const { firebaseGoogle, firebaseFacebook } = useFirebase();
    const [signIn, { isLoading }] = useLoginMutation();

    const handleGoogleLogin = async () => {
        try {
            const FirebaseUser = await firebaseGoogle();

            if (FirebaseUser) {
                dispatch(
                    setCredentials({
                        user: {
                            name: '',
                            email: '',
                            status: '',
                            role: '',
                            _id: '',
                            img: '',
                            phone: '',
                        },
                        token: FirebaseUser.token,
                    })
                );

                const { user } = await signIn(FirebaseUser).unwrap();

                dispatch(
                    setCredentials({
                        user,
                        token: FirebaseUser.token,
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handelFacebookLogin = async () => {
        try {
            const FirebaseUser = await firebaseFacebook();

            if (FirebaseUser) {
                dispatch(
                    setCredentials({
                        user: {
                            name: '',
                            email: '',
                            status: '',
                            role: '',
                            _id: '',
                            img: '',
                            phone: '',
                        },
                        token: FirebaseUser.token,
                    })
                );

                const { user } = await signIn(FirebaseUser).unwrap();

                dispatch(
                    setCredentials({
                        user,
                        token: FirebaseUser.token,
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (forData) => {
        try {
            // const {
            //     data: { token, ...user },
            // } = await login(forData).unwrap();
            // dispatch(setCredentials({ user, token }));
            reset();
            navigate(state as string);
            toast.success('successfully login');
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
                            <Button onClick={handleGoogleLogin}>Google</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={handelFacebookLogin}>
                                Facebook
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
