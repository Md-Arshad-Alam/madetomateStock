import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { trashData } from "../appReduser/OrderSlice";

const Order = () => {
  const dispatch = useDispatch();

  const { orderList } = useSelector((state) => state.order); 

  const trashItem=(id)=>{
dispatch(trashData({id}))
  }

  return (
    <>
    <div>
    Total Orders
    </div>
    <div>
      {orderList.map((item) => (
        <div
          key={item.id}
          className="group border p-4 mb-4 rounded flex justify-between items-center relative"
        >
          <div className="text-left">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.stockExchange}</p>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-semibold">₹ {item.stockPrice}</h4>
            <p className={item.stockValueChange.includes("-")>0 ? "text-red-500": "text-green-500"}>
              {item.stockValueChange}
            </p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute top-6 inset-2/4 flex justify-center space-x-8 text-gray-600">
                <button  onClick={() => trashItem(item.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Order;
