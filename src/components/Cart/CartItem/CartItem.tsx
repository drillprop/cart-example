import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CartItemType,
  removeItemFromCart,
  decreaseItemInCart,
  increaseItemInCart,
} from 'redux/cart/cartSlice';

import styles from './CartItem.module.scss';

type Props = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: Props) => {
  const dispatch = useDispatch();
  const fullPrice = (
    cartItem.price && cartItem.price * cartItem.quantity
  )?.toFixed(2);

  return (
    <li className={styles.item} key={cartItem.id}>
      <button
        title={`Remove ${cartItem.title} from cart`}
        className={styles.deleteButton}
        onClick={() => dispatch(removeItemFromCart(cartItem.id))}
      >
        &times;
      </button>
      <img src={cartItem.cover} alt={cartItem.title} />
      <div className={styles.itemDetails}>
        <h2 className={styles.itemTitle}>{cartItem.title}</h2>
        <div className={styles.itemCount}>
          <button
            title={`Decrease quantity of ${cartItem.title} in cart`}
            className={styles.quantityButton}
            onClick={() => dispatch(decreaseItemInCart(cartItem.id))}
          >
            &lt;
          </button>
          <span>{cartItem.quantity}</span>
          <button
            title={`Increase quantity of ${cartItem.title} in cart`}
            className={styles.quantityButton}
            onClick={() => dispatch(increaseItemInCart(cartItem.id))}
          >
            &gt;
          </button>
        </div>
        <div className={styles.itemFullPrice}>{fullPrice} PLN</div>
      </div>
    </li>
  );
};

export default CartItem;
