import { RootState } from '../store';

export const shopAvailableItemsSelector = ({ shop }: RootState) =>
  shop.filter((item) => item.availability);
