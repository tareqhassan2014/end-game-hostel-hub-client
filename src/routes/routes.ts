import { lazy } from 'react';
import Cart from '../views/components/common/cart/Cart';
import AdminSignup from '../views/components/signUp/AdminSignup';
import SignUp from '../views/components/signUp/SignUp';
import VendorSignup from '../views/components/signUp/VendorSignup';

const Home = lazy(() => import('../views/pages/home/Home'));
const SignIn = lazy(() => import('../views/pages/signIn/SignIn'));
const Discover = lazy(() => import('../views/pages/discover/Discover'));
const Profile = lazy(() => import('../views/pages/profile/Profile'));
const AdminDashboard = lazy(
    () => import('../views/pages/dashboards/AdminDashboard')
);
const UserDashboard = lazy(
    () => import('../views/pages/dashboards/UserDashboard')
);
const moderatorDashboard = lazy(
    () => import('../views/pages/dashboards/moderatorDashboard')
);
const vendorDashboard = lazy(
    () => import('../views/pages/dashboards/vendorDashboard')
);
const grandAdminDashboard = lazy(
    () => import('../views/pages/dashboards/grandAdminDashboard')
);

export const protectedRoutes = [
    {
        path: 'profile',
        element: Profile,
        role: ['user', 'admin', 'grandAdmin', 'moderator', 'vendor'],
    },
    {
        path: 'dashboard',
        element: UserDashboard,
        role: ['user'],
    },
    {
        path: 'dashboard',
        element: grandAdminDashboard,
        role: ['grandAdmin'],
    },
    {
        path: 'dashboard',
        element: moderatorDashboard,
        role: ['moderator'],
    },
    {
        path: 'dashboard',
        element: vendorDashboard,
        role: ['vendor'],
    },
    {
        path: 'dashboard',
        element: AdminDashboard,
        role: ['admin'],
    },
];

export const openRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/home',
        element: Home,
    },
    {
        path: '/login',
        element: SignIn,
    },
    {
        path: '/signup',
        element: SignUp,
    },
    {
        path: '/discover',
        element: Discover,
    },
    {
        path: '/cart',
        element: Cart,
    },
    {
        path: '/admin-signup',
        element: AdminSignup,
    },
    {
        path: '/vendor-signup',
        element: VendorSignup,
    },
];
