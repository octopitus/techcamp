import 'babel-core/polyfill';
import './assets/styles.css';

import Router from 'react-router';
import React from 'react';
import routes from './routes';

// Once we bootstrap the stores, we run react-router using
// Router.HistoryLocation
// the element is created and we just render it into the container
// and our application is now live
Router.run(routes, Router.HistoryLocation, function (Handler) {
  var node = React.createElement(Handler);
  React.render(node, document.getElementById('app'));
});