import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css"
import "./global.css"
// import Badge from './components/Badge';
// import Badgenew from './pages/Badgenew';
//import Badges from './pages/Badges';
import App from './components/App';

const container = document.getElementById('app');

// ReactDOM.render(<Badge
//                 firsName="Byron" 
//                 lastName="López" 
//                 avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//                 jobTitle="Frontend Enginner" 
//                 twitter="bluurizar"/>,
//                  container);

// ReactDOM.render(<Badgenew/>,
//      container);

// ReactDOM.render(<Badges/>,
//      container);

     ReactDOM.render(<App/>,
          container);