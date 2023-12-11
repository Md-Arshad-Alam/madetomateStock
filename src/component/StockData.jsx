import React, { useEffect, useState } from "react";
import AllData from "../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../appReduser/OrderSlice";
import { addwatchList } from "../appReduser/WatcListSlice";

export function StockData() {
  const { orderList } = useSelector((state) => state.order);
  const { watchListData } = useSelector((state) => state.watch)
  const [orderListId, setOrderListId] = useState([])
  const [watchListId, setWatchListId] = useState([])


  const dispatch = useDispatch();

  const handleAdd = (data) => {
      dispatch(addOrder(data));
    }

  const WatchListHandle = (data) => {
    dispatch(addwatchList(data));
  };


  useEffect(() => {
    let orderId = orderList.map((item) => item.id)
    setOrderListId(orderId)
    let watchId = watchListData.map((item) => item.id)
    setWatchListId(watchId)

  }, [orderList, watchListData]);

  return (
    <div>

      {AllData.map((data, i) => (
        <div
          key={i}
          className="group border p-4 mb-4 rounded flex justify-between items-center relative"
        >
          <div className="text-left">
            <h3 className="text-xl font-semibold">{data.name}</h3>
            <p className="text-gray-600">{data.stockExchange}</p>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-semibold">₹ {data.stockPrice}</h4>
            <p
              className={
                data.stockValueChange.includes("-") > 0
                  ? "text-red-500"
                  : "text-green-500"}>
              {data.stockValueChange}
            </p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute top-6 inset-2/4 flex justify-center space-x-6 text-gray-600 text-20">
            <button
              className="text-black" 
              onClick={() => handleAdd(data)}
            >
              <i className={`fas fa-shopping-cart ${orderListId.includes(data.id) ? "text-red-500" : "text-black"}`}></i>
            </button>

            <button
              className="text-black "
              onClick={() => {WatchListHandle(data);}}
            >
              <i className={`fas fa-heart ${watchListId.includes(data.id) ? "text-red-500" : "text-black"}`}></i>
            </button>
          </div>
        </div>
      ))}
    </div>

  );
}
