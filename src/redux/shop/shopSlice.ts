import { createSlice } from '@reduxjs/toolkit';
import items from 'data/items.json';

const initialState = items;
export type ProductType = typeof initialState[0];

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
