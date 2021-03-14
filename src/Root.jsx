import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./page/home/Home'));
const Login = lazy(() => import('./page/login/Login'));
const GoogleCallback = lazy(() => import('./page/google/GoogleCallback'));
const ToDolist = lazy(() => import('./page/study/ToDoList'));

const Root = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/auth/google/callback" component={GoogleCallback} />
          <Route path="/ToDolist" component={ToDolist} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Root;
