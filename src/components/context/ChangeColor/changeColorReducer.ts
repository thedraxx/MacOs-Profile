import { ChangeColorState } from '.';

type ChangeColorActionType = 
  | {type: '[ChangeColor] - changeActiveColor', payload: string}

export const ChangeColorReducer = (state:ChangeColorState, action:ChangeColorActionType): ChangeColorState => {
    switch (action.type) {
        case '[ChangeColor] - changeActiveColor':

           return {
                ...state,
                colorActive: action.payload
            }

        default:
            return state;
    }
}