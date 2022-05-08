import { Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    useHostelAddDetailsQuery,
    useRequestForHostelMutation,
} from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import Swal from 'sweetalert2';

interface hostelData {
    address: string;
    admin: object;
    banner: string;
    createdAt: string;
    estimation: string;
    hostelName: string;
    member: [];
    request: [];
    status: string;
    thumbnail: string;
    totalSit: number;
    _id: string;
}

interface IHostelAddDetail {
    price: number;
    phone: string;
    details: string;
    numberOfVacancy: number;
    hostel: hostelData;
    _id: string;
}

const HostelAddDetail = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { data } = useHostelAddDetailsQuery(`/hostelAdd/${id}`);

    const [requestHostel, { isLoading, isSuccess }] =
        useRequestForHostelMutation();

    const [hostelAddDetail, setHostelAddDetail] = useState<
        IHostelAddDetail | undefined
    >(undefined);

    useEffect(() => {
        if (data) {
            setHostelAddDetail(data?.data.data);
        }
        console.log(hostelAddDetail);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const sendRequest = async () => {
        try {
            const data = {
                hostelId: hostelAddDetail?.hostel._id || '',
                addId: hostelAddDetail?._id || '',
                userId: user._id || '',
            };

            await requestHostel(data).unwrap();

            Swal.fire({
                showConfirmButton: false,
                icon: 'success',
                title: 'Your Request sent successfully',
                text: 'when the hostel admin accept your request you will notified and got a new dashboard with exciting data.',
            });
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
                    title: 'Something went very wrong',
                    text: `${
                        error?.data?.message || 'Please try again letter'
                    }`,
                });
            }
        }
    };

    return (
        <Container sx={{ my: 5 }}>
            <p>Phone: {hostelAddDetail?.phone}</p>
            <p>address : {hostelAddDetail?.hostel.address} </p>
            <p>numberOfVacancy : {hostelAddDetail?.numberOfVacancy}</p>
            <p>Hostel Add Details id : {hostelAddDetail?._id}</p>
            <Button
                variant="contained"
                onClick={sendRequest}
                disabled={Boolean(!user._id)}
            >
                Sent Request
            </Button>
        </Container>
    );
};

export default HostelAddDetail;
