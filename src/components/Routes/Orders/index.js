import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import styled from 'react-emotion';
import { Button, Container, Icon, List, Segment } from 'semantic-ui-react';

import { deleteOrder, removeItem } from '../../../redux/actions';
import Order from '../../Order';

const StyledContainer = styled(Container)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ListItem = styled(List.Item)`
  margin-bottom: 15px;
`;

const Orders = ({ orders, deleteOrder, removeItem }) => {
  let orderList = 'No orders placed.';

  if (!isEmpty(orders)) {
    orderList = [];
    for (const [id, order] of Object.entries(orders)) {
      orderList.push(
        <ListItem key={id}>
          <List.Header>{id}</List.Header>
          <Order order={order} orderId={id} removeItem={removeItem} />
          <Button color="red" onClick={() => deleteOrder(id)}>
            <Icon name="remove circle" />Delete order
          </Button>
        </ListItem>
      );
    }
  }

  return (
    <StyledContainer textAlign="center">
      <h1>My Orders</h1>
      <Segment>
        <List as="ol">{orderList}</List>
      </Segment>
    </StyledContainer>
  );
};

export default connect(
  ({ orders }) => ({ orders }),
  { deleteOrder, removeItem }
)(Orders);
