import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Loading } from 'components/Loading';

import rootReducer from './store/modules';

const Login = lazy(() => import('./page/login/Login'));
const GoogleCallback = lazy(() => import('./page/google/GoogleCallback'));
const SignUp = lazy(() => import('page/signUp/Signup'));
const MakeGroup = lazy(() => import('page/makeGroup/MakeGroupMain'));
const Main = lazy(() => import('page/main/Main'));
const MyPage = lazy(() => import('./page/myPage/MyPage'));
const NotFound = lazy(() => import('page/NotFound/NotFound'));
const BoardMain = lazy(() => import('page/board/BoardMain'));
const Search = lazy(() => import('page/main/BoardSearch'));
const GroupDetail = lazy(() => import('page/main/GroupDetail'));
const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/auth/google/callback" component={GoogleCallback} />
            <Route path="/makeGroup" component={MakeGroup} />
            <Route path="/Main" component={Main} />
            <Route path="/MyPage" component={MyPage} />
            <Route path="/Board/:boardId" component={BoardMain} />
            <Route path="/Search" component={Search} />
            <Route path="/groupDetail" component={GroupDetail} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
