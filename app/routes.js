import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from 'components/App';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={require('components/home')} />
    <Route name="welcome" handler={require('components/welcome')} />
  </Route>
)

export default routes;
