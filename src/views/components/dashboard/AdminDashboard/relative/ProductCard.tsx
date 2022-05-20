import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import './dashboard.css';
import EditModal from './EditModal';

interface Props {
    product: any;
}

export default function ProductCardDb({ product }: Props) {
    const [open, setOpen] = useState(false);
    console.log(product);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card
            variant="outlined"
            className="cardDb"
            sx={{
                m: 1,
                display: 'flex',
                p: 1,
                flexDirection: {
                    xs: 'column', // mobile
                    sm: 'row', // tablet and up
                },
            }}
        >
            <CardMedia
                component="img"
                width="100"
                height="100"
                alt="123 Main St, Phoenix, AZ cover"
                src="https://api.mzadqatar.com/uploads/thumbnail/2021/02/02/12954618-8e4e733f50.png"
                sx={{
                    borderRadius: 1,
                    width: { xs: '90%', sm: 100 },
                    mr: { sm: 1.5 },
                    mt: { sm: 1 },
                    ml: { sm: 0, md: 0.5 },
                    mb: { xs: 1.5, sm: 0, md: 0 },
                }}
            />
            <Box sx={{ alignSelf: 'center', ml: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    {product.title}
                </Typography>
                <Typography component="div" fontWeight="bold">
                    ${product.price}k
                </Typography>
                <Box
                    sx={{
                        ml: -1,
                        mt: 0.75,
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        display: 'flex',
                        typography: 'caption',
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark'
                                ? 'primary.900'
                                : 'primary.50',
                        color: (theme) =>
                            theme.palette.mode === 'dark'
                                ? '#fff'
                                : 'primary.700',
                    }}
                >
                    {product.category}
                </Box>
                <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
                    <Button
                        id="deleteButton"
                        variant="outlined"
                        sx={{
                            width: '40%',
                            height: '10px',
                            color: '#e74c3c',
                            border: '1px solid #1d303b4d',
                            borderRadius: 1,
                        }}
                    >
                        <DeleteIcon />
                    </Button>
                    <Button
                        onClick={handleOpen}
                        variant="outlined"
                        id="editButton"
                        sx={{
                            width: '40%',
                            height: '10px',
                            color: 'green',
                            border: '1px solid #1d303b4d',
                            borderRadius: 1,
                        }}
                    >
                        <EditIcon />
                    </Button>
                </Box>
                <EditModal
                    open={open}
                    handleClose={handleClose}
                    product={product}
                ></EditModal>
            </Box>
        </Card>
    );
}
