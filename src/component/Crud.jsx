import React, { useState } from 'react';
import ReactBarcode from 'react-barcode';

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../appReduser/CrudSlice';

const Crud = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [input, setInput] = useState({
    name: '',
    age: '',
    barcodeValue: '',
  });
  const dispatch = useDispatch();

  const { list } = useSelector((item) => item.crud);
  console.log(list);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    dispatch(addUser(input));
    
    // Generate the barcode value (string) for display
    const barcodeStringValue = generateBarcode(input.barcodeValue);
    
    // Set the barcode value in the state
    setBarcodeValue(barcodeStringValue);
    
    // Clear the input fields
    setInput({ name: '', age: '', barcodeValue: '' });
  };

  const generateBarcode = (value) => {
    // You can customize the barcode properties here (width, height, etc.)
    return value;
  };

  const closeBtn = ()=>{
    onclose();
  }

  return (
    <>
      <div>
        <div className="border border-bc w-100 h-500 w-[577px] h-[320px] p-8 rounded-xl m-auto fixed inset-0 bg-white shadow-lg ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl">Create User</h2>
            <button onClick={closeBtn}>Close</button>
          </div>

          <input
            className="inputdata"
            type="name"
            name="name"
            value={input.name}
            placeholder="Enter the name"
            onChange={handleChange}
          />
          <br />
          <input
            className="inputdata"
            type="number"
            name="age"
            value={input.age}
            placeholder="Enter the age"
            onChange={handleChange}
          />
          <br />
          <input
            className="inputdata"
            type="text"
            name="barcodeValue"
            value={input.barcodeValue}
            placeholder="Enter the barcode number"
            onChange={handleChange}
          />

          <div className="text-right absolute right-3 bottom-3 ">
            <button
              className="bg-sky-600 hover:bg-sky-700 px-3 py-1 m-4 text-white rounded-md font-semibold"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {list.map((item, index) => (
        <div key={index}>
          <ul>
            <li>{item.name}</li>
            <li>{item.age}</li>
          </ul>
        </div>
      ))}

      {barcodeValue && <ReactBarcode value={barcodeValue} />}
    </>
  );
};

export default Crud;
