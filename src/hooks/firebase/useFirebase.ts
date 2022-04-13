import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { useLoginMutation, useSignUpMutation } from '../../app/api';
import { setCredentials } from '../../app/reducers/auth/authSlice';
import { useAppDispatch } from './../hooks';
import { InitializeFirebase } from './firebase.init';

InitializeFirebase();

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
                img: 'https://i.ibb.co/dBQjP3N/profile.png',
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

            dispatch(
                setCredentials({
                    user: {
                        name: '',
                        email: '',
                        status: '',
                        role: '',
                        _id: '',
                        img: '',
                        phone: '',
                    },
                    token: user.accessToken,
                })
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

    return {
        firebaseFacebook,
        SignInFirebase,
        firebaseGoogle,
        RegisterUser,
    };
};

export default useFirebase;
