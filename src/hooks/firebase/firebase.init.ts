import { initializeApp } from 'firebase/app';

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SEDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

export const InitializeFirebase = () => {
    return initializeApp(firebaseConfig);
};
