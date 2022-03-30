import { useMemo } from 'react';
import { selectCurrentUser } from '../app/reducers/auth/authSlice';
import { useAppSelector } from './hooks';

const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);
  return useMemo(() => ({ user }), [user]);
};

export default useAuth;
