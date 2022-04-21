import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
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
type Inputs = {
    email: string;
    location: string;
    password: string;
    phone: string;
    name: string;
    ConfirmPassword: string;
    hostelType: string;
};
const VendorSignup = () => {
    const [show, setShow] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<Inputs>();
    const password = watch('password');

    const onSubmit: SubmitHandler<Inputs> = (forData) => {
        console.log(forData);
    };

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />

            <Grid container spacing={2}>
                <Grid item display={{ xs: 'none', md: 'block' }} md={7} lg={8}>
                    <Box
                        component="img"
                        style={{ width: '100%' }}
                        sx={{
                            marginTop: 20,
                        }}
                        alt="The house from the offer."
                        src="https://i.ibb.co/HXKQyJy/shop2.jpg"
                    />
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <ShoppingBagOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Creatre Shop
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
                                label={errors.name ? 'Error' : 'Shop Name'}
                                helperText={errors.name?.message}
                                {...register('name', {
                                    required: 'Shop name is required',
                                })}
                            />
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                autoComplete="location"
                                margin="normal"
                                error={Boolean(errors.name)}
                                label={
                                    errors.location ? 'Error' : 'Shop location'
                                }
                                helperText={errors.location?.message}
                                {...register('location', {
                                    required: 'Shop location is required',
                                })}
                            />
                            <TextField
                                fullWidth
                                required
                                margin="normal"
                                error={Boolean(errors.phone)}
                                label={errors.phone ? 'Error' : 'Phone Number'}
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
                                    fullWidth
                                    required
                                    margin="normal"
                                    type={show ? 'text' : 'password'}
                                    error={Boolean(errors.password)}
                                    label={
                                        errors.password ? 'Error' : 'Password'
                                    }
                                    helperText={errors.password?.message}
                                    autoComplete="current-password"
                                    {...register('password', {
                                        required: 'password is required',
                                    })}
                                />

                                <TextField
                                    fullWidth
                                    required
                                    margin="normal"
                                    type={show ? 'text' : 'password'}
                                    error={Boolean(errors.ConfirmPassword)}
                                    label={
                                        errors.ConfirmPassword
                                            ? 'Error'
                                            : 'Confirm Password'
                                    }
                                    helperText={errors.ConfirmPassword?.message}
                                    autoComplete="current-password"
                                    {...register('ConfirmPassword', {
                                        required: 'Confirm your password!',
                                        validate: (value) =>
                                            value === password ||
                                            "password don't match",
                                    })}
                                />
                            </Box>

                            <FormControlLabel
                                sx={{
                                    display: 'flex',
                                }}
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Show password"
                                onClick={() => setShow(!show)}
                            />

                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
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
                                    <DomLink to="/login">
                                        Already Have a Hostel? login
                                    </DomLink>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default VendorSignup;
