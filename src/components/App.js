import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Routes/Home/';
import Orders from './Routes/Orders/';

const App = () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </div>
  </Router>
);

export default App;
