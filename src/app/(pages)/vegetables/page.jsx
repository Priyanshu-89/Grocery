
"use client"

// Assuming you have Tailwind CSS installed and configured in your project

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vegetables() {
    const [filteredvegs, setFilteredVegs] = useState([]);

    useEffect(() => {
        const fetchVegs = async () => {
            try {
                const res = await axios.get("/api/stocklist");
                const vegs = res.data.filter(item => item.category.toLowerCase() === 'vegetables');
                setFilteredVegs(vegs);
            } catch (error) {
                console.error("Error fetching vegetables", error);
            }
        };

        fetchVegs();
    }, []);

    return (
        <div className='max-w-xl p-2 mx-auto bg-green-300 mt-6 shadow-md shadow-green-200 rounded-lg'>
            <h2 className='text-center text-3xl font-semibold mb-5 underline'>Vegetables</h2>
            <ul className='text-center text-lg font-semibold'>
                {filteredvegs.map((vegetable, i) => (
                    <li key={i} className='mb-8 px-4 py-2 border-b border-green-500'>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold mb-2">{vegetable.itemName}</span>
                            <div className="flex justify-between">
                                <span className="font-semibold">Item Name:</span>
                                <span>{vegetable.itemName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Unit:</span>
                                <span>{vegetable.unit}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Total Stock:</span>
                                <span>{vegetable.totalStock}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Purchase Amount:</span>
                                <span>{vegetable.purchaseAmount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Sell Amount:</span>
                                <span>{vegetable.sellAmount}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Vegetables;
