import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { openRoutes, protectedRoutes } from 'src/routes/routes';
import PrivateRoute from 'src/utility/PrivateRoute';
import Loading from './components/Lottie/Loading';

const View = () => {
    const { user } = useAuth();
    const location = useLocation();

    const proRoutes = protectedRoutes.filter((router) =>
        router.role.includes(user.role || 'user')
    );

    return (
        <Suspense fallback={<Loading />}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
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
            </AnimatePresence>
        </Suspense>
    );
};

export default View;
