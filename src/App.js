import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LayoutProvider from './Provider/LayoutProvider';
import './App.css';

const Home = lazy(() => import('./Components/Home'));
const Contact = lazy(() => import('./Components/Contact'));
const NoResult = lazy(() => import('./Components/NoResult'));
const LoginForm = lazy(() => import('./Components/LoginForm'));
const PrivateRoute = lazy(() => import('./Routes/PrivateRoute'));

function App() {
  return (
    <Router>

      <LayoutProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>

            <Route path="/login" component={LoginForm} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/contact" component={Contact} />
            <Route component={NoResult} />
          </Switch>
        </Suspense>
      </LayoutProvider>

    </Router>
  );
}

export default App;
