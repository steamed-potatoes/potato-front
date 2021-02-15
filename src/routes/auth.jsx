import GoogleCallback from 'page/google/GoogleCallback';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/google/callback" component={GoogleCallback} />
    </Switch>
  );
};

export default AuthRoutes;
