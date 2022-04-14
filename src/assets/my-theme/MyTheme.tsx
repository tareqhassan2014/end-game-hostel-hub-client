import { createTheme } from '@mui/material/styles';
import { Shadows } from '@mui/material/styles/shadows';
import boxShadows from './base/boxShadows';
import breakpoints from './base/breakpoints';
import colors from './base/colors';

export default createTheme({
    breakpoints: { ...breakpoints },
    palette: { ...colors },
    shadows: [...boxShadows] as Shadows,
});
