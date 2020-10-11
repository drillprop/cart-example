import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CartItemType,
  decreaseItemInCart,
  increaseItemInCart,
  removeItemFromCart,
} from '../../../redux/cart/cartSlice';

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
            className={styles.quantityButton}
            onClick={() => dispatch(decreaseItemInCart(cartItem.id))}
          >
            &lt;
          </button>
          <span>{cartItem.quantity}</span>
          <button
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
