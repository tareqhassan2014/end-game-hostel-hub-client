import { TextField, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';

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
    openModal: boolean;
    handleModalClose: () => void;
}

const CustomModal = ({ openModal, handleModalClose }: Props) => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    const handleClose = () => {
        handleModalClose();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
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
                            <button onClick={handleClose} type="submit">
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
