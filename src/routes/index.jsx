import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'page/home/Home';
import Blackboard from 'page/study/Blackboard'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blackboard" component={Blackboard} />
  </Switch>
);

export default Routes;
