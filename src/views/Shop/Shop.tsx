import Cart from 'components/Cart/Cart';
import Products from 'components/Products/Products';
import React from 'react';
import { useSelector } from 'react-redux';
import { menuIsCartVisibleSelector } from 'redux/menu/menuSelectors';
import { RootState } from 'redux/store';

import styles from './Shop.module.scss';

const Shop = () => {
  const isCartVisible = useSelector<RootState>(menuIsCartVisibleSelector);
  return (
    <div className={styles.wrapper}>
      <Products />
      {isCartVisible && <Cart />}
    </div>
  );
};

export default Shop;
