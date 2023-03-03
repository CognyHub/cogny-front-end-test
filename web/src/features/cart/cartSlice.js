import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [],
  productAlreadyExistsInCard: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.product.some(({ id }) => id === action.payload.id)) {
        state.product[action.payload.id - 1].quantity += 1;
      } else {
        state.product.push(action.payload);
      }
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
