import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'page/home/Home';
import Login from 'page/login/Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Login" component={Login} />
  </Switch>
);

export default Routes;
