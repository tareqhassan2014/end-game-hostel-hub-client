import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const MemberVerticalNav = () => {
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
                onClick={() => navigate('/dashboard/default')}
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
                onClick={() => navigate('/dashboard/hostel')}
            >
                <ListItemIcon>
                    <PeopleAltIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="My Hostel" />
            </ListItemButton>
            <ListItemButton
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
            </ListItemButton>
        </List>
    );
};

export default memo(MemberVerticalNav);
