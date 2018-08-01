import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import styled from 'react-emotion';
import { Container, List, Segment } from 'semantic-ui-react';

import Order from '../../Order';

const ListItem = styled(List.Item)`
  margin-bottom: 15px;
`;

const Orders = ({ orders }) => {
  let orderList = 'No orders placed.';

  if (!isEmpty(orders)) {
    orderList = [];
    for (const [id, order] of Object.entries(orders)) {
      orderList.push(
        <ListItem key={id}>
          <List.Header>{id}</List.Header>
          <Order order={order} />
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

export default connect(({ orders }) => ({ orders }))(Orders);
