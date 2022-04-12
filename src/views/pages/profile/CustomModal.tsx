import { TextField, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface Props {
    openBooking: boolean;
    handleBookingClose: () => void;
}

const CustomModal = ({ openBooking, handleBookingClose }: Props) => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    const handleModalClose = () => {
        handleBookingClose();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Hostel Hub
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: '100%', mb: '10px' }}
                                id="outlined-basic"
                                label="Your Name"
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '100%', mb: '10px' }}
                                id="outlined-basic"
                                label="Your Name"
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '100%', mb: '10px' }}
                                id="outlined-basic"
                                label="Your Name"
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '100%', mb: '10px' }}
                                id="outlined-basic"
                                label="Your Name"
                                variant="outlined"
                            />
                            <button type="submit">Submit</button>
                            <button onClick={handleModalClose} type="submit">
                                Close
                            </button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default CustomModal;
