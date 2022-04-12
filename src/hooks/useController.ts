import { useMemo } from 'react';
import { useMaterialUIController } from 'src/app/reducers/mui/muiSlice';
import { useAppSelector } from './hooks';

const useController = () => {
    const controller = useAppSelector(useMaterialUIController);
    return useMemo(() => ({ controller }), [controller]);
};

export default useController;
