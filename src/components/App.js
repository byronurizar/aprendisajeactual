import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Bagdes from '../pages/Badges';
import Badgenew from '../pages/Badgenew';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

const App=()=>{
return (
<BrowserRouter>
<Layout>
    <Switch>
    <Route exact path="/" component={Home}/>    
    <Route exact path="/badges" component={Bagdes}/>
    <Route exact path="/badges/new" component={Badgenew}/>
    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
    <Route component={NotFound}/>
    </Switch>
</Layout>
</BrowserRouter>
);
}

export default App;