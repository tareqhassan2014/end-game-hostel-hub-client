import AdminBill from 'src/views/components/dashboard/AdminDashboard/AdminBill/AdminBill';
import AdminDefault from 'src/views/components/dashboard/AdminDashboard/AdminDefault/AdminDefault';
import AdminProfile from 'src/views/components/dashboard/AdminDashboard/AdminProfile/AdminProfile';
import ManageModerator from 'src/views/components/dashboard/AdminDashboard/ManageModerator/ManageModerator';
import ModeratorDefault from 'src/views/components/dashboard/moderatorDashboard/ModeratorDefault';
import UserDefault from 'src/views/components/dashboard/UserDashboard/UserDefault';
import UserMeal from 'src/views/components/dashboard/UserDashboard/UserMeal';
import {
    default as ModeratorProfile,
    default as UserProfile,
} from 'src/views/components/dashboard/UserDashboard/UserProfile';
import AddProduct from 'src/views/components/dashboard/vendorDashboard/AddProduct';
import VendorDefault from 'src/views/components/dashboard/vendorDashboard/VendorDefault';
import VendorProductManage from 'src/views/components/dashboard/vendorDashboard/VendorProductManage';

export const dashboardRoutes = [
    {
        path: '*',
        element: AdminDefault,
        role: ['admin'],
    },
    {
        path: 'default',
        element: AdminDefault,
        role: ['admin'],
    },
    {
        path: 'profile',
        element: AdminProfile,
        role: ['admin'],
    },
    {
        path: 'bills',
        element: AdminBill,
        role: ['admin'],
    },
    {
        path: '*',
        element: UserDefault,
        role: ['user'],
    },
    {
        path: 'default',
        element: UserDefault,
        role: ['user'],
    },
    {
        path: 'profile',
        element: UserProfile,
        role: ['user'],
    },
    {
        path: 'meal',
        element: UserMeal,
        role: ['user'],
    },
    {
        path: '*',
        element: ModeratorDefault,
        role: ['moderator'],
    },
    {
        path: 'default',
        element: ModeratorDefault,
        role: ['moderator'],
    },

    {
        path: 'profile',
        element: ModeratorProfile,
        role: ['moderator'],
    },
    {
        path: 'moderator',
        element: ManageModerator,
        role: ['admin'],
    },
    {
        path: '*',
        element: VendorDefault,
        role: ['vendor'],
    },
    {
        path: 'addProduct',
        element: AddProduct,
        role: ['vendor'],
    },
    {
        path: 'default',
        element: UserDefault,
        role: ['vendor'],
    },
    {
        path: 'product',
        element: VendorProductManage,
        role: ['vendor'],
    },
];
