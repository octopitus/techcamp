import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from 'components/App';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={require('components/home')} />
    <Route path="launch" handler={require('components/launch')} />
  </Route>
)

export default routes;
