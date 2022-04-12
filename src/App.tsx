import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './assets/theme';
import themeDark from './assets/theme-dark';
import useController from './hooks/useController';
import TheLayout from './views/TheLayout';

function App() {
    const {
        controller: { darkMode },
    } = useController();
    return (
        <BrowserRouter>
            <ThemeProvider theme={darkMode ? themeDark : theme}>
                <TheLayout />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
