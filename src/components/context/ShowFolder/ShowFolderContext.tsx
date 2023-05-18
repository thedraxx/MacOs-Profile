import { createContext } from 'react';

type Proyect = {
    name: string;
    url: string;
}

export interface ShowFolderContextProps {
    isOpen: boolean;
    infoFolder: {
        title: string;
        description: string;
    };
    proyects: Proyect[];
    toggleShowFolder: (title: string, description: string, proyects?: Proyect[]) => void;
}

export const ShowFolderContext = createContext({} as ShowFolderContextProps);