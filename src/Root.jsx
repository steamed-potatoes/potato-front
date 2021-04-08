import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';

const Home = lazy(() => import('./page/home/Home'));
const Login = lazy(() => import('./page/login/Login'));
const GoogleCallback = lazy(() => import('./page/google/GoogleCallback'));
const SignUp = lazy(() => import('page/signUp/Signup'));
const MyPage = lazy(()=> import('./page/myPage/MyPage'))
const Main = lazy(() => import('page/main/Main'));
const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/auth/google/callback" component={GoogleCallback} />
            <Route path="/MyPage" component={MyPage} />
            <Route path="/Main" component={Main} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
