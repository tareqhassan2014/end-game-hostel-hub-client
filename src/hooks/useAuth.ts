import { useMemo } from 'react';
import { selectCurrentUser } from '../app/slices/auth/authSlice';
import { useAppSelector } from './hooks';

const useAuth = () => {
    const user = useAppSelector(selectCurrentUser);
    return useMemo(() => ({ ...user }), [user]);
};

export default useAuth;
