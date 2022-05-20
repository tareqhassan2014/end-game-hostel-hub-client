import { Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import logo from '../../../../../assets/images/logos/brandLogo.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #1E90FF',
    boxShadow: 24,
    p: 4,
};

interface Props {
    name: string;
    email: string;
    phone: string;
    img: string;
    openModal: boolean;
    handleModalClose: () => void;
}

const CustomModal = ({
    openModal,
    handleModalClose,
    name,
    email,
    phone,
    img,
}: Props) => {
    const handleClose = () => {
        handleModalClose();
    };

    //react hook call
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
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
                            sx={{ mb: 1 }}
                        >
                            <img width="75px" src={logo} alt="" />
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <span
                                style={{ fontSize: '12px', fontWeight: 'bold' }}
                            >
                                Name
                            </span>
                            <br />
                            <input
                                style={{
                                    height: '40px',
                                    width: '100%',
                                    marginBottom: '10px',
                                }}
                                {...register('name')}
                                defaultValue={name}
                            />

                            <span
                                style={{ fontSize: '12px', fontWeight: 'bold' }}
                            >
                                Email
                            </span>
                            <input
                                style={{
                                    height: '40px',
                                    width: '100%',
                                    marginBottom: '10px',
                                }}
                                {...register('email')}
                                defaultValue={email}
                            />
                            <span
                                style={{ fontSize: '12px', fontWeight: 'bold' }}
                            >
                                Phone
                            </span>
                            <input
                                style={{
                                    height: '40px',
                                    width: '100%',
                                    marginBottom: '16px',
                                }}
                                {...register('phone')}
                                defaultValue={phone ? phone : '017777777'}
                            />

                            <br />
                            <button
                                style={{
                                    padding: '8px 14px',
                                    color: 'white',
                                    backgroundColor: '#4556B7',
                                    border: 'none',
                                    borderRadius: '4px',
                                    marginRight: '5px',
                                }}
                                type="submit"
                            >
                                Update
                            </button>
                            {/* <button
                                onClick={handleClose}
                                style={{
                                    padding: '8px 14px',
                                    color: 'white',
                                    backgroundColor: '#c61f10',
                                    border: 'none',
                                    borderRadius: '4px',
                                }}
                                type="submit"
                            >
                                Cancel
                            </button> */}
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default CustomModal;
