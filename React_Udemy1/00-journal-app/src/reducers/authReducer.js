import { types } from "../types/types";
/*
    {
        uid:'adfasdfasfda555asdf',
        name:'Byron'
    }
*/


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {
                uid: '',
                name: ''
            }
        default:
            return state;
    }
}