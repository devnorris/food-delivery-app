import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import isEmpty from 'lodash.isempty';
import { Button, Icon, Container, Segment } from 'semantic-ui-react';

import { placeOrder, removeItem } from '../../../redux/actions';
import Order from '../../Order';
import Menus from './Menus';

const StyledContainer = styled(Container)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

class Home extends React.Component {
  handlePlaceOrder = () => {
    const { activeOrder, orderId, placeOrder } = this.props;
    if (!isEmpty(activeOrder)) {
      placeOrder(orderId, activeOrder);
    }
  };

  render() {
    const { activeOrder, removeItem } = this.props;
    return (
      <StyledContainer textAlign="center">
        <h1>Restaurants & Menu</h1>
        <h2>Active Order</h2>
        <Segment>
          <Order order={activeOrder} orderId={0} removeItem={removeItem} />
          <Button color="teal" onClick={this.handlePlaceOrder}>
            <Icon name="cart plus" /> Place Order
          </Button>
        </Segment>
        <h2>Menu</h2>
        <Menus />
      </StyledContainer>
    );
  }
}

export default connect(
  ({ activeOrder, orderId }) => ({
    activeOrder,
    orderId,
  }),
  { placeOrder, removeItem }
)(Home);
