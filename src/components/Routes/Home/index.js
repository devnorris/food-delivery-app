import React from 'react';
import { Container } from 'semantic-ui-react';

import Menus from './Menus';

const Home = () => (
  <Container textAlign="center">
    <h1>Restaurants & Menu</h1>
    <h2>Active Order</h2>
    <h2>Menu</h2>
    <Menus />
  </Container>
);

export default Home;
