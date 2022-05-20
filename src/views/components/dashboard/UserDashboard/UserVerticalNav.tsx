import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';

const UserVerticalNav = () => {
    const { sideNavWidth } = useThemeAndLayout();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (sideNavWidth < 260) {
            setOpen(false);
        }
    }, [sideNavWidth]);

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
                onClick={() => navigate('/dashboard/profile')}
            >
                <ListItemIcon>
                    <PersonIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/find-hostel')}
            >
                <ListItemIcon>
                    <ContentPasteSearchIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Find Hostel" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/store')}
            >
                <ListItemIcon>
                    <AddBusinessIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Create Store" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/hostel')}
            >
                <ListItemIcon>
                    <HomeIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Create Hostel" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/Ad_product')}
            >
                <ListItemIcon>
                    <AddBoxIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
            </ListItemButton>
            <ListItemButton
                sx={{ borderRadius: 4 }}
                onClick={() => navigate('/dashboard/manage_product_Ad')}
            >
                <ListItemIcon>
                    <LocalOfferIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Manage Product" />
            </ListItemButton>
        </List>
    );
};

export default memo(UserVerticalNav);
