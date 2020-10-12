import { RootState } from '../store';

export const menuIsCartVisibleSelector = ({ menu }: RootState) =>
  menu.isCartVisible;
