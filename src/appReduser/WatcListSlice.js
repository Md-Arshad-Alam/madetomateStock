// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchListData: [],
};

const WatchListSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    addwatchList: (state, action) => {
      const { id } = action.payload;
      const existItem = state.watchListData.findIndex(item => item.id === id);

      if (existItem !== -1) {
        state.watchListData = state.watchListData.filter((item) => item.id !== id);
      } else {
        state.watchListData.push(action.payload);
      }
    },
    trashWatchListData:(state, action)=>{
      const {id} = action.payload
      state.watchListData= state.watchListData.filter((item)=>item.id !== id)

    }
  },
});

export const { addwatchList,trashWatchListData } = WatchListSlice.actions;

export default WatchListSlice.reducer;
