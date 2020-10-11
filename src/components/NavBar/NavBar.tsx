import React from 'react';
import styles from './NavBar.module.scss';
import logo from '../../assets/logo.png';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../redux/menu/menuSlice';

const NavBar = () => {
  const dispatch = useDispatch();
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
      </button>
    </nav>
  );
};

export default NavBar;
