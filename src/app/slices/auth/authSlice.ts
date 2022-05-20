/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface IUser {
    name: string;
    email: string;
    _id?: string;
    role: string;
    status: string;
    img: string;
    phone: string;
}

interface IStore {
    address: string;
    banner: string;
    createdAt: string;
    _id: string;
    status: string;
    storeName: string;
    thumbnail: string;
}

interface IHostel {
    address: string;
    banner: string;
    createdAt: string;
    estimation: string;
    hostelName: string;
    status: string;
    thumbnail: string;
    totalSit: number;
    _id: string;
}

const user = {
    name: '',
    email: '',
    status: '',
    role: '',
    _id: '',
    img: '',
    phone: '',
};

const store = {
    address: '',
    banner: '',
    createdAt: '',
    _id: '',
    status: '',
    storeName: '',
    thumbnail: '',
};

const hostel = {
    address: '',
    banner: '',
    createdAt: '',
    estimation: '',
    hostelName: '',
    status: '',
    thumbnail: '',
    totalSit: 0,
    _id: '',
};

interface UsersState {
    user: IUser;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    token: string;
    store: IStore;
    hostel: IHostel;
}

const initialState = {
    user,
    token: '',
    loading: 'idle',
    store: store,
    hostel: hostel,
} as UsersState;

export const authSlice = createSlice({
    name: 'MUIContext',
    initialState,
    reducers: {
        setCredentials: (
            state,
            {
                payload: { user, token },
            }: PayloadAction<{ user: IUser; token: string }>
        ) => {
            state.user = user;
            state.token = token;
        },

        updateMe: (
            state,
            { payload: { user } }: PayloadAction<{ user: IUser }>
        ) => {
            state.user = user;
        },

        setStore: (state, { payload: store }: PayloadAction<IStore>) => {
            state.store = store;
        },

        setHostel: (state, { payload: hostel }: PayloadAction<IHostel>) => {
            state.hostel = hostel;
        },

        logOut: (state) => {
            state.user = user;
            state.token = '';
            state.store = store;
            state.hostel = hostel;
        },
    },
});

export const { setCredentials, logOut, setStore, setHostel, updateMe } =
    authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth;
