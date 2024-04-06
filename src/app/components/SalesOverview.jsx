import Link from 'next/link';
import React from 'react';

const SalesOverview = () => {


    return (
        <div className="bg-green-100 mt-4  p-4 m-4 rounded shadow ">
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
           
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <p className="text-gray-600 mb-2 md:mb-0">Total Revenue: $100,000</p>
                <p className="text-green-500">+15% from last month</p>
            </div>

            <div className=" md:grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-200 p-4 rounded shadow">
                    <p className="text-lg font-semibold mb-2">Top Selling Products</p>

                    <ul>
                        <li>Milk</li>
                        <li>Patato</li>
                        <li>Paneer</li>
                    </ul>
                </div>

                <div className="bg-yellow-200 p-4 rounded shadow">
                    <p className="text-lg font-semibold mb-2">Monthly Sales Chart</p>

                    <div className="bar-chart">

                    </div>
                </div>

                <div className="bg-green-200 p-4 rounded shadow">
                    <p className="text-lg font-semibold mb-2">Sales by Category</p>

                    <ul>
                        <li>Non-veg</li>
                        <li>Vegetables</li>
                        <li>Dairy</li>
                    </ul>
                </div>

                <div className="bg-purple-200 p-4 rounded shadow">
                    <p className="text-lg font-semibold mb-2">Customer Demographics</p>
                    <div className='grid grid-cols-2'>
                        <h3 className="text-md font-semibold mb-2">Age Distribution</h3>
                        <p>25-30+</p>
                        {/* <p>40-50+</p> */}
                        <h3 className="text-md font-semibold mb-2">Location Distribution</h3>
                        <p>Muzaffarpur</p>
                        {/* <p>Vaishali</p> */}
                    </div>


                </div>
            </div>
        </div>

    );
};

export default SalesOverview;
