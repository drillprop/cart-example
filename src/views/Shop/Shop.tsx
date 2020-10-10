import React from 'react';
import Cart from '../../components/Cart/Cart';
import Products from '../../components/Products/Products';
import styles from './Shop.module.scss';

const Shop = () => {
  return (
    <div className={styles.wrapper}>
      <Products />
      <Cart />
    </div>
  );
};

export default Shop;
