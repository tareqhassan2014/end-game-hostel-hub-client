import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Container, Grid, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
    useAcceptHostelMemberRequestMutation,
    useGetHostelBookingQuery,
} from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import Swal from 'sweetalert2';

interface IHostelBooking {
    hostelId: string;
    addId: string;
    userId: {
        img: string;
        name: string;
        email: string;
        _id: string;
    };
}

const AdminNotifications = () => {
    const { hostel } = useAuth();

    const query = `hostelBooking?hostelId=${hostel._id}`;
    const { data } = useGetHostelBookingQuery(query);
    const [acceptHostelMemberRequest, { isSuccess, isLoading }] =
        useAcceptHostelMemberRequestMutation();

    const [hostelBooking, setHostelBooking] = useState<
        IHostelBooking[] | undefined
    >();

    useEffect(() => {
        if (data) {
            setHostelBooking(data.data.data);
        }
    }, [data]);

    const acceptRequest = async (userId: string, hostelId: string) => {
        try {
            await acceptHostelMemberRequest({ userId, hostelId });
            Swal.fire({
                icon: 'success',
                title: 'Member added successfully!!',
            });
        } catch (error: any) {
            Swal.fire({
                showConfirmButton: false,
                icon: 'error',
                title: 'Something went very wrong',
                text: `${error?.data?.message || 'Please try again letter'}`,
            });
            console.log(error);
        }
    };

    console.log(hostelBooking);

    return (
        <Container>
            <Grid item xs={12} md={8} lg={9}>
                <Grid
                    sx={{
                        p: { xs: 1, md: 2, lg: 3 },
                        me: 1,
                        mt: 1,
                        borderRadius: 3,
                        height: 'auto',
                    }}
                    container
                    spacing={2}
                >
                    {isLoading && <div>Loading....</div>}

                    {hostelBooking && hostelBooking.length > 0 ? (
                        hostelBooking.map((booking, index) => (
                            <Grid key={index} item xs={12} sm={6} lg={4}>
                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Grid item xs={2}>
                                        <Avatar
                                            src={booking?.userId?.img || ''}
                                            alt={booking?.userId?.name || ''}
                                        />
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography
                                            gutterBottom
                                            variant="body1"
                                            component="div"
                                        >
                                            {booking?.userId?.name || ''} Want
                                            to be a member of your hostel
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <IconButton
                                            aria-label="delete"
                                            color="error"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                acceptRequest(
                                                    booking?.userId?._id || '',
                                                    booking?.hostelId || ''
                                                )
                                            }
                                            aria-label="delete"
                                            color="success"
                                        >
                                            <CheckIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    ) : (
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: 'center',
                                color: '#6A52E5',
                                m: 5,
                            }}
                            component="div"
                            gutterBottom
                        >
                            There is no notification for you
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminNotifications;
