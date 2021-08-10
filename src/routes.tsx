import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login-page';
import PedidosPage from './pages/pedidos-page';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/pedidos" component={PedidosPage} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}