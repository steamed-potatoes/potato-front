import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'page/home/Home';
import Login from 'page/login/Login';
import Blackboard from 'page/study/Blackboard'
import AuthRoutes from './auth';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Login" component={Login} />
    <Route path="/auth" component={AuthRoutes} />
    <Route path="/blackbord" component={Blackboard} />
  </Switch>
);

export default Routes;
