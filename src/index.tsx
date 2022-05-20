import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './app/store';

ReactDOM.render(
    <>
        <CssBaseline />
        <ToastContainer />
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <App />
            </Provider>
        </PersistGate>
    </>,
    document.getElementById('root')
);
