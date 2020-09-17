import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

//Se creo para proter las rutas
//En los argumentos podemos utilizar ...rest lo que siginfica que nos va enviar el resto de argumentos
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticated) ?
                    (<Component {...props} />)
                    : (<Redirect to="/" />)
            )
            }
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}