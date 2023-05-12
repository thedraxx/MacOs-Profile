import { createContext } from 'react';

export interface ShowFolderContextProps {
    isOpen: boolean;
    infoFolder: {
        title: string;
        description: string;
    }

    toggleShowFolder: (title: string, description: string) => void;
}

export const ShowFolderContext = createContext({} as ShowFolderContextProps);