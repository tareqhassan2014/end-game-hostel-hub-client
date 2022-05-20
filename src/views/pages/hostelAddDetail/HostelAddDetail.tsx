import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    useGetHostelAdDetailsQuery,
    useMemberRequestMutation,
} from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import Swal from 'sweetalert2';

const HostelAddDetail = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [memberRequest] = useMemberRequestMutation();
    const { data } = useGetHostelAdDetailsQuery(`/hostelsAds/${id}`);

    const [hostelAddDetail, setHostelAddDetail] = useState<
        HostelAd | undefined
    >();

    useEffect(() => {
        if (data) {
            setHostelAddDetail(data?.data.data);
        }
    }, [data]);

    const sendRequest = async () => {
        try {
            if (user && hostelAddDetail) {
                const data = {
                    hostel: hostelAddDetail?.hostel._id || '',
                    hostelsAd: hostelAddDetail?._id || '',
                };

                await memberRequest(data).unwrap();

                Swal.fire({
                    showConfirmButton: false,
                    icon: 'success',
                    title: 'Your Request sent successfully',
                    text: 'when the hostel admin accept your request you will notified and got a new dashboard with exciting data.',
                });
            }
        } catch (error: any) {
            if (error?.data?.message?.includes('Duplicate')) {
                Swal.fire({
                    showConfirmButton: false,
                    icon: 'info',
                    title: 'Your Request Already send',
                    text: 'Please wait while the hostel admin being accept your request.',
                });
            } else {
                Swal.fire({
                    showConfirmButton: false,
                    icon: 'error',
                    title: error?.data?.message,
                    text: 'Only user can send request to hostel admin',
                });
            }
        }
    };

    return (
        <Container sx={{ mb: 5 }}>
            <Box>
                <Box
                    sx={{ width: '100%' }}
                    component="img"
                    src="https://i.ibb.co/MSrwbxN/1217.jpg"
                />
                <Box
                    sx={{
                        width: '20%',
                        mt: '-250px',
                        borderRadius: '50%',
                        mx: '20px',
                    }}
                    component="img"
                    // src={data.data.data[0].thumbnail}
                    src="https://i.ibb.co/4Jb1vzN/325.jpg"
                />
            </Box>

            <Box sx={{ mb: 1 }}>
                <Grid container sx={{ pt: 2 }} spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>
                            {hostelAddDetail?.hostel.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            address : {hostelAddDetail?.hostel.address}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Phone: {hostelAddDetail?.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            Total Sit : {hostelAddDetail?.hostel.totalSit}
                        </Typography>

                        <Typography variant="h5" gutterBottom>
                            Vacancy : {hostelAddDetail?.numberOfValency}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Price (Monthly) : {hostelAddDetail?.hostel.totalSit}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Button
                variant="contained"
                onClick={sendRequest}
                disabled={Boolean(!user._id)}
            >
                Send Request
            </Button>
        </Container>
    );
};

export default HostelAddDetail;
