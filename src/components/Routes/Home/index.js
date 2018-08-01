import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import { Button, Icon, Container, Segment } from 'semantic-ui-react';

import { placeOrder } from '../../../redux/actions';
import Order from '../../Order';
import Menus from './Menus';

class Home extends React.Component {
  handlePlaceOrder = () => {
    const { activeOrder, orderId, placeOrder } = this.props;
    if (!isEmpty(activeOrder)) {
      placeOrder(orderId, activeOrder);
    }
  };

  render() {
    return (
      <Container textAlign="center">
        <h1>Restaurants & Menu</h1>
        <h2>Active Order</h2>
        <Segment>
          <Order order={this.props.activeOrder} />
          <Button color="teal" onClick={this.handlePlaceOrder}>
            <Icon name="cart plus" /> Place Order
          </Button>
        </Segment>
        <h2>Menu</h2>
        <Menus />
      </Container>
    );
  }
}

export default connect(
  ({ activeOrder, orderId }) => ({
    activeOrder,
    orderId,
  }),
  { placeOrder }
)(Home);
