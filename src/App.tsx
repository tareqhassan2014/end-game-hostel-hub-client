import { PaletteMode, useMediaQuery } from '@mui/material';
import { blueGrey, grey, indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useThemeAndLayout from './hooks/useThemeAndLayout';
import appBar from './theme/components/appBar';
import avatar from './theme/components/avatar';
import breadcrumbs from './theme/components/breadcrumbs';
import button from './theme/components/button';
import buttonBase from './theme/components/buttonBase';
import card from './theme/components/card/card';
import cardContent from './theme/components/card/cardContent';
import cardMedia from './theme/components/card/cardMedia';
import dialog from './theme/components/dialog/dialog';
import dialogActions from './theme/components/dialog/dialogActions';
import dialogContent from './theme/components/dialog/dialogContent';
import dialogContentText from './theme/components/dialog/dialogContentText';
import dialogTitle from './theme/components/dialog/dialogTitle';
import divider from './theme/components/divider';
import autocomplete from './theme/components/form/autocomplete';
import checkbox from './theme/components/form/checkbox';
import formControlLabel from './theme/components/form/formControlLabel';
import input from './theme/components/form/input';
import inputLabel from './theme/components/form/inputLabel';
import inputOutlined from './theme/components/form/inputOutlined';
import radio from './theme/components/form/radio';
import select from './theme/components/form/select';
import switchButton from './theme/components/form/switchButton';
import icon from './theme/components/icon';
import linearProgress from './theme/components/linearProgress';
import link from './theme/components/link';
import list from './theme/components/list/list';
import listItem from './theme/components/list/listItem';
import listItemText from './theme/components/list/listItemText';
import menu from './theme/components/menu/menu';
import menuItem from './theme/components/menu/menuItem';
import popover from './theme/components/popover';
import sidenav from './theme/components/sidenav';
import slider from './theme/components/slider';
import step from './theme/components/stepper/step';
import stepConnector from './theme/components/stepper/stepConnector';
import stepIcon from './theme/components/stepper/stepIcon';
import stepLabel from './theme/components/stepper/stepLabel';
import stepper from './theme/components/stepper/stepper';
import svgIcon from './theme/components/svgIcon';
import tableCell from './theme/components/table/tableCell';
import tableContainer from './theme/components/table/tableContainer';
import tableHead from './theme/components/table/tableHead';
import tab from './theme/components/tabs/tab';
import tabs from './theme/components/tabs/tabs';
import tooltip from './theme/components/tooltip';
import TheLayout from './views/TheLayout';

function App() {
    const {
        themeAndLayout: { mode },
    } = useThemeAndLayout();

    const getDesignTokens = (mode: PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                      // palette values for light mode
                      primary: indigo,
                      divider: indigo[200],
                      background: {
                          default: indigo[50],
                          paper: indigo[50],
                      },
                      text: {
                          primary: grey[900],
                          secondary: grey[800],
                      },
                  }
                : {
                      // palette values for dark mode
                      primary: blueGrey,
                      divider: blueGrey[700],
                      background: {
                          default: blueGrey[900],
                          paper: blueGrey[900],
                      },
                      text: {
                          primary: '#fff',
                          secondary: blueGrey[500],
                      },
                  }),
        },
        components: {
            MuiButton: { ...button },
            MuiDrawer: { ...sidenav },
            MuiList: { ...list },
            MuiListItem: { ...listItem },
            MuiListItemText: { ...listItemText },
            MuiCard: { ...card },
            MuiCardMedia: { ...cardMedia },
            MuiCardContent: { ...cardContent },
            MuiInput: { ...input },
            MuiInputLabel: { ...inputLabel },
            MuiOutlinedInput: { ...inputOutlined },
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

    let appMode: string = mode;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    if (!mode) {
        appMode = prefersDarkMode ? 'dark' : 'light';
    }

    // Update the theme only if the mode changes
    const theme = useMemo(
        () => createTheme(getDesignTokens(appMode as 'dark')),
        [appMode]
    );

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <TheLayout />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
