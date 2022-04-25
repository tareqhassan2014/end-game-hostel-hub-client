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
import { useSignUpMutation } from '../../../app/api';
import google from '../../../assets/images/1534129544.svg';
import facebook from '../../../assets/images/facebook-svgrepo-com.svg';
import useFirebase from '../../../hooks/firebase/useFirebase';

type Inputs = {
    email: string;
    password: string;
    name: string;
    ConfirmPassword: string;
};

export default function SignUp() {
    const [show, setShow] = useState(false);
    const { firebaseGoogle, firebaseFacebook, RegisterUser } = useFirebase();
    const [_, { isLoading }] = useSignUpMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<Inputs>();
    const password = watch('password');

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            RegisterUser(data.name, data.email, data.password);
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
                    marginBottom: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
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
                        autoComplete="name"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Name'}
                        helperText={errors.name?.message}
                        {...register('name', {
                            required: 'Name is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.email)}
                        label={errors.email ? 'Error' : 'Email Address'}
                        helperText={errors.email?.message}
                        autoComplete="email"
                        {...register('email', {
                            required: 'Email is required',
                        })}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :nth-child(1)': { mr: 2 },
                        }}
                    >
                        <TextField
                            required
                            margin="normal"
                            type={show ? 'text' : 'password'}
                            error={Boolean(errors.password)}
                            label={errors.password ? 'Error' : 'Password'}
                            helperText={errors.password?.message || ' '}
                            autoComplete="current-password"
                            {...register('password', {
                                required: 'password is required',
                            })}
                        />

                        <TextField
                            required
                            margin="normal"
                            type={show ? 'text' : 'password'}
                            error={Boolean(errors.ConfirmPassword)}
                            label={
                                errors.ConfirmPassword
                                    ? 'Error'
                                    : 'Confirm Password'
                            }
                            helperText={errors.ConfirmPassword?.message || ' '}
                            autoComplete="current-password"
                            {...register('ConfirmPassword', {
                                required: 'please confirm !',
                                validate: (value) =>
                                    value === password ||
                                    "password don't match",
                            })}
                        />
                    </Box>

                    <FormControlLabel
                        sx={{ mt: 0 }}
                        control={<Checkbox value="remember" color="primary" />}
                        label="Show password"
                        onClick={() => setShow(!show)}
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 1 }}
                        loading={isLoading}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {/* Forgot password? */}
                            </Link>
                        </Grid>
                        <Grid item>
                            <DomLink
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                }}
                                to="/login"
                            >
                                Already Have a Account? login
                            </DomLink>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid md={6}>
                            <button
                                style={{
                                    margin: '5px auto',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: '3px',
                                    width: '100px',
                                    height: '30px',
                                    cursor: 'pointer',
                                    outline: 'none',
                                    border: '1px solid lightgray',
                                }}
                                onClick={firebaseGoogle}
                            >
                                <img width="20px" src={google} alt="" />
                                <span
                                    style={{
                                        fontSize: '10px',
                                        marginRight: '10px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Google
                                </span>
                            </button>{' '}
                        </Grid>
                        <Grid md={6}>
                            <button
                                style={{
                                    margin: '0 auto',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: '3px',
                                    width: '100px',
                                    height: '30px',
                                    cursor: 'pointer',
                                    outline: 'none',
                                    border: '1px solid lightgray',
                                }}
                                onClick={firebaseFacebook}
                            >
                                <img width="20px" src={facebook} alt="" />
                                <span
                                    style={{
                                        fontSize: '10px',
                                        marginRight: '10px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Facebook
                                </span>
                            </button>{' '}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
