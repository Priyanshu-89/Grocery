'use client'
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateStockPage({ params }) {
    const [ItemId, setItemId] = useState(params.id);
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [unit, setUnit] = useState('');
    const [sellAmount, setSellAmount] = useState('');
    const [purchaseAmount, setPurchaseAmount] = useState('');

    useEffect(() => {
        const getStockData = async () => {
            try {
                const res = await axios.post('/api/stockupdate', { ItemId })
                setItemName(res.data.itemName);
                setCategory(res.data.category);
                setUnit(res.data.unit);
                setSellAmount(res.data.sellAmount);
                setPurchaseAmount(res.data.purchaseAmount);
            } catch (error) {
                alert("Sorry !")
            }
        };
        getStockData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let stockData = {
            id: ItemId,
            newItem: itemName,
            newCategory: category,
            newUnit: unit,
            newSellPrice: sellAmount,
            newPurchasePrice: purchaseAmount
        };

        await axios.post("/api/savestockupdate", stockData).then(res => {
            toast.success("Stock Updated!");
            location.href = "/stockdata";
        });
    }

    return (
        <>
            <div className="p-4 max-w-md mx-auto bg-green-300 mt-8 rounded-lg shadow-lg">
                <div className="mb-4 bg-green-500 p-2 text-center rounded-md text-xl text-green-200">
                    Update Stock items
                </div>
                <div className='mt-2 mb-4 text-red-500 font-semibold text-center'>
                    Previous Item: {itemName}, Category: {category}, Unit: {unit}, Sell price: {sellAmount}, Purchase price: {purchaseAmount}
                </div>
                <form onSubmit={handleSubmit} className='mb-4'>
                    <input type="hidden" value={ItemId} />
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-green-600'>Enter new item</label>
                        <input type="text" value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className='mt-1 p-2 border rounded-md w-full'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-green-600'>Enter new Category</label>
                        <input type="text" value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='mt-1 p-2 border rounded-md w-full'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-green-600'>Enter new Unit</label>
                        <input type="text" value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className='mt-1 p-2 border rounded-md w-full'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-green-600'>Enter new sell Price</label>
                        <input type="text" value={sellAmount}
                            onChange={(e) => setSellAmount(e.target.value)}
                            className='mt-1 p-2 border rounded-md w-full'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-green-600'>Enter new Purchase Price</label>
                        <input type="text" value={purchaseAmount}
                            onChange={(e) => setPurchaseAmount(e.target.value)}
                            className='mt-1 p-2 border rounded-md w-full'
                        />
                    </div>
                    <button type="submit" className='px-8 py-1 bg-orange-700 text-white font-semibold rounded-md'>Save Changes</button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default UpdateStockPage;
