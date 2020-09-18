import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import { JournalScree } from '../components/journal/JournalScree';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route
                        path="/"
                        exact
                        component={JournalScree}
                    />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}
