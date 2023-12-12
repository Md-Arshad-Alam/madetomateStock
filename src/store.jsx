import { configureStore } from "@reduxjs/toolkit";
import  addStockData  from "./appReduser/StockSlice";
import orderSlice from "./appReduser/OrderSlice";
import watchListSlice from "./appReduser/WatcListSlice";
import CrudSlice from "./appReduser/CrudSlice";

export const store = configureStore({
  reducer: {
    stockData: addStockData,
    order: orderSlice,
    watch: watchListSlice,
    crud:CrudSlice
  },
});
