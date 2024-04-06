"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dairy() {
    const [filteredDairy, setFilteredDairy] = useState([]);
  
    useEffect(() => {
      const fetchDairy = async () => {
        try {
          const res = await axios.get("/api/stocklist");
          const dairys = res.data.filter(
            (item) => item.category.toLowerCase() === 'dairy'
          );
          setFilteredDairy(dairys);
        } catch (error) {
          console.log("Not found dairy");
        }
      };
      fetchDairy();
    }, []);
  
    return (
      <>
        <div className='max-w-xl p-2 mx-auto bg-green-300 mt-6 shadow-md rounded-lg'>
          <h2 className='text-center text-3xl font-semibold mb-5 underline'>
            Dairy Products
          </h2>
          <ul className='text-center text-lg font-semibold'>
            {filteredDairy.map((dairy, i) => (
              <li key={i} className='mb-8 px-4 py-2 border-b border-green-500'>
                <div className="flex flex-col">
                  <span className="text-xl font-bold mb-2">{dairy.itemName}</span>
                  <div className="flex justify-between">
                    <span className="font-semibold">Item Name:</span>
                    <span>{dairy.itemName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Unit:</span>
                    <span>{dairy.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Total Stock:</span>
                    <span>{dairy.totalStock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Purchase Amount:</span>
                    <span>{dairy.purchaseAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sell Amount:</span>
                    <span>{dairy.sellAmount}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  
  export default Dairy;
  

