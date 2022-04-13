import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import {
    Avatar,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CustomModal from './CustomModal';

const Profile = () => {
    const { user } = useAuth();
    //modal
    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    console.log(handleModalClose);
    return (
        <>
            <Container sx={{ my: 5 }}>
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
                            startIcon={<AutoFixHighIcon />}
                            sx={{ textTransform: 'capitalize' }}
                        >
                            Edit
                        </Button>
                    </Grid>
                    <Grid item md={8} sm={12}>
                        <Typography variant="h3">My Profile</Typography>
                        <Grid container>
                            <Grid item md={6} xs={12} sx={{ pr: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    value={user.name}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    value={'Last Name'}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ pr: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Time Zone"
                                    margin="normal"
                                    value={'+6 GMT'}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    margin="normal"
                                    value={user.phone || '+880-000-111-333'}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            label="Email Address"
                            margin="normal"
                            value={user.email}
                        />

                        <Grid container sx={{ my: 3 }}>
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
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <CustomModal
                openModal={openModal}
                handleModalClose={handleModalClose}
            ></CustomModal>
        </>
    );
};

export default Profile;
