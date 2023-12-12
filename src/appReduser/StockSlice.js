// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   orderList: [],
//   WatchListData: []
// };
// const stockSlice = createSlice({
//   name: 'stock',
//   initialState,
//   reducers: {
//     addStockData: (state, action) => {
//       // state.list.push(action.payload);
//     },
//   },
// });

// export const { addStockData } = stockSlice.actions;

// export default stockSlice.reducer;

// src/features/stockSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 100,
  sold: 25,
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
});

export default stockSlice.reducer;
