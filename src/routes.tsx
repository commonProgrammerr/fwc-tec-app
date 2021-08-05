import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={() => <h1>not found</h1> } />
      </Switch> 
    </BrowserRouter>
  )
}