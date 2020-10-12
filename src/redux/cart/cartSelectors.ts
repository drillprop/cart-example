import { RootState } from '../store';
import { CartItemType } from './cartSlice';

export const cartItemsSelector = ({ cart }: RootState) => cart;

export const cartItemsTotalPriceSelector = ({ cart }: RootState) =>
  cart.reduce((acc, current) => {
    acc += (current.price || 0) * current.quantity;
    return acc;
  }, 0);

export const cartItemsLengthSelector = ({ cart }: RootState) =>
  cart.reduce((acc: number, current: CartItemType) => {
    acc += current.quantity;
    return acc;
  }, 0);
