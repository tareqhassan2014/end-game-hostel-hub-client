import { createTheme } from '@mui/material/styles';
import borders from './base/borders';
import boxShadows from './base/boxShadows';
import breakpoints from './base/breakpoints';
import colors from './base/colors';
import globals from './base/globals';
import typography from './base/typography';
import appBar from './components/appBar';
import avatar from './components/avatar';
import breadcrumbs from './components/breadcrumbs';
import button from './components/button';
import buttonBase from './components/buttonBase';
import card from './components/card';
import cardContent from './components/card/cardContent';
import cardMedia from './components/card/cardMedia';
import container from './components/container';
import dialog from './components/dialog';
import dialogActions from './components/dialog/dialogActions';
import dialogContent from './components/dialog/dialogContent';
import dialogContentText from './components/dialog/dialogContentText';
import dialogTitle from './components/dialog/dialogTitle';
import divider from './components/divider';
import autocomplete from './components/form/autocomplete';
import checkbox from './components/form/checkbox';
import formControlLabel from './components/form/formControlLabel';
import formLabel from './components/form/formLabel';
import input from './components/form/input';
import inputLabel from './components/form/inputLabel';
import inputOutlined from './components/form/inputOutlined';
import radio from './components/form/radio';
import select from './components/form/select';
import switchButton from './components/form/switchButton';
import textField from './components/form/textField';
import icon from './components/icon';
import iconButton from './components/iconButton';
import linearProgress from './components/linearProgress';
import link from './components/link';
import list from './components/list';
import listItem from './components/list/listItem';
import listItemText from './components/list/listItemText';
import menu from './components/menu';
import menuItem from './components/menu/menuItem';
import popover from './components/popover';
import sidenav from './components/sidenav';
import slider from './components/slider';
import stepper from './components/stepper';
import step from './components/stepper/step';
import stepConnector from './components/stepper/stepConnector';
import stepIcon from './components/stepper/stepIcon';
import stepLabel from './components/stepper/stepLabel';
import svgIcon from './components/svgIcon';
import tableCell from './components/table/tableCell';
import tableContainer from './components/table/tableContainer';
import tableHead from './components/table/tableHead';
import tabs from './components/tabs';
import tab from './components/tabs/tab';
import tooltip from './components/tooltip';
import boxShadow from './functions/boxShadow';
import hexToRgb from './functions/hexToRgb';
import linearGradient from './functions/linearGradient';
import pxToRem from './functions/pxToRem';
import rgba from './functions/rgba';

export default createTheme({
    breakpoints: { ...breakpoints },
    palette: { ...colors },
    typography: { ...typography },
    boxShadows: { ...boxShadows },
    borders: { ...borders },
    functions: {
        boxShadow,
        hexToRgb,
        linearGradient,
        pxToRem,
        rgba,
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals,
                ...container,
            },
        },
        MuiDrawer: { ...sidenav },
        MuiList: { ...list },
        MuiListItem: { ...listItem },
        MuiListItemText: { ...listItemText },
        MuiCard: { ...card },
        MuiCardMedia: { ...cardMedia },
        MuiCardContent: { ...cardContent },
        MuiButton: { ...button },
        MuiIconButton: { ...iconButton },
        MuiInput: { ...input },
        MuiInputLabel: { ...inputLabel },
        MuiOutlinedInput: { ...inputOutlined },
        MuiTextField: { ...textField },
        MuiMenu: { ...menu },
        MuiMenuItem: { ...menuItem },
        MuiSwitch: { ...switchButton },
        MuiDivider: { ...divider },
        MuiTableContainer: { ...tableContainer },
        MuiTableHead: { ...tableHead },
        MuiTableCell: { ...tableCell },
        MuiLinearProgress: { ...linearProgress },
        MuiBreadcrumbs: { ...breadcrumbs },
        MuiSlider: { ...slider },
        MuiAvatar: { ...avatar },
        MuiTooltip: { ...tooltip },
        MuiAppBar: { ...appBar },
        MuiTabs: { ...tabs },
        MuiTab: { ...tab },
        MuiStepper: { ...stepper },
        MuiStep: { ...step },
        MuiStepConnector: { ...stepConnector },
        MuiStepLabel: { ...stepLabel },
        MuiStepIcon: { ...stepIcon },
        MuiSelect: { ...select },
        MuiFormControlLabel: { ...formControlLabel },
        MuiFormLabel: { ...formLabel },
        MuiCheckbox: { ...checkbox },
        MuiRadio: { ...radio },
        MuiAutocomplete: { ...autocomplete },
        MuiPopover: { ...popover },
        MuiButtonBase: { ...buttonBase },
        MuiIcon: { ...icon },
        MuiSvgIcon: { ...svgIcon },
        MuiLink: { ...link },
        MuiDialog: { ...dialog },
        MuiDialogTitle: { ...dialogTitle },
        MuiDialogContent: { ...dialogContent },
        MuiDialogContentText: { ...dialogContentText },
        MuiDialogActions: { ...dialogActions },
    },
});
