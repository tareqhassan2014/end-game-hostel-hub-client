import { lazy } from 'react';
import AboutOurTeam from 'src/views/pages/AboutOurTeam/AboutOurTeam';
import ProductDetails from 'src/views/pages/discover/ProductDetails';
import SearchGroceries from 'src/views/pages/SearchGroceries/SearchGroceries';
import SearchItem from 'src/views/pages/SearchItem/SearchItem';
import SearchOldItems from 'src/views/pages/SearchOldItems/SearchOldItems';
import SignUp from '../views/pages/signup/SignUp';

const Home = lazy(() => import('../views/pages/home/Home'));
const SignIn = lazy(() => import('../views/pages/signIn/SignIn'));
const Discover = lazy(() => import('../views/pages/discover/Discover'));
const Profile = lazy(
    () => import('../views/components/dashboard/profile/Profile')
);
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
        path: '/product/:id',
        element: ProductDetails,
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
        path: 'discover',
        element: Discover,
    },
];
