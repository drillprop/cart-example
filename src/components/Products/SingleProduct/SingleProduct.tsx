import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from 'redux/cart/cartSlice';
import { ProductType } from 'redux/shop/shopSlice';

import styles from './SingleProduct.module.scss';

type Props = {
  productItem: ProductType;
};

const SingleProduct = ({ productItem }: Props) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.productItem} key={productItem.id}>
      <img
        className={styles.productImg}
        src={productItem.cover}
        alt={productItem.title}
      />
      <h3 className={styles.productTitle}>{productItem.title}</h3>
      <p className={styles.productPrice}>{productItem.price?.toFixed(2)} PLN</p>
      <button
        className={styles.addToCartButton}
        onClick={() => dispatch(addItemToCart(productItem))}
      >
        add to cart
      </button>
    </li>
  );
};

export default SingleProduct;
