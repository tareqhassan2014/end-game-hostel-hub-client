import {
    createTheme,
    PaletteMode,
    ThemeProvider,
    useMediaQuery,
} from '@mui/material';
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

interface colorMode {
    toggleMode: () => void;
    setPrimaryColor: (hue: number) => void;
    mode: 'light' | 'dark';
    primaryColorHue: number;
}

export const colorModeContext = createContext<colorMode>({} as colorMode);

export const AppThemeProvider: React.FC = ({ children }) => {
    const [mode, setMode] = useState('light' as PaletteMode);
    const [primaryColorHue, setPrimaryColorHue] = useState(250);
    const deviceMode = useMediaQuery('(prefers-color-scheme: dark)');
    const previousMode = localStorage.getItem('color-mood');

    useEffect(() => {
        if (previousMode) {
            setMode(previousMode === 'dark' ? 'dark' : 'light');
        }

        if (!previousMode && deviceMode) {
            setMode('dark');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(!previousMode, deviceMode);

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
            primaryColorHue,
        }),
        [mode, primaryColorHue]
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
                                ? `hsl(${primaryColorHue}, 8%, 61%)`
                                : `hsl(${primaryColorHue}, 50%, 4%)`,

                        paper:
                            mode === 'light'
                                ? `hsl(${primaryColorHue}, 74%, 98%)`
                                : `hsl(${primaryColorHue}, 50%, 10%)`,
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

export const useAppTheme = () => {
    return useContext(colorModeContext);
};
