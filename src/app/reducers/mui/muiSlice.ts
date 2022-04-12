import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: 'info',
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: 'ltr',
    layout: 'dashboard',
    darkMode: false,
};

export const muiSlice = createSlice({
    name: 'MaterialUIContext',
    initialState,
    reducers: {
        setTransparentSidenav(state, action: PayloadAction<boolean>) {
            state.transparentSidenav = action.payload;
        },
        setMiniSidenav(state, action: PayloadAction<boolean>) {
            state.miniSidenav = action.payload;
        },
        setWhiteSidenav(state, action: PayloadAction<boolean>) {
            state.whiteSidenav = action.payload;
        },
        setSidenavColor(state, action: PayloadAction<string>) {
            state.sidenavColor = action.payload;
        },
        setTransparentNavbar(state, action: PayloadAction<boolean>) {
            state.transparentNavbar = action.payload;
        },
        setFixedNavbar(state, action: PayloadAction<boolean>) {
            state.fixedNavbar = action.payload;
        },
        setOpenConfigurator(state, action: PayloadAction<boolean>) {
            state.openConfigurator = action.payload;
        },
        setLayout(state, action: PayloadAction<string>) {
            state.layout = action.payload;
        },
        setDarkMode(state, action: PayloadAction<boolean>) {
            state.darkMode = action.payload;
        },
    },
});

export const {
    setTransparentSidenav,
    setMiniSidenav,
    setWhiteSidenav,
    setSidenavColor,
    setTransparentNavbar,
    setFixedNavbar,
    setOpenConfigurator,
    setLayout,
    setDarkMode,
} = muiSlice.actions;

export default muiSlice.reducer;

export const useMaterialUIController = (state: RootState) =>
    state.MaterialUIContext;
