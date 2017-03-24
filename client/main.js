import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Favlist from './components/favlist';
import Namegen from './components/namegen';

//the below will contain all of the mappings between the components that we want to display
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Namegen} />
      <Route path="/Favlist" component={Favlist} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render (routes, document.querySelector('.render-target'));
});
