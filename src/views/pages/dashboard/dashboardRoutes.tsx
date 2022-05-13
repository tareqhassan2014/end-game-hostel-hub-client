import AdminBill from 'src/views/components/dashboard/AdminDashboard/AdminBill/AdminBill';
import AdminDefault from 'src/views/components/dashboard/AdminDashboard/AdminDefault/AdminDefault';
import AdminHostel from 'src/views/components/dashboard/AdminDashboard/AdminHostel';
import AdminNotifications from 'src/views/components/dashboard/AdminDashboard/AdminNotifications';
import AdminSitManage from 'src/views/components/dashboard/AdminDashboard/AdminSitManage/AdminSitManage';
import ManageModerator from 'src/views/components/dashboard/AdminDashboard/ManageModerator/ManageModerator';
import AdProduct from 'src/views/components/dashboard/common/AdProduct';
import ManageProductAd from 'src/views/components/dashboard/common/ManageProductAd';
import Profile from 'src/views/components/dashboard/common/profile/Profile';
import MemberHostel from 'src/views/components/dashboard/MemberDashboard/MemberHostel';
import MemberDefault from 'src/views/components/dashboard/MemberDashboard/MemberDefault';
import ModeratorDefault from 'src/views/components/dashboard/moderatorDashboard/ModeratorDefault';
import CreateHostel from 'src/views/components/dashboard/UserDashboard/CreateHostel';
import CreateStore from 'src/views/components/dashboard/UserDashboard/CreateStore';
import FindHostel from 'src/views/components/dashboard/UserDashboard/FindHostel';
import UserBills from 'src/views/components/dashboard/UserDashboard/UserBills';
import UserMeal from 'src/views/components/dashboard/UserDashboard/UserMeal';
import AddProduct from 'src/views/components/dashboard/vendorDashboard/AddProduct';
import ConfirmOrder from 'src/views/components/dashboard/vendorDashboard/ConfirmOrder';
import ManageOrder from 'src/views/components/dashboard/vendorDashboard/ManageOrder';
import ManageProduct from 'src/views/components/dashboard/vendorDashboard/ManageProduct';
import PendingOrder from 'src/views/components/dashboard/vendorDashboard/PendingOrder';
import Store from 'src/views/components/dashboard/vendorDashboard/Store';
import VendorDefault from 'src/views/components/dashboard/vendorDashboard/VendorDefault';

export const dashboardRoutes = [
    {
        path: 'profile',
        element: Profile,
        role: ['user', 'admin', 'grandAdmin', 'moderator', 'vendor', 'member'],
    },
    {
        path: 'Ad_product',
        element: AdProduct,
        role: ['user', 'admin', 'grandAdmin', 'moderator', 'vendor', 'member'],
    },
    {
        path: 'manage_product_Ad',
        element: ManageProductAd,
        role: ['user', 'admin', 'grandAdmin', 'moderator', 'vendor', 'member'],
    },
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
        path: 'notification',
        element: AdminNotifications,
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
        path: 'sit',
        element: AdminSitManage,
        role: ['admin'],
    },
    {
        path: '*',
        element: Profile,
        role: ['user'],
    },
    {
        path: 'meal',
        element: UserMeal,
        role: ['user'],
    },
    {
        path: 'find-hostel',
        element: FindHostel,
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
        element: MemberDefault,
        role: ['member'],
    },
    {
        path: 'default',
        element: MemberDefault,
        role: ['member'],
    },
    {
        path: 'hostel',
        element: MemberHostel,
        role: ['member'],
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
        path: 'moderator',
        element: ManageModerator,
        role: ['admin'],
    },

    //vendor Route start
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
        path: 'manageOrder',
        element: ManageOrder,
        role: ['vendor'],
    },
    {
        path: 'manageProduct',
        element: ManageProduct,
        role: ['vendor'],
    },
    {
        path: 'store',
        element: Store,
        role: ['vendor'],
    },
    //vendor Route end
];
