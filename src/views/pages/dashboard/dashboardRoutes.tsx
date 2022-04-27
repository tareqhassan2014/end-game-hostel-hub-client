import AdminBill from 'src/views/components/dashboard/AdminDashboard/AdminBill/AdminBill';
import AdminDefault from 'src/views/components/dashboard/AdminDashboard/AdminDefault/AdminDefault';
import AdminHostel from 'src/views/components/dashboard/AdminDashboard/AdminHostel';
import AdminProfile from 'src/views/components/dashboard/AdminDashboard/AdminProfile/AdminProfile';
import ManageModerator from 'src/views/components/dashboard/AdminDashboard/ManageModerator/ManageModerator';
import ModeratorDefault from 'src/views/components/dashboard/moderatorDashboard/ModeratorDefault';
import Profile from 'src/views/components/dashboard/profile/Profile';
import CreateHostel from 'src/views/components/dashboard/UserDashboard/CreateHostel';
import CreateStore from 'src/views/components/dashboard/UserDashboard/CreateStore';
import UserBills from 'src/views/components/dashboard/UserDashboard/UserBills';
import UserDefault from 'src/views/components/dashboard/UserDashboard/UserDefault';
import UserMeal from 'src/views/components/dashboard/UserDashboard/UserMeal';
import { default as ModeratorProfile } from 'src/views/components/dashboard/UserDashboard/UserProfile';
import AddProduct from 'src/views/components/dashboard/vendorDashboard/AddProduct';
import ConfirmOrder from 'src/views/components/dashboard/vendorDashboard/ConfirmOrder';
import ManageOrder from 'src/views/components/dashboard/vendorDashboard/ManageOrder';
import ManageProduct from 'src/views/components/dashboard/vendorDashboard/ManageProduct';
import PendingOrder from 'src/views/components/dashboard/vendorDashboard/PendingOrder';
import VendorDefault from 'src/views/components/dashboard/vendorDashboard/VendorDefault';

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
        path: 'hostel',
        element: AdminHostel,
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
        element: Profile,
        role: ['user', 'admin', 'grandAdmin', 'moderator', 'vendor', 'member'],
    },
    {
        path: 'meal',
        element: UserMeal,
        role: ['user'],
    },
    {
        path: 'bills',
        element: UserBills,
        role: ['user'],
    },
    {
        path: 'store',
        element: CreateStore,
        role: ['user'],
    },
    {
        path: 'hostel',
        element: CreateHostel,
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
        path: 'pendingOrder',
        element: PendingOrder,
        role: ['vendor'],
    },
    {
        path: 'confirmOrder',
        element: ConfirmOrder,
        role: ['vendor'],
    },
    {
        path: 'addProduct',
        element: AddProduct,
        role: ['vendor'],
    },
    {
        path: 'product',
        element: ManageOrder,
        role: ['vendor'],
    },
    {
        path: 'manageProduct',
        element: ManageProduct,
        role: ['vendor'],
    },
];
