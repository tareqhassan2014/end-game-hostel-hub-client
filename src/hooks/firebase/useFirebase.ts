import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLoginMutation, useSignUpMutation } from '../../app/api';
import { setCredentials } from '../../app/reducers/auth/authSlice';
import { useAppDispatch } from './../hooks';
import { InitializeFirebase } from './firebase.init';

InitializeFirebase();

const user = {
    name: '',
    email: '',
    status: '',
    role: '',
    _id: '',
    img: '',
    phone: '',
};

const useFirebase = () => {
    //auth
    const auth = getAuth();
    const dispatch = useAppDispatch();
    const [signUp] = useSignUpMutation();
    const [signIn] = useLoginMutation();

    // REGISTER WITH EMAIL AND PASSWORD
    const RegisterUser = async (
        name: string,
        email: string,
        password: string
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

            const { user: newUser } = await signUp({
                name,
                phone: user.phoneNumber,
                img: user.photoURL,
                email: user.email,
            }).unwrap();
            toast.success('Account create successfully');
            dispatch(
                setCredentials({
                    user: newUser,
                    token: user.accessToken,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    // SIGN IN WITH USER AND EMAIL
    const SignInFirebase = async (email: string, password: string) => {
        try {
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const { user: newUser } = await signIn({
                token: user.accessToken,
            }).unwrap();
            if (newUser) {
                toast.success('Account create successfully');
                dispatch(
                    setCredentials({
                        user: newUser,
                        token: user.accessToken,
                    })
                );
            }
        } catch (error: any) {
            console.log(error.message);
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

            const { user } = await signUp({
                name: displayName,
                phone: phoneNumber,
                img: photoURL,
                email,
            }).unwrap();
            dispatch(
                setCredentials({
                    user,
                    token: accessToken,
                })
            );
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

            const { user } = await signUp({
                name: displayName,
                phone: phoneNumber,
                img: photoURL,
                email,
            }).unwrap();
            dispatch(
                setCredentials({
                    user,
                    token: accessToken,
                })
            );
        } catch (error: any) {
            console.log(error.message);
        }
    };

    // OBSERVE A USER
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                const user = {
                    name: authUser.displayName || '',
                    email: authUser.email || '',
                    role: '',
                    _id: '',
                    phone: '',
                    status: '',
                    img:
                        authUser.photoURL ||
                        'https://i.ibb.co/dDS0Jq5/user.png',
                };
            } else {
                dispatch(setCredentials({ user, token: '' }));
            }

            return () => unsubscribed;
        });
    }, [auth, dispatch]);

    // LogOut

    const logout = () => {
        signOut(auth)
            .then(() => {
                dispatch(setCredentials({ user, token: '' }));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return {
        firebaseFacebook,
        SignInFirebase,
        firebaseGoogle,
        RegisterUser,
        logout,
    };
};

export default useFirebase;
