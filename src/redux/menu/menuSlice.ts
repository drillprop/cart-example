import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartVisible: false,
};

export const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const { toggleCart } = menu.actions;

export default menu.reducer;
