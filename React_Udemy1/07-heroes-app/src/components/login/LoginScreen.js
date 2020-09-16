import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLgoin=()=>{
        //history.push('/'); //Al momento de hacer push el navegaro mostrara esa ruta
        history.replace('/'); //Haciendo el replace el navegador hace de cuentas que fue esta ruta con la que inicio
    }
    return (
        <div className="container mt-g">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary" onClick={handleLgoin}
                >
                    Login
            </button>
        </div>
    )
}
