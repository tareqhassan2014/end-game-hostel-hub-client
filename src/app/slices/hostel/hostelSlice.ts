import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

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
} as hostelData;

const hostelSlice = createSlice({
    name: 'hostel',
    initialState,
    reducers: {
        setHostel: (state, action: PayloadAction<hostelData>) => {
            state = action.payload;
        },
    },
});

export default hostelSlice.reducer;
export const { setHostel } = hostelSlice.actions;

export const selectCurrentHostel = (state: RootState) => state.hostel;
