import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute() {
    const location = useLocation();
    const { user } = useAuth();

    return user?.email ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={`${location.pathname}`} replace />
    );
}

export default PrivateRoute;
