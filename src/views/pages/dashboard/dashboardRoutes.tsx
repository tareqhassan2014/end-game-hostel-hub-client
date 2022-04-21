import AdminBill from 'src/views/components/dashboard/AdminDashboard/AdminBill/AdminBill';
import AdminDefault from 'src/views/components/dashboard/AdminDashboard/AdminDefault/AdminDefault';
import AdminProfile from 'src/views/components/dashboard/AdminDashboard/AdminProfile/AdminProfile';
import ManageModerator from 'src/views/components/dashboard/AdminDashboard/ManageModerator/ManageModerator';

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
        path: 'moderator',
        element: ManageModerator,
        role: ['admin'],
    },
];
