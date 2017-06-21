import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactDOM from 'react-dom';
import App from './App';
import BackgroundCheckPage from './components/BackgroundCheckPage';
import ConfirmationPage from './components/ConfirmationPage';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/backgroundCheck' component={BackgroundCheckPage}/>
      <Route exact path='/confirmationPage' component={ConfirmationPage}/>
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
