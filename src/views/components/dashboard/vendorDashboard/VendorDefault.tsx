import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import CommonCart from '../common/CommonCart';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';

const VendorDefault = () => {
    return (
        <div>
            <CommonCart
                icon={<SearchIcon />}
                title="Title goes here"
                text="Description goes to here"
            />
            <BarChart />
            <LineChart />
        </div>
    );
};

export default VendorDefault;
