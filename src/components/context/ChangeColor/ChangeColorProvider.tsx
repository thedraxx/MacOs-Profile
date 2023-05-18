import { useReducer } from 'react';
import { ChangeColorContext, ChangeColorReducer } from './';

export interface ChangeColorState {
    colorActive: string;
}

const ChangeColor_INITIAL_STATE: ChangeColorState = {
    colorActive: '#E91E63',
};

interface Props {
    children: React.ReactNode;
}

export const ChangeColorProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(ChangeColorReducer, ChangeColor_INITIAL_STATE)

    const handleChangeColor = (color: string) => {
        dispatch({
            type: '[ChangeColor] - changeActiveColor',
            payload: color
        })
    }


    return (
        <ChangeColorContext.Provider value={{
            ...state,
            handleChangeColor
        }}>
            {children}
        </ChangeColorContext.Provider>
    )
}
