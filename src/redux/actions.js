// API REQUEST
export const RESTAURANTS_REQUESTED = 'RESTAURANTS_REQUESTED';
export const RESTAURANTS_RESOLVED = 'RESTAURANTS_RESOLVED';
export const RESTAURANTS_REJECTED = 'RESTAURANTS_REJECTED';

export const getRestaurants = () => ({ type: RESTAURANTS_REQUESTED });

// ADD ITEM TO ORDER
export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (name, price) => ({
  type: ADD_ITEM,
  payload: { name, price },
});

// REMOVE ITEM FROM ORDER
export const REMOVE_ITEM = 'REMOVE_ITEM';

// orderId 0 refers to active order
export const removeItem = (name, orderId) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      name,
      orderId,
    },
  };
};

// PLACE ORDER
export const PLACE_ORDER = 'PLACE_ORDER';

export const placeOrder = (id, order) => ({
  type: PLACE_ORDER,
  payload: {
    id,
    order,
  },
});

// DELETE ORDER
export const DELETE_ORDER = 'DELETE_ORDER';

export const deleteOrder = id => ({
  type: DELETE_ORDER,
  payload: id,
});
