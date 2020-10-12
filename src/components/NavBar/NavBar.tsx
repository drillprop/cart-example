import React from 'react';
import styles from './NavBar.module.scss';
import logo from '../../assets/logo.png';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/menu/menuSlice';
import { RootState } from '../../redux/store';
import { cartItemsLengthSelector } from '../../redux/cart/cartSelectors';

const NavBar = () => {
  const dispatch = useDispatch();
  const cartLength = useSelector<RootState, number>(cartItemsLengthSelector);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>
        <img src={logo} alt='logo' className={styles.logoImg} />
        Hot Deals
      </h1>
      <button
        aria-label='Show Cart'
        className={styles.cartButton}
        onClick={() => dispatch(toggleCart())}
      >
        <CartIcon />
        <span aria-label='items in Cart' className={styles.itemsInCart}>
          {cartLength}
        </span>
      </button>
    </nav>
  );
};

export default NavBar;
