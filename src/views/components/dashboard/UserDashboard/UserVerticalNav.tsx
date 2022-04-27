import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from '@mui/material';
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

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (sideNavWidth < 260) {
            setOpen(false);
        }
    }, [sideNavWidth]);

    const matches = useMediaQuery('(min-width:600px)');

    console.log(matches);

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
                onClick={() => navigate('/dashboard/store')}
            >
                <ListItemIcon>
                    <AddBusinessIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Create Store" />
            </ListItemButton>
        </List>
    );
};

export default memo(UserVerticalNav);
