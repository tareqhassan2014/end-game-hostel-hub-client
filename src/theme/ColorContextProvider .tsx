import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import React, { createContext, useMemo, useState } from 'react';

interface colorMode {
    toggleMode: () => void;
    setPrimaryColor: (hue: number) => void;
    mode: 'light' | 'dark';
    glassEffect: boolean;
    setGlassEffect: React.Dispatch<React.SetStateAction<boolean>>;
}

export const colorModeContext = createContext<colorMode>({} as colorMode);

export const ColorContextProvider: React.FC = ({ children }) => {
    const [mode, setMode] = useState('light' as PaletteMode);
    const [glassEffect, setGlassEffect] = useState(false);
    const [primaryColorHue, setPrimaryColorHue] = useState(250);

    const colorMode = useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                );
            },
            setPrimaryColor: (hue: number) => {
                setPrimaryColorHue(hue);
            },
            mode,
            glassEffect,
            setGlassEffect,
        }),
        [mode, glassEffect, setGlassEffect]
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: `hsl(${primaryColorHue}, 74%, 61%)`,
                    },
                    background: {
                        default:
                            mode === 'light'
                                ? `hsl(${primaryColorHue}, 63%, 97%)`
                                : '#121212',

                        paper:
                            mode === 'light'
                                ? `hsl(${primaryColorHue}, 63%, 97%)`
                                : '#121212',
                    },
                },
            }),
        [mode, primaryColorHue]
    );

    return (
        <colorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </colorModeContext.Provider>
    );
};
