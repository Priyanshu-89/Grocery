'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function TopSales() {
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    const getTopSales = async () => {
      try {
        const response = await axios.get('/api/monthsale');
        const monthSales = response.data;

        console.log('Month Sales Data:', monthSales);

        // Calculate the number of times each product was sold
        const salesCountMap = monthSales.reduce((acc, sale) => {
          const { itemName } = sale;
          acc[itemName] = (acc[itemName] || 0) + 1;
          return acc;
        }, {});

        // Convert the salesCountMap to an array of objects
        const salesCountArray = Object.keys(salesCountMap).map((itemName) => ({
          itemName,
          salesCount: salesCountMap[itemName],
        }));

        // Sort the products based on sales count (descending order)
        const sortedTopSales = salesCountArray.sort((a, b) => b.salesCount - a.salesCount);

        setTopSales(sortedTopSales);
      } catch (error) {
        console.error('Error fetching top sales:', error);
      }
    };

    getTopSales();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-md md:text-2xl font-semibold mb-4">Top Selling Products This Month</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topSales.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
            <p className="text-lg font-semibold mb-2">Name: {product.itemName}</p>
            <p className="text-lg font-semibold mb-2">Sales Count: {product.salesCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSales;
