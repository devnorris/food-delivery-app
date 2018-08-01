import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Routes/Home/';
import Orders from './Routes/Orders/';

const App = () => (
  <Router>
    <div>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
