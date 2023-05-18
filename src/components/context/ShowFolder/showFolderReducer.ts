import { ShowFolderState } from './';

type Proyect = {
    name: string;
    url: string;
}

type ShowFolderActionType = 
  | {type: 'TOGGLE_SHOW_FOLDER', payload: {
        title: string,
        description : string,
        proyects?: Proyect[]
  }}

export const showFolderReducer = (state:ShowFolderState, action:ShowFolderActionType): ShowFolderState => {
    switch (action.type) {
        case 'TOGGLE_SHOW_FOLDER':

           return {
                ...state,
                isOpen: !state.isOpen,
                infoFolder: {
                    title: action.payload.title,
                    description: action.payload.description
                },
                proyects: !action.payload.proyects ? [] : action.payload.proyects
            }

        default:
            return state;
    }
}