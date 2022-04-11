import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './app/store';
import { AppThemeProvider } from './theme/UseAppTheme';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <ToastContainer />
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <AppThemeProvider>
                    <App />
                </AppThemeProvider>
            </Provider>
        </PersistGate>
    </React.StrictMode>,
    document.getElementById('root')
);
