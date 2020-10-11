import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import Products from '../../components/Products/Products';
import { RootState } from '../../redux/store';
import styles from './Shop.module.scss';

const Shop = () => {
  const isCartVisible = useSelector<RootState>(
    ({ menu }) => menu.isCartVisible
  );
  return (
    <div className={styles.wrapper}>
      <Products />
      {isCartVisible && <Cart />}
    </div>
  );
};

export default Shop;
