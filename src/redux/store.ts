import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shop/shopSlice';
import cartReducer from './cart/cartSlice';

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type ShopState = RootState['shop'];
export type CartState = RootState['cart'];

export default store;
