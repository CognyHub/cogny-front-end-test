const INITIAL_STATE = {
  cart: [],
  errorMessage: '',
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TO_CART':
    return { cart: [...state.cart, action.payload] };
  case 'CLEAN_CART':
    return { cart: [] };
  case 'ITEM_EXISTS_ON_CART':
    return {
      cart: [...state.cart],
      errorMessage: action.payload,
    };
  default:
    return state;
  }
}

export default cartReducer;
