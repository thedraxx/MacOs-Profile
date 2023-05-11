import { useReducer } from 'react';
import { ShowFolderContext, showFolderReducer } from './';

export interface ShowFolderState {
    isOpen: boolean;
}

const ShowFolder_INITIAL_STATE: ShowFolderState = {
    isOpen: false,
};

interface Props {
    children: React.ReactNode;
}

export const ShowFolderProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(showFolderReducer, ShowFolder_INITIAL_STATE)


    const toggleShowFolder = () => {
        dispatch({
            type: 'TOGGLE_SHOW_FOLDER',
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