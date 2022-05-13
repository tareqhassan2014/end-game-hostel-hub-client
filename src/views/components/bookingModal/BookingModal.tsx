import SearchIcon from '@mui/icons-material/Search';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import './BookingModal.css';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    border: '10px solid #ffffff27',
    borderRadius: '15px',
    boxShadow: '0 5px 50px rgba(0, 0, 0, 0.15);',
    p: 2,
};

export default function BookingModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <div style={{ height: '300px', marginTop: '50px' }}>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <button
                            onClick={handleClose}
                            className="bookingModalBtn"
                        >
                            X
                        </button>
                        <Typography
                            sx={{
                                mb: 3,
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                            id="transition-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            Search your Room
                        </Typography>
                        <form
                            className="bookingModal"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                {...register('location')}
                                placeholder="Location"
                            />
                            <input
                                {...register('location')}
                                placeholder="Location"
                            />
                            <input
                                {...register('location')}
                                placeholder="Location"
                            />

                            <div style={{ display: 'flex' }}>
                                <select
                                    style={{ marginRight: '5px' }}
                                    {...register('bedType')}
                                >
                                    <option value="">Room</option>
                                    <option value="ac">AC</option>
                                    <option value="normal">Normal</option>
                                </select>
                                <select {...register('gender')}>
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <select
                                    style={{ marginRight: '5px' }}
                                    {...register('bedType')}
                                >
                                    <option value="">Bed Type</option>
                                    <option value="single">Single</option>
                                    <option value="double">Double</option>
                                </select>
                                <select {...register('gender')}>
                                    <option value="">Price Range</option>
                                    <option value="5000- 10000">
                                        $ 5000- 10000
                                    </option>
                                    <option value="10000-15000">
                                        $ 10000-15000
                                    </option>
                                    <option value="15000-20000">
                                        $ 15000-20000
                                    </option>
                                    <option value="20000-25000">
                                        $ 20000-25000
                                    </option>
                                </select>
                            </div>

                            <div className="searchButton">
                                <SearchIcon sx={{ color: 'white' }} />
                                <button type="submit">Search</button>
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
