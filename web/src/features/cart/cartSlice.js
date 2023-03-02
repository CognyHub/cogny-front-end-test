import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
    productAlreadyExistsInCard: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            if (state.product.some(({id}) => id === action.payload.id)) {
                state.productAlreadyExistsInCard = true;
            } else {
                state.product.push(action.payload);
            }
        },
    },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;