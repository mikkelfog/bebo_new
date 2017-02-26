import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';

//the below will contain all of the mappings between the components that we want to display
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render (routes, document.querySelector('.render-target'));
});
