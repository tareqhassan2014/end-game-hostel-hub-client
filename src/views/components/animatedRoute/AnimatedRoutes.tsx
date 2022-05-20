import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { openRoutes, protectedRoutes } from 'src/routes/routes';
import PrivateRoute from 'src/utility/PrivateRoute';
import { AnimatePresence, motion } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
    const { user } = useAuth();

    const proRoutes = protectedRoutes.filter((router) =>
        router.role.includes(user.role || 'user')
    );

    return (
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
    );
};

export default AnimatedRoutes;
