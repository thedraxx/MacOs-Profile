import { useReducer } from 'react';
import { ShowFolderContext, showFolderReducer } from './';

export interface ShowFolderState {
    isOpen: boolean;
    infoFolder: {
        title: string;
        description: string;
    }
}

const ShowFolder_INITIAL_STATE: ShowFolderState = {
    isOpen: false,
    infoFolder: {
        title: '',
        description: ''
    }
};

interface Props {
    children: React.ReactNode;
}

export const ShowFolderProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(showFolderReducer, ShowFolder_INITIAL_STATE)


    const toggleShowFolder = (title: string = "", description: string = "") => {
        dispatch({
            type: 'TOGGLE_SHOW_FOLDER',
            payload: {
                title,
                description
            }
        })
    }


    return (
        <ShowFolderContext.Provider value={{
            ...state,
            toggleShowFolder
        }}>
            {children}
        </ShowFolderContext.Provider>
    )
}