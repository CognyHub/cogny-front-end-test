const INITIAL_STATE = {
  isFetching: false,
  products: [],
  errorMessage: '',
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'START_FETCH_PRODUCTS':
    return {
      products: [],
      errorMessage: '',
    };
  case 'FETCH_SUCCESSFUL':
    return {
      products: action.payload,
      errorMessage: '',
    };
  case 'FETCH_FAIL':
    return {
      products: '',
      errorMessage: action.payload,
    };
  default:
    return state;
  }
}

export default productsReducer;
