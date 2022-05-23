import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const VendorVerticalNav = () => {
    const navigate = useNavigate();

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 260,
                bgcolor: 'inherit',
                color: 'white',
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard')}
            >
                <ListItemIcon>
                    <HomeIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/profile')}
            >
                <ListItemIcon>
                    <PersonIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>

            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/addProduct')}
            >
                <ListItemIcon>
                    <AddCircleRoundedIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
            </ListItemButton>

            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/manageOrder')}
            >
                <ListItemIcon>
                    <TaskAltIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Manage Order" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/manageProduct')}
            >
                <ListItemIcon>
                    <TaskAltIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Manage Product" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/store')}
            >
                <ListItemIcon>
                    <TaskAltIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Store" />
            </ListItemButton>

            {/* <ListItemButton sx={{ borderRadius: 4 }} onClick={handleClick}>
                <ListItemIcon>
                    <SettingsIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Manage" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton> */}
            {/* <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton
                        sx={{
                            pl: sideNavWidth === 80 ? 2 : 4,
                            borderRadius: 4,
                        }}
                        onClick={() => navigate('/dashboard/product')}
                    >
                        <ListItemIcon>
                            <ManageAccountsIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Manage Order" />
                    </ListItemButton>
                    <ListItemButton
                        sx={{
                            pl: sideNavWidth === 80 ? 2 : 4,
                            borderRadius: 4,
                        }}
                        onClick={() => navigate('/dashboard/addProduct')}
                    >
                        <ListItemIcon>
                            <ManageAccountsIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItemButton>
                    <ListItemButton
                        sx={{
                            pl: sideNavWidth === 80 ? 2 : 4,
                            borderRadius: 4,
                        }}
                        onClick={() => navigate('/dashboard/bills')}
                    >
                        <ListItemIcon>
                            <AttachMoneyIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={open ? 'Manage Bill' : ''} />
                    </ListItemButton>
                </List>
            </Collapse> */}
            {/* <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/Ad_product')}
            >
                <ListItemIcon>
                    <AddBoxIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Ad Product" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/manage_product_Ad')}
            >
                <ListItemIcon>
                    <LocalOfferIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="M product Ad" />
            </ListItemButton> */}
        </List>
    );
};

export default memo(VendorVerticalNav);
