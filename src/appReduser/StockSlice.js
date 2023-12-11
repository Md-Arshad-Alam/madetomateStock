import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  orderList: [],
  WatchListData: []
};
const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addStockData: (state, action) => {
      // state.list.push(action.payload);
    },
  },
});

export const { addStockData } = stockSlice.actions;

export default stockSlice.reducer;