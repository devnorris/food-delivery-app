import React from 'react';
import styled from 'react-emotion';
import isEmpty from 'lodash.isempty';
import formatMoney from 'accounting-js/lib/formatMoney.js';
import { Icon, Table } from 'semantic-ui-react';

const FooterRow = styled(Table.Row)`
  font-weight: bold;
`;

const ClickableIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`;

class Order extends React.Component {
  state = {};
  render() {
    const { order, orderId, removeItem } = this.props;
    const rows = [];
    let total = 0;
    if (!isEmpty(order)) {
      for (const [name, { price, quantity }] of Object.entries(order)) {
        total += price * quantity;
        rows.push(
          <Table.Row key={name}>
            <Table.Cell>{quantity}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{formatMoney(price * quantity)}</Table.Cell>
            <Table.Cell textAlign="center">
              <ClickableIcon
                name="remove circle"
                size="large"
                color="red"
                onClick={() => removeItem(name, orderId)}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    }

    return (
      <Table unstackable selectable fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>QTY</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
          <FooterRow>
            <Table.Cell>Total:</Table.Cell>
            <Table.Cell />
            <Table.Cell>{formatMoney(total)}</Table.Cell>
            <Table.Cell />
          </FooterRow>
        </Table.Body>
      </Table>
    );
  }
}

export default Order;
