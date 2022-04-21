import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

interface StateType {
    mode: string;
    sideNavWidth: number;
}

const initialState = {
    mode: '',
    sideNavWidth: 260,
} as StateType;

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleColorMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        toggleFullSideBar: (state, action: PayloadAction<number>) => {
            state.sideNavWidth = action.payload;
        },
        setColorMode: (state, action: PayloadAction<string>) => {
            state.mode = action.payload;
        },
    },
});

export default themeSlice.reducer;
export const { toggleColorMode, toggleFullSideBar, setColorMode } =
    themeSlice.actions;

export const selectCurrentTheme = (state: RootState) => state.theme;
