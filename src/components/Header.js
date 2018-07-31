import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Container, Icon } from 'semantic-ui-react';

const Header = ({ location: { pathname } }) => {
  // check if the icon should link to home
  const toHome = pathname === '/orders';
  const item = {
    to: toHome ? '/' : '/orders',
    name: toHome ? 'home' : 'cart',
    title: toHome ? 'Restaurants & Menu' : 'My Orders',
  };

  return (
    <header>
      <Menu
        as="nav"
        color="teal"
        inverted
        borderless
        style={{ borderRadius: 0 }}
      >
        <Container>
          <Menu.Item as={Link} to="/">
            <Icon name="food" size="large" /> Food Delivery
          </Menu.Item>
          <Menu.Item position="right" as={Link} to={item.to}>
            <Icon name={item.name} size="large" title={item.title} />
          </Menu.Item>
        </Container>
      </Menu>
    </header>
  );
};

export default withRouter(Header);
