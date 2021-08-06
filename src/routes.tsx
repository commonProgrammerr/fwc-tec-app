import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login-page';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" component={() => <h1>not found</h1> } />
      </Switch> 
    </BrowserRouter>
  )
}