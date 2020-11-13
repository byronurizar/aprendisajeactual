import { types } from "../types/types";

const initialState = {
    usuarios: [],
    active: null
}

export const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.usuarioActivo:
            return {
                ...state,
                active: action.payload
            }

        case types.usuarioSet:
            return {
                ...state,
                usuarios: [...action.payload]
            }
        default:
            return state;
    }
}