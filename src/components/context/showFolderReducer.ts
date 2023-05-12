import { ShowFolderState } from './';

type ShowFolderActionType = 
  | {type: 'TOGGLE_SHOW_FOLDER', payload: {
        title: string,
        description : string,
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
                }
            }

        default:
            return state;
    }
}