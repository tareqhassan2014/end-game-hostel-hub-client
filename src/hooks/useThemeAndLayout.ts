import { useMemo } from 'react';
import { selectCurrentTheme } from 'src/app/slices/theme/themeSlice';
import { useAppSelector } from './hooks';

const useThemeAndLayout = () => {
    const themeAndLayout = useAppSelector(selectCurrentTheme);
    return useMemo(() => themeAndLayout, [themeAndLayout]);
};

export default useThemeAndLayout;
