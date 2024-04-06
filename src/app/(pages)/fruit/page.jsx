"use client"
import React, { useState, useEffect } from 'react';
 import axios from 'axios';



const Fruit = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/stocklist");
        const fruits = response.data.filter(item => item.category.toLowerCase() === 'fruit');
        setFilteredItems(fruits);
      } catch (error) {
        console.log("Fetching Error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className='max-w-lg p-2 mx-auto bg-green-300 mt-6 shadow-md rounded-lg'>
      <h2 className='text-center text-3xl font-semibold mb-5 underline'>Fruits</h2>
      <ul className='text-center text-lg font-semibold'>
        {filteredItems.map((item, index) => (
          <li key={index} className='mb-8 px-4 py-2 border-b border-green-500'>
            <div className="flex flex-col">
              <span className="text-xl font-bold mb-2">{item.itemName}</span>
              <div className="flex justify-between">
                <span className="font-semibold">Item Name:</span>
                <span>{item.itemName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Unit:</span>
                <span>{item.unit}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Total Stock:</span>
                <span>{item.totalStock}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Purchase Amount:</span>
                <span>{item.purchaseAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sell Amount:</span>
                <span>{item.sellAmount}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruit;
