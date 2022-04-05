import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { openRoutes, protectedRoutes } from '../routes/routes';
import PrivateRoute from '../utility/PrivateRoute';

const View = () => {
    const { user } = useAuth();

    const filteredRouters = protectedRoutes.filter((router) =>
        router.role.includes(user.role || 'user')
    );

    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
                {openRoutes.map((route, idx) => {
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
                {filteredRouters.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                path="/*"
                                key={idx}
                                element={<PrivateRoute />}
                            >
                                <Route
                                    path={route.path}
                                    element={<route.element />}
                                />
                            </Route>
                        )
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default View;
