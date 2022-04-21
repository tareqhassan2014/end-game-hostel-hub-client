import { lazy } from 'react';
import { Chart } from 'src/views/components/dashboard/common/Chart';
import Table from 'src/views/components/dashboard/common/Table';
import AboutOurTeam from 'src/views/pages/AboutOurTeam/AboutOurTeam';
import PostAvailableSit from 'src/views/pages/PostAvailableSit/PostAvailableSit';
import SearchGroceries from 'src/views/pages/SearchGroceries/SearchGroceries';
import SearchItem from 'src/views/pages/SearchItem/SearchItem';
import SearchOldItems from 'src/views/pages/SearchOldItems/SearchOldItems';
import AdminSignup from '../views/components/signUp/AdminSignup';
import VendorSignup from '../views/components/signUp/VendorSignup';
import SignUp from '../views/pages/signup/SignUp';

const Home = lazy(() => import('../views/pages/home/Home'));
const SignIn = lazy(() => import('../views/pages/signIn/SignIn'));
const Discover = lazy(() => import('../views/pages/discover/Discover'));
const Profile = lazy(() => import('../views/pages/profile/Profile'));
const Dashboard = lazy(() => import('../views/pages/dashboard/Dashboard'));

export const protectedRoutes = [
    {
        path: 'profile',
        element: Profile,
        role: ['user', 'admin', 'grandAdmin', 'moderator', 'vendor', 'pending'],
    },
    {
        path: 'dashboard/*',
        element: Dashboard,
        role: ['user', 'admin', 'grandAdmin', 'moderator', 'vendor', 'pending'],
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
        path: '/postAvailableSit',
        element: PostAvailableSit,
    },
    {
        path: '/admin-signup',
        element: AdminSignup,
    },
    {
        path: '/vendor-signup',
        element: VendorSignup,
    },
    {
        path: '/search-hostel',
        element: SearchItem,
    },
    {
        path: '/about-team',
        element: AboutOurTeam,
    },
    {
        path: '/search-old-items',
        element: SearchOldItems,
    },
    {
        path: '/search-groceries',
        element: SearchGroceries,
    },
    {
        path: '/userData',
        element: Table,
    },
    {
        path: '/userChart',
        element: Chart,
    },
];
