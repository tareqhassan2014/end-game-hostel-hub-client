import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import useController from 'src/hooks/useController';
import MDBox from '../../MDBox';
import {
    collapseIcon,
    collapseIconBox,
    collapseItem,
    collapseText,
} from './styles/sidenavCollapse';

function SidenavCollapse({ icon, name, active, ...rest }) {
    const { controller } = useController();
    const {
        miniSidenav,
        transparentSidenav,
        whiteSidenav,
        darkMode,
        sidenavColor,
    } = controller;

    return (
        <ListItem component="li">
            <MDBox
                {...rest}
                sx={(theme) =>
                    collapseItem(theme, {
                        active,
                        transparentSidenav,
                        whiteSidenav,
                        darkMode,
                        sidenavColor,
                    })
                }
            >
                <ListItemIcon
                    sx={(theme) =>
                        collapseIconBox(theme, {
                            transparentSidenav,
                            whiteSidenav,
                            darkMode,
                            active,
                        })
                    }
                >
                    {typeof icon === 'string' ? (
                        <Icon sx={(theme) => collapseIcon(theme, { active })}>
                            {icon}
                        </Icon>
                    ) : (
                        icon
                    )}
                </ListItemIcon>

                <ListItemText
                    primary={name}
                    sx={(theme) =>
                        collapseText(theme, {
                            miniSidenav,
                            transparentSidenav,
                            whiteSidenav,
                            active,
                        })
                    }
                />
            </MDBox>
        </ListItem>
    );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
    active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

export default SidenavCollapse;
