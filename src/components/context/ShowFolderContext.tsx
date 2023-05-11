import { createContext } from 'react';

export interface ShowFolderContextProps {
    isOpen: boolean;

    toggleShowFolder: () => void;
}

export const ShowFolderContext = createContext({} as ShowFolderContextProps);