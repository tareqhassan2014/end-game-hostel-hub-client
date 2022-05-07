import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Avatar,
    Box,
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
import { Link as DomLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import google from '../../../assets/images/1534129544.svg';
import facebook from '../../../assets/images/facebook-svgrepo-com.svg';
import useFirebase from '../../../hooks/firebase/useFirebase';

type Inputs = {
    email: string;
    password: string;
};

export default function SignIn() {
    const [show, setShow] = useState(false);

    const { firebaseGoogle, firebaseFacebook, SignInFirebase } = useFirebase();

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
                    marginTop: 5,
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography
                    component="h1"
                    sx={{ fontWeight: 'bold' }}
                    variant="h5"
                >
                    Sign In
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 0, width: '310px' }}
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
                        sx={{ mt: 1, mb: 1 }}
                        loading={false}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                }}
                                href="#"
                                variant="body2"
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <DomLink
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                }}
                                to="/signup"
                            >
                                New here? Sign UP
                            </DomLink>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Box
                            sx={{
                                width: '310px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '20px',
                            }}
                        >
                            <button
                                style={{
                                    margin: '5px auto',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: '3px',
                                    width: '140px',
                                    height: '30px',
                                    cursor: 'pointer',
                                    outline: 'none',
                                    border: 'none',
                                }}
                                onClick={firebaseGoogle}
                            >
                                <img width="20px" src={google} alt="" />
                                <span
                                    style={{
                                        fontSize: '13px',
                                        marginRight: '30px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Google
                                </span>
                            </button>
                            <button
                                style={{
                                    margin: '5px auto',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: '3px',
                                    width: '140px',
                                    height: '30px',
                                    cursor: 'pointer',
                                    outline: 'none',
                                    border: 'none',
                                }}
                                onClick={firebaseFacebook}
                            >
                                <img width="20px" src={facebook} alt="" />
                                <span
                                    style={{
                                        fontSize: '13px',
                                        marginRight: '30px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Facebook
                                </span>
                            </button>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
