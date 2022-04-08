import { useContext } from 'react';
import { colorModeContext } from './ColorContextProvider ';

export const useStyle = () => {
    return useContext(colorModeContext);
};
