import { ShowFolderState } from './';

type ShowFolderActionType = 
  | {type: 'TOGGLE_SHOW_FOLDER'}

export const showFolderReducer = (state:ShowFolderState, action:ShowFolderActionType): ShowFolderState => {
    switch (action.type) {
        case 'TOGGLE_SHOW_FOLDER':

           return {
                ...state,
                isOpen: !state.isOpen
            }

        default:
            return state;
    }
}