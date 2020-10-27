import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';
import {
  cartItemsSelector,
  cartItemsTotalPriceSelector,
} from 'redux/cart/cartSelectors';
import { clearCart } from 'redux/cart/cartSlice';
import { RootState, CartState } from 'redux/store';

const Cart = () => {
  const cartItems = useSelector<RootState, CartState>(cartItemsSelector);
  const totalPrice = useSelector<RootState, number>(
    cartItemsTotalPriceSelector
  );

  const dispatch = useDispatch();

  return (
    <section className={styles.cartWrapper}>
      {cartItems.length ? (
        <>
          <h2>Your Cart</h2>
          <button
            className={styles.clearButton}
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
          <ul className={styles.cartItems}>
            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
          </ul>
          <div className={styles.total}>total: {totalPrice.toFixed(2)} PLN</div>
        </>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </section>
  );
};

export default Cart;
