import { PaletteMode, useMediaQuery } from '@mui/material';
import { blueGrey, grey, indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import useThemeAndLayout from './hooks/useThemeAndLayout';
import themeComponents from './theme/themeComponents';
import TheLayout from './views/TheLayout';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

function App() {
    const { mode } = useThemeAndLayout();

    const getDesignTokens = (mode: PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                      // palette values for light mode
                      primary: indigo,
                      divider: indigo[200],
                      background: {
                          default: indigo[50],
                          paper: indigo[50],
                      },
                      text: {
                          primary: grey[900],
                          secondary: grey[800],
                      },
                  }
                : {
                      // palette values for dark mode
                      primary: blueGrey,
                      divider: blueGrey[700],
                      background: {
                          default: blueGrey[900],
                          paper: blueGrey[900],
                      },
                      text: {
                          primary: '#fff',
                          secondary: blueGrey[500],
                      },
                  }),
        },
        components: {
            ...themeComponents,
        },
    });

    let appMode: string = mode;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    if (!mode) {
        appMode = prefersDarkMode ? 'dark' : 'light';
    }

    // Update the theme only if the mode changes
    const theme = useMemo(
        () => createTheme(getDesignTokens(appMode as 'dark')),
        [appMode]
    );

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <TheLayout />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default React.memo(App);
