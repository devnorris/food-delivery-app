import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import formatMoney from 'accounting-js/lib/formatMoney.js';
import { Accordion, Dimmer, List, Loader } from 'semantic-ui-react';

const FlexContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledList = styled(List)`
  text-align: left;
`;

class Menus extends React.Component {
  state = { activeIndex: -1 };

  handleTitleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    // close accordion if same title is clicked, else change active
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { loading, restaurants } = this.props;
    const { activeIndex } = this.state;

    return (
      <FlexContainer>
        <Dimmer active={loading}>
          <Loader content="Loading" />
        </Dimmer>

        <Accordion styled>
          {!loading &&
            restaurants.map((resto, i) => (
              <React.Fragment key={resto.id}>
                <Accordion.Title
                  index={i}
                  active={activeIndex === i}
                  onClick={this.handleTitleClick}
                >
                  {resto.name}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i}>
                  <StyledList selection divided size="big">
                    {resto.menu.map(menuItem => (
                      <List.Item
                        key={menuItem.name}
                        icon="add circle"
                        header={menuItem.name}
                        content={formatMoney(menuItem.price)}
                      />
                    ))}
                  </StyledList>
                </Accordion.Content>
              </React.Fragment>
            ))}
        </Accordion>
      </FlexContainer>
    );
  }
}

export default connect(({ loading, networkError, restaurants }) => ({
  loading,
  networkError,
  restaurants,
}))(Menus);
