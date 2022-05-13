import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../../../../assets/images/logos/brandLogo.png';

interface Props {
    open: boolean;
    handleClose: any;
    product: any;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function EditModal({ open, handleClose, product }: Props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    console.log(product);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ mb: 1 }}
                    >
                        <img width="75px" src={logo} alt="" />
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
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
                            defaultValue={product.title}
                        />

                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            Email
                        </span>
                        <input
                            style={{
                                height: '40px',
                                width: '100%',
                                marginBottom: '10px',
                            }}
                            {...register('email')}
                            defaultValue={product?.userId?.email}
                        />
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            Price
                        </span>
                        <input
                            style={{
                                height: '40px',
                                width: '100%',
                                marginBottom: '10px',
                            }}
                            {...register('price')}
                            defaultValue={product?.price}
                        />
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            Phone
                        </span>
                        <input
                            style={{
                                height: '40px',
                                width: '100%',
                                marginBottom: '16px',
                            }}
                            {...register('phone')}
                            defaultValue={product?.phone}
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
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
