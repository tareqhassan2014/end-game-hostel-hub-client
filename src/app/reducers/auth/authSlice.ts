import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface IUser {
    name: string;
    email: string;
    id: string;
    role: string;
    status: string;
    img: string;
}

const user = {
  name: '',
  email: '',
  status: '',
  role: '',
};

const initialState = {
  user,
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: IUser; token: string }>,
    ) => {
      state.user = user;
      state.token = token;
    },

    logOut: (state) => {
      state.user = user;
      state.token = '';
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
