import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.product.some((product) => product.id === action.payload.id)) {
        state.product[action.payload.id - 1].quantity += 1;
      } else {
        state.product.push(action.payload);
      }
    },
    clean: (state) => {
      state.product = [];
    },
  },
});

export const { add, clean } = cartSlice.actions;
export default cartSlice.reducer;
