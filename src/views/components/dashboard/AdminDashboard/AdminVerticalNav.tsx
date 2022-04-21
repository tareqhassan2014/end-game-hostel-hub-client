import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { useMediaQuery } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useThemeAndLayout from 'src/hooks/useThemeAndLayout';

const AdminVerticalNav = () => {
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
                <ListItemText primary="Proline" />
            </ListItemButton>
            <ListItemButton sx={{ borderRadius: 4 }} onClick={handleClick}>
                <ListItemIcon>
                    <SettingsIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Manage" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton
                        sx={{
                            pl: sideNavWidth === 80 ? 2 : 4,
                            borderRadius: 4,
                        }}
                        onClick={() => navigate('/dashboard/moderator')}
                    >
                        <ListItemIcon>
                            <ManageAccountsIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Moderator" />
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
            </Collapse>
        </List>
    );
};

export default memo(AdminVerticalNav);