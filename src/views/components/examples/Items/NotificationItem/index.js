import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';
import menuItem from './styles';

// eslint-disable-next-line react/display-name
const NotificationItem = forwardRef(({ icon, title, ...rest }, ref) => (
    <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
        <MDBox
            component={Link}
            py={0.5}
            display="flex"
            alignItems="center"
            lineHeight={1}
        >
            <MDTypography variant="body1" color="secondary" lineHeight={0.75}>
                {icon}
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
                {title}
            </MDTypography>
        </MDBox>
    </MenuItem>
));

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default NotificationItem;
