import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetHostelsAdsQuery } from 'src/app/api';
import { HostelCard, RootContainer } from './Style';

const DiscoverHostel = () => {
    const { data: hostels, isLoading } = useGetHostelsAdsQuery('/hostelsAds');
    const [HostelsAds, setHostelsAds] = useState<HostelAd[] | undefined>();

    useEffect(() => {
        if (hostels) {
            setHostelsAds(hostels?.data.data);
        }
    }, [hostels]);

    return (
        <RootContainer
            title="Best hostel for You"
            destination="/search-hostel"
            isLoading={isLoading}
        >
            {HostelsAds &&
                HostelsAds.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} lg={3}>
                        <HostelCard item={item} />
                    </Grid>
                ))}
        </RootContainer>
    );
};

export default DiscoverHostel;
