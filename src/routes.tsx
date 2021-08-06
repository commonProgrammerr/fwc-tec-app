import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login-page';
import PedidosPage from './pages/pedidos-page';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/pedidos" component={PedidosPage} />
        <Route path="*" component={() => <h1>not found</h1> } />
      </Switch> 
    </BrowserRouter>
  )
}