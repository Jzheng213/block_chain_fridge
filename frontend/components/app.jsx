//React
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

//Components
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing_page/landing_page';
// import Main from './main/main';

const App = () => {
  return(
    <div>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
