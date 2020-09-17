import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

//Se creo para proter las rutas
//En los argumentos podemos utilizar ...rest lo que siginfica que nos va enviar el resto de argumentos
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath',rest.location.pathname);
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated) ?
                    (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )
            }
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}