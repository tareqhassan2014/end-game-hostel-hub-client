/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

const user = {
    name: '',
    email: '',
    status: '',
    role: '',
    _id: '',
    img: '',
    phone: '',
};

interface UsersState {
    user: IUser;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    token: string;
}

const initialState = {
    user,
    token: '',
    loading: 'idle',
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

        logOut: (state) => {
            state.user = user;
            state.token = '';
        },
    },
    // extraReducers: (builder) => {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     builder.addCase(googleLogin.fulfilled, (state, action) => {
    //         // Add user to the state array
    //         // state.user = action.payload.user;
    //     });
    // },
});

// First, create the thunk
export const googleLogin = createAsyncThunk('users/googleLogin', async () => {
    const user = {
        name: 'tareq',
        email: 'tareqhassan@gmail.com',
        status: '',
        role: '',
        _id: '',
        img: '',
    };

    return user;
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
