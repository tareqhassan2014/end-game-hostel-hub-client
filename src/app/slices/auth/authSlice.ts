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

interface UsersState {
    user: IUser;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    token: string;
    store: IStore;
}

const initialState = {
    user,
    token: '',
    loading: 'idle',
    store: store,
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

        setStore: (state, { payload: store }: PayloadAction<IStore>) => {
            state.store = store;
        },

        logOut: (state) => {
            state.user = user;
            state.token = '';
        },
    },
});

export const { setCredentials, logOut, setStore } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
