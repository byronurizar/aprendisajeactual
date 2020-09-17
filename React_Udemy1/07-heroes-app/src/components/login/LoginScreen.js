import React, { useContext } from 'react';
import { AutContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AutContext)
    const handleLgoin = () => {
        //history.push('/'); //Al momento de hacer push el navegaro mostrara esa ruta
        // history.replace('/'); //Haciendo el replace el navegador hace de cuentas que fue esta ruta con la que inicio
        const lastPath=localStorage.getItem('lastPath') || '/';
        const action = {};
        action.payload = {
            name: 'Byron López Urizar'
        };
        action.type = types.login;

        dispatch(action);
        history.replace(lastPath); 
    }
    return (
        <div className="container mt-g">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary" onClick={handleLgoin}
            >
                Login
            </button>
        </div>
    )
}
