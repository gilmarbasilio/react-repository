import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Repository from './pages/repository/Repository';
import Main from './pages/main/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
