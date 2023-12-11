// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orderList: [],
}
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const {id}= action.payload
      const existItem= state.orderList.findIndex((item)=>item.id === id)
      if (existItem !==-1) {
        state.orderList= state.orderList.filter((item)=>item.id !== id)
      } else {
        
        state.orderList.push(action.payload);
      }
    },
    trashData: (state,action)=>{
      const {id}= action.payload
      console.log(id);
      console.log(state);

      state.orderList= state.orderList.filter((item)=>item.id !== id)

    }
  },
});

export const { addOrder,trashData } = orderSlice.actions;

export default orderSlice.reducer;
