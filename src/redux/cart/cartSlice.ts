import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from 'redux/shop/shopSlice';

export type CartItemType = ProductType & {
  quantity: number;
};

const initialState: CartItemType[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductType>) => {
      const { payload: newItem } = action;

      const existingItemIdx = state.findIndex((item) => item.id === newItem.id);

      if (existingItemIdx > -1) {
        state[existingItemIdx].quantity++;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const { payload: itemId } = action;

      return state.filter((item) => item.id !== itemId);
    },

    increaseItemInCart: (state, action: PayloadAction<number>) => {
      const { payload: itemId } = action;

      const existingItem = state.find((item) => item.id === itemId);
      if (!existingItem) return;

      existingItem.quantity++;
    },

    decreaseItemInCart: (state, action: PayloadAction<number>) => {
      const { payload: itemId } = action;

      const existingItem = state.find((item) => item.id === itemId);
      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        return state.filter((item) => item.id !== itemId);
      }
    },

    clearCart: () => {
      return [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemInCart,
  decreaseItemInCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
