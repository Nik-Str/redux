import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { cart: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { value: initialStateValue },
  reducers: {
    add: (state, action) => {
      state.value = { cart: [...state.value.cart, action.payload] };
    },
    remove: (state) => {
      state.value = { cart: [...state.value.cart.slice(0, -1)] };
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
