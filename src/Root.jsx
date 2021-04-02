import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './libs/store/modules';
import Example from 'page/Example';

const Home = lazy(() => import('./page/home/Home'));
const Login = lazy(() => import('./page/login/Login'));
const GoogleCallback = lazy(() => import('./page/google/GoogleCallback'));
const TodoList = lazy(() => import('./page/study/TodoList'));

const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/auth/google/callback" component={GoogleCallback} />
            <Route path="/Example" component={Example} />
            <Route path="/TodoList" component={TodoList} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
