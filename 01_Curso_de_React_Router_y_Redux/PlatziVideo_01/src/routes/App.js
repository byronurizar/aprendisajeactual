import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Player from '../components/Player';
import Home from '../containers/Home';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';
const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </Router>
);

export default App;