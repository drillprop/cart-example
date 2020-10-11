import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, ShopState } from '../../redux/store';
import styles from './Products.module.scss';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {
  const availableItems = useSelector<RootState, ShopState>(({ shop }) =>
    shop.filter((item) => item.availability)
  );
  return (
    <section className={styles.productsWrapper}>
      <h2>Available Games</h2>
      <ul className={styles.products}>
        {availableItems.map((productItem) => (
          <SingleProduct key={productItem.id} productItem={productItem} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
