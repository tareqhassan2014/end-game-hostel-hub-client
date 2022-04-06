import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { InitializeFirebase } from './firebase.init';

InitializeFirebase();

interface userState {
    displayName: string;
    email: string;
    emailVerified: boolean;
    photoURL: string;
}

interface serverUser {
    name: string;
    email: string;
    role: string;
    store: string;
    date: string;
    phone: string;
    photo: string;
    _id: string;
    slug: string;
}

const useFirebase = () => {
    //auth
    const auth = getAuth();

    //states
    const [user, setUser] = useState<userState | null>(null);
    const [error, setError] = useState('');
    const [userDetails, setUserDetails] = useState<serverUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isUserLoading, setIsUserLoading] = useState(true);

    // REGISTER WITH EMAIL AND PASSWORD
    const RegisterUser = async (
        email: string,
        password: string,
        name: string
    ) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            // Pass userCredential.user instead of auth.currentUser
            updateProfile(user, {
                displayName: name,
            });
            return { user };
        } catch (error) {
            console.log(error);
        }
    };

    //login with google

    const firebaseGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const {
                user: {
                    displayName,
                    phoneNumber,
                    photoURL,
                    email,
                    accessToken,
                },
            } = await signInWithPopup(auth, provider);

            return {
                name: displayName,
                phone: phoneNumber,
                img: photoURL,
                email,
                token: accessToken,
            };
        } catch (error: any) {
            console.log(error.message);
        }
    };

    // Facebook sign in
    const firebaseFacebook = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const {
                user: {
                    displayName,
                    phoneNumber,
                    photoURL,
                    email,
                    accessToken,
                },
            } = await signInWithPopup(auth, provider);
            return {
                name: displayName,
                phone: phoneNumber,
                img: photoURL,
                email,
                token: accessToken,
            };
        } catch (error) {
            console.log(error);
        }
    };

    // OBSERVE A USER
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            if (user) {
                const userDetails = {
                    displayName: user.displayName || '',
                    email: user.email || '',
                    emailVerified: user.emailVerified || false,
                    photoURL:
                        user.photoURL || 'https://i.ibb.co/dDS0Jq5/user.png',
                };
                setUser(userDetails);
            } else {
                setUser(null);
            }
            setIsLoading(false);
            return () => unsubscribed;
        });
    }, [auth]);

    return {
        user,
        error,
        isLoading,
        userDetails,
        isUserLoading,
        firebaseGoogle,
        firebaseFacebook,
        RegisterUser,
    };
};

export default useFirebase;
