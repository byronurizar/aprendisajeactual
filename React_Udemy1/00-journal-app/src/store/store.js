import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { usuarioReducer } from '../reducers/usuarioReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    usuarios: usuarioReducer
});

export const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);


    //Se agrego la segunda linea para ver las herramientas de redux
