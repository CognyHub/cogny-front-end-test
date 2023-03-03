const INITIAL_STATE = {
  isFetching: false,
  products: [],
  errorMessage: '',
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'START_FETCH_PRODUCTS':
    return {
      isFetching: true,
      products: [],
      errorMessage: '',
    };
  case 'FETCH_SUCCESSFUL':
    return {
      isFetching: false,
      products: action.payload,
      errorMessage: '',
    };
  case 'FETCH_FAIL':
    return {
      isFetching: true,
      products: '',
      errorMessage: action.payload,
    };
  default:
    return state;
  }
}

export default productsReducer;
