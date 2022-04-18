import { useMemo } from 'react';
import { selectCurrentThemeAndLayout } from './../app/reducers/theme/themeAndLayout';
import { useAppSelector } from './hooks';

const useThemeAndLayout = () => {
    const themeAndLayout = useAppSelector(selectCurrentThemeAndLayout);
    return useMemo(() => ({ themeAndLayout }), [themeAndLayout]);
};

export default useThemeAndLayout;
