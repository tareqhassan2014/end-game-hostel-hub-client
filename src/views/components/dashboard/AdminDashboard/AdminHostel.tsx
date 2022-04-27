import React from 'react';
import { useGetHostelQuery } from 'src/app/api';
import useAuth from 'src/hooks/useAuth';

const AdminHostel = () => {
    const { user } = useAuth();
    const url = `auth/${user._id}/hostel`;
    const { data, isLoading, isError, isSuccess, isFetching } =
        useGetHostelQuery(url);

    return (
        <div>
            {data && (
                <div>
                    <p>{data.data.data[0].hostelName}</p>
                    <p>{data.data.data[0].address}</p>
                    <p>{data.data.data[0].estimation}</p>
                    <p>{data.data.data[0].totalSit}</p>
                    <img src={data.data.data[0].banner} />
                </div>
            )}
        </div>
    );
};

export default AdminHostel;
