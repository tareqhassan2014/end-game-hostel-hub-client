import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';
import { dashboardRoutes } from './dashboardRoutes';

const AnimatedDashboard = () => {
    // const location = useLocation();
    // const { user } = useAuth();

    // const proRoutes = dashboardRoutes?.filter((router) =>
    //     router.role.includes(user.role || 'user')
    // );
    return (
        <AnimatePresence>
            {/* <Routes location={location} key={location.pathname}>
                {proRoutes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                element={<route.element />}
                            />
                        )
                    );
                })}
            </Routes> */}
        </AnimatePresence>
    );
};

export default AnimatedDashboard;
