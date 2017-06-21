import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/Dashboard';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/dashboard' component={Dashboard}/>
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
