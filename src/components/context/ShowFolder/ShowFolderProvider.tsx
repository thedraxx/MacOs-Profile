import { useReducer } from 'react';
import { ShowFolderContext, showFolderReducer } from './';

type Proyect = {
    name: string;
    url: string;
}
export interface ShowFolderState {
    isOpen: boolean;
    infoFolder: {
        title: string;
        description: string;
    }
    proyects: any[];
}

const ShowFolder_INITIAL_STATE: ShowFolderState = {
    isOpen: false,
    infoFolder: {
        title: '',
        description: ''
    },
    proyects: []
};

interface Props {
    children: React.ReactNode;
}

export const ShowFolderProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(showFolderReducer, ShowFolder_INITIAL_STATE)

    const toggleShowFolder = (title: string = "", description: string = "", proyects?: Proyect[]) => {

        dispatch({
            type: 'TOGGLE_SHOW_FOLDER',
            payload: {
                title,
                description,
                proyects: !proyects ? [] : proyects
            }
        })
    }

    return (
        <ShowFolderContext.Provider value={{
            ...state,
            toggleShowFolder,
        }}>
            {children}
        </ShowFolderContext.Provider>
    )
}