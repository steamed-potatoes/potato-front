import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/home/Home';
import Login from 'containers/login/Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
