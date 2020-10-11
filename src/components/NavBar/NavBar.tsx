import React from 'react';
import styles from './NavBar.module.scss';
import logo from '../../assets/logo.png';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/menu/menuSlice';
import { RootState } from '../../redux/store';

const NavBar = () => {
  const dispatch = useDispatch();
  const cartLength = useSelector<RootState, number>(({ cart }) =>
    cart.reduce((acc, current) => {
      acc += current.quantity;
      return acc;
    }, 0)
  );
  return (
    <nav className={styles.nav}>
      <h1>
        <img src={logo} alt='logo' />
        Hot Deals
      </h1>
      <button
        title='show cart'
        className={styles.cartButton}
        onClick={() => dispatch(toggleCart())}
      >
        <CartIcon />
        <span className={styles.itemsInCart}>{cartLength}</span>
      </button>
    </nav>
  );
};

export default NavBar;
