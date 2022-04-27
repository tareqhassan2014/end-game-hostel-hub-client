import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useGetHostelQuery } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';
import Typography from '@mui/material/Typography';

const AdminHostel = () => {
    const { user } = useAuth();
    const url = `auth/${user._id}/hostel`;
    const { data, isLoading, isError, isSuccess, isFetching } =
        useGetHostelQuery(url);
    // console.log(data?.data.data[0].thumbnail);
    return (
        <Box>
            {data && (
                <Box>
                    <Box>
                        <Box
                            sx={{ width: '100%' }}
                            component="img"
                            src={data.data.data[0].banner}
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
                                {data.data.data[0].hostelName}
                            </Typography>

                            <Typography variant="h6">
                                {data.data.data[0].address}{' '}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h6">
                                Estimation: {data.data.data[0].estimation}
                            </Typography>

                            <Typography variant="h6">
                                Total Sit: {data.data.data[0].totalSit}{' '}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default AdminHostel;
