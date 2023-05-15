import { createContext } from 'react';

export interface ShowFolderContextProps {
    isOpen: boolean;
    infoFolder: {
        title: string;
        description: string;
    };
    proyects: string[];
    toggleShowFolder: (title: string, description: string, proyects?: string[]) => void;
}

export const ShowFolderContext = createContext({} as ShowFolderContextProps);