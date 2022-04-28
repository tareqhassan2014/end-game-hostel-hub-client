import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useGetHostelQuery } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';

const initialState = {
    address: '',
    admin: {},
    banner: '',
    createdAt: '',
    estimation: '',
    hostelName: '',
    member: [],
    request: [],
    status: '',
    thumbnail: '',
    totalSit: 0,
    _id: '',
};

const AdminHostel = () => {
    const { user } = useAuth();
    const [hostel, setHostel] = useState(initialState);
    const url = `auth/${user._id}/hostel`;
    const { data, isLoading, isError, isSuccess, isFetching } =
        useGetHostelQuery(url);
    data && setHostel(data.data.data[0]);
    return (
        <Box>
            {data && (
                <Box>
                    <Box>
                        <Box
                            sx={{ width: '100%' }}
                            component="img"
                            src={hostel.banner}
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
                            src="https://i.ibb.co/r5dKwjf/Allen-Kota-hostel.jpg"
                        />
                    </Box>
                    <Grid container sx={{ mx: '10px', my: '10px' }} spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h3">
                                {hostel.hostelName}
                            </Typography>

                            <Typography variant="h6">
                                {hostel.address}{' '}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h6">
                                Estimation: {hostel.estimation}
                            </Typography>

                            <Typography variant="h6">
                                Total Sit: {hostel.totalSit}{' '}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default AdminHostel;
