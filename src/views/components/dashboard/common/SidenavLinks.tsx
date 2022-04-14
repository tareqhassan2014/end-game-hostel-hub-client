import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

const SidenavLinks = () => {
    return (
        <Box sx={{ mx: 3 }}>
            <List>
                {['Dashboard', 'Moderator', 'Bill', 'Sit Manage'].map(
                    (text, index) => (
                        <ListItem
                            button
                            key={text}
                            sx={{ px: 2, borderRadius: 2 }}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {['Notification', 'Profile', 'Spam'].map((text, index) => (
                    <ListItem button key={text} sx={{ px: 2, borderRadius: 2 }}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Divider />
            <List>
                <ListItem sx={{ px: 2, borderRadius: 2 }}>
                    <Button variant="contained" sx={{ color: 'white' }}>
                        Logout
                    </Button>
                </ListItem>
            </List>
        </Box>
    );
};

export default SidenavLinks;
