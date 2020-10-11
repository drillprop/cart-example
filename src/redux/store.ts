import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shop/shopSlice';
import cartReducer from './cart/cartSlice';
import menuReducer from './menu/menuSlice';

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    menu: menuReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type ShopState = RootState['shop'];
export type CartState = RootState['cart'];

export default store;
