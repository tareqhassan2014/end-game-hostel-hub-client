import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface StateType {
    mode: string;
    fullSideBar: boolean;
}

const initialState = {
    mode: '',
    fullSideBar: true,
} as StateType;

export const themeAndLayoutSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleColorMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            console.log(state.mode);
        },
        toggleFullSideBar: (state) => {
            state.fullSideBar = !state.fullSideBar;
        },
        setColorMode: (state, action: PayloadAction<string>) => {
            state.mode = action.payload;
        },
    },
});

export default themeAndLayoutSlice.reducer;
export const { toggleColorMode, toggleFullSideBar, setColorMode } =
    themeAndLayoutSlice.actions;

export const selectCurrentThemeAndLayout = (state: RootState) => state.theme;
