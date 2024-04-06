"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NonVeg() {
  const [nonVegData, setNonVegData] = useState([]);

  useEffect(() => {
    const fetchNonVegs = async () => {
      try {
        const res = await axios.get("/api/stocklist");
        const nonvegs = res.data.filter(
          (item) => item.category.toLowerCase() === 'non-veg'
        );
        setNonVegData(nonvegs);
      } catch (error) {
        console.log("Not found non-vegs");
      }
    };
    fetchNonVegs();
  }, []);

  return (
    <>
      <div className='max-w-xl p-2 mx-auto bg-green-300 mt-6 shadow-md shadow-green-200 rounded-lg'>
        <h2 className='text-center text-3xl font-semibold mb-5 underline'>
          Non-veg Products
        </h2>
        <ul className='text-center text-lg font-semibold'>
          {nonVegData.map((non, i) => (
            <li className='mb-6 px-4' key={i}>
              <div className='flex flex-col mb-1'>
                <p className='text-xl font-bold'>{non.itemName}</p>
                <p>
                  <span className='font-semibold text-lg'>Unit:</span> {non.unit}
                </p>
                <p>
                  <span className='font-semibold'>Total Stock:</span>{' '}
                  {non.totalStock}
                </p>
                <p>
                  <span className='font-semibold'>Purchase Amount:</span>{' '}
                  {non.purchaseAmount}
                </p>
                <p>
                  <span className='font-semibold'>Sell Amount:</span>{' '}
                  {non.sellAmount}
                </p>
              </div>
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NonVeg;
