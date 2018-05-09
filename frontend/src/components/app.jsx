//React
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

//Components
import { AuthRoute, ProtectedRoute } from './util/route_util';
import LandingPage from './landing_page/landing_page';
import Login from './auth/login_form';
import SignUp from './auth/signup_form';
// import Main from './main/main';

const App = () => {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <AuthRoute exact path='/login' component={ Login } />
        <AuthRoute exact path='/signup' component={ SignUp } />
      </Switch>
    </div>
  );
};

export default App;
