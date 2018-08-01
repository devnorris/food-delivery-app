import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import styled from 'react-emotion';
import { Button, Container, Icon, List, Segment } from 'semantic-ui-react';

import { deleteOrder } from '../../../redux/actions';
import Order from '../../Order';

const ListItem = styled(List.Item)`
  margin-bottom: 15px;
`;

const Orders = ({ orders, deleteOrder }) => {
  let orderList = 'No orders placed.';

  if (!isEmpty(orders)) {
    orderList = [];
    for (const [id, order] of Object.entries(orders)) {
      orderList.push(
        <ListItem key={id}>
          <List.Header>{id}</List.Header>
          <Order order={order} />
          <Button color="red" onClick={() => deleteOrder(id)}>
            <Icon name="remove circle" />Delete order
          </Button>
        </ListItem>
      );
    }
  }

  return (
    <Container textAlign="center">
      <h1>My Orders</h1>
      <Segment>
        <List as="ol">{orderList}</List>
      </Segment>
    </Container>
  );
};

export default connect(
  ({ orders }) => ({ orders }),
  { deleteOrder }
)(Orders);
