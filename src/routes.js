import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/App';
import Index from "./components/page/Index";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
  </Route>
);
