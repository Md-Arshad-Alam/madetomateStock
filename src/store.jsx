import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./appReduser/CounterSlice";
import  addStockData  from "./appReduser/StockSlice";
import orderSlice from "./appReduser/OrderSlice";
import watchListSlice from "./appReduser/WatcListSlice";

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    stockData: addStockData,
    order: orderSlice,
    watch: watchListSlice
  },
});
