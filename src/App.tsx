import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from './pages/wrapper/login';
import { routes } from './utils/routes';

const Home = lazy(() => import('./pages/home'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path={routes.home()} children={<Home />} exact />
          <Route
            path={routes.wrapper._()}
            children={<Redirect to={routes.wrapper.login()} />}
            exact
          />
          <Route path={routes.wrapper.login()} children={<Login />} exact />
          <Route path="*" children={<h1>Not Found</h1>} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
