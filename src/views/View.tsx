import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { openRoutes, protectedRoutes } from '../routes/routes';
import PrivateRoute from '../utility/PrivateRoute';
import Loading from './components/Lottie/Loading';

const View = () => {
    const { user } = useAuth();

    const proRoutes = protectedRoutes.filter((router) =>
        router.role.includes(user.role || 'user')
    );

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                {openRoutes.map((route, idex) => {
                    return (
                        route.element && (
                            <Route
                                key={idex}
                                path={route.path}
                                element={<route.element />}
                            />
                        )
                    );
                })}
                {proRoutes.map((route, idex) => {
                    return (
                        route.element && (
                            <Route
                                path="/*"
                                key={idex}
                                element={<PrivateRoute />}
                            >
                                <Route
                                    path={route.path}
                                    element={<route.element />}
                                ></Route>
                            </Route>
                        )
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default View;
