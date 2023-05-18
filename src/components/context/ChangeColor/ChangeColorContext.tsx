import { createContext } from 'react';

export interface UIContextProps {
    colorActive: string;

    handleChangeColor: (color: string) => void;
}

export const ChangeColorContext = createContext({} as UIContextProps);