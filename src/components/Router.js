import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import Component from '.././components/Component';
import Character from '.././components/Character';

const routes = (
    <Router>
      <App>
        <Route exact path="/" component={App} />
        <Route path="/component" component={Component} />
        <Route exact path="/character" component={Character} />
      </App>
    </Router>
  );

export default routes;