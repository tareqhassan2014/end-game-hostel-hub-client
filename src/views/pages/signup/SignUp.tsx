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
import { useDispatch } from 'react-redux';
import { Link as DomLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCredentials } from 'src/app/slices/auth/authSlice';
import { useSignUpMutation } from '../../../app/api';
import google from '../../../assets/images/1534129544.svg';
import facebook from '../../../assets/images/facebook-svgrepo-com.svg';

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [signUp, { isLoading }] = useSignUpMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<SignUpRequest>();
    const password = watch('password');

    const onSubmit: SubmitHandler<SignUpRequest> = async (data) => {
        try {
            const { token, user } = await signUp({ ...data }).unwrap();

            reset();

            dispatch(setCredentials({ user, token }));

            navigate('/dashboard');
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
                    sx={{ mt: 1, width: '320px' }}
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

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.phone)}
                        label={errors.phone ? 'Error' : 'Phone'}
                        helperText={errors.phone?.message}
                        autoComplete="phone"
                        {...register('phone', {
                            required: 'phone is required',
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
                            error={Boolean(errors.passwordConfirm)}
                            label={
                                errors.passwordConfirm
                                    ? 'Error'
                                    : 'Confirm Password'
                            }
                            helperText={errors.passwordConfirm?.message || ' '}
                            autoComplete="current-password"
                            {...register('passwordConfirm', {
                                required: 'please confirm !',
                                validate: (value) =>
                                    value === password ||
                                    "password don't match",
                            })}
                        />
                    </Box>

                    <FormControlLabel
                        sx={{ mt: -2 }}
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
