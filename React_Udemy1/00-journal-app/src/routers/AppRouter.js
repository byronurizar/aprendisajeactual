import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { PrivateRoute } from '../routers/PrivateRoute';
import { PublicRoute } from '../routers/PublicRoute';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);
    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                    path='/auth' 
                    component={AuthRouter} 
                    isAuthenticated={isLoggedIn} />
                    <PrivateRoute
                        path=''
                        component={JournalScreen}
                        isAuthenticated={isLoggedIn} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
