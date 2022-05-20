import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import {
    Avatar,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import CustomModal from '../common/profile/CustomModal';
import { motion } from 'framer-motion';

const Profile = () => {
    const { user } = useAuth();
    console.log(user);
    //modal
    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%', transition: { duration: 0.4 } }}
            exit={{ x: window.innerWidth, transition: { duration: 0.05 } }}
        >
            <Container sx={{ my: 5 }}>
                <CssBaseline />
                <Grid container justifyContent="center">
                    <Grid
                        item
                        md={4}
                        sm={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            alt={user.name}
                            src={user.img}
                            sx={{ width: 150, height: 150 }}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                textTransform: 'capitalize',
                                borderRadius: 5,
                                mt: 3,
                                mb: 1,
                            }}
                        >
                            Connect to Linkedin
                        </Button>

                        <Button
                            onClick={handleModalOpen}
                            startIcon={<AutoFixHighIcon />}
                            sx={{ textTransform: 'capitalize' }}
                        >
                            Edit
                        </Button>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Typography variant="h4">My Profile</Typography>
                        <Grid container>
                            <Grid item md={6} xs={12} sx={{ pr: 3 }}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    value={user.name}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                {/* <TextField
                                    fullWidth
                                    id="standard-basic"
                                    label="Last Name"
                                    variant="standard"
                                    margin="normal"
                                    defaultValue={'Last Name'}
                                /> */}
                                <TextField
                                    id="standard-basic"
                                    label="Standard"
                                    variant="standard"
                                    value={'Last Name'}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ pr: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    margin="normal"
                                    defaultValue={'Address'}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    margin="normal"
                                    defaultValue={user.phone || 'Phone Number'}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            label="Email Address"
                            margin="normal"
                            defaultValue={user.email}
                        />

                        {/* <Grid container sx={{ my: 3 }}>
                            <Grid item md={6} xs={12} sx={{ pr: 2 }}>
                                <Paper onClick={handleModalOpen} sx={{ pt: 3 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'primary.main',
                                            height: 60,
                                            width: 60,
                                            mx: 'auto',
                                        }}
                                    >
                                        <MapsHomeWorkIcon />
                                    </Avatar>

                                    <Typography
                                        align="center"
                                        variant="h5"
                                        sx={{ py: 3 }}
                                    >
                                        Manage a Hostel
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ pl: 2 }}>
                                <Paper onClick={handleModalOpen} sx={{ pt: 3 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'primary.main',
                                            height: 60,
                                            width: 60,
                                            mx: 'auto',
                                        }}
                                    >
                                        <LocalGroceryStoreIcon />
                                    </Avatar>

                                    <Typography
                                        align="center"
                                        variant="h5"
                                        sx={{ py: 3 }}
                                    >
                                        Manage a Store
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Container>
            <CustomModal
                openModal={openModal}
                handleModalClose={handleModalClose}
                name={user.name}
                email={user.email}
                img={user.img}
                phone={user.phone}
            ></CustomModal>
        </motion.div>
    );
};

export default Profile;
