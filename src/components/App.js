import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Routes/Home/';
import Orders from './Routes/Orders/';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/orders" component={Orders} />
    </Switch>
  </Router>
);

export default App;
