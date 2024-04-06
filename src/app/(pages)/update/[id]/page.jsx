"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Page({ params }) {
    const [ItemId, setItemId] = useState(params.id);
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [unit, setUnit] = useState('');
    const [error, setError] = useState(null);
  

    useEffect(() => {
        const getGroData = async () => {
            try {
                const res = await axios.post('/api/update', { ItemId });
                setItem(res.data.item);
                setCategory(res.data.category);
                setUnit(res.data.unit);
            } catch (error) {
                setError(error.message || 'An error occurred');
            }
        };

        getGroData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
    // const notify = () => toast("Wow so easy!");
    const handleSubmit = async (e) => {
        e.preventDefault();

        let newGrocery = {
           id:ItemId,
            newItem: item,
            newCategory: category,
            newUnit: unit
        };
        await axios.post("/api/saveupdate", newGrocery).then(res => {
            // console.log("Updated Grocery item!")
            // toast.success("Stock Updated!");
            // location.href = "/stock"
        })
        //  location.href = "/stock"
    }

    return (
        <>
            <div className="p-4 max-w-md mx-auto bg-green-300 mt-8 rounded-lg shadow-lg">
                <div className="mb-4 bg-green-500 p-2 text-center rounded-md text-xl text-green-200">
                    Update Stock
                </div>
                <div className='mt-2 mb-4 text-red-500 font-semibold text-center'>
                    prevoius Item: {item} and Category: {category} and Unit {unit}
                </div>
                <form onSubmit={handleSubmit} className='mb-4'>
                    <input type="hidden" value={ItemId} />
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-green-600'>Enter new item</label>
                        <input type="text" value={item}
                            onChange={(e) => setItem(e.target.value)}
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
                    <button type="submit" className='px-8 py-1 bg-orange-700 text-white font-semibold rounded-md'>Save Changes</button>
                </form>
                {/* <ToastContainer /> */}
            </div>
        </>
    );
}

export default Page;
