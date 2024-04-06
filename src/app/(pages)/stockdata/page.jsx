"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Dbconnect from '@/app/mongodb/DbConnect';
import axios from 'axios';


function StockAddItem() {


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        await Dbconnect();
        // console.log(data)
        const stockData = {
            itemName: data.itemName,
            category: data.category,
            unit: data.unit,
            totalStock: data.totalStock,
            purchaseAmount: data.purchaseAmount,
            sellAmount: data.sellAmount
        }
        await axios.post("/api/stockdata", stockData).then(res => {
            // alert("Added Successfully")
            toast.success("New Stock inserted!");
        })
        reset();
    }
    return (
        <div className='mt-4 flex items-center justify-center flex-col gap-7'>


            <div className="bg-green-500 p-8 shadow-md rounded-md w-[17rem] md:w-[30rem] h-[43rem]">
                <h2 className="text-3xl font-semibold mb-4  text-green-50 flex items-center justify-center gap-1">Stock List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="flex items-center gap-1  font-medium text-lg text-green-50">Item Name</label>
                        <input type="text"
                            placeholder='Enter item name'
                            className="mt-1 p-2 border w-full rounded-md"
                            {...register("itemName", { required: true })}
                        />
                        {
                            errors.itemName?.type == 'required' && <p className='text-red-500 font-semibold'>Please fill the field</p>
                        }
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center gap-1  font-medium text-lg text-green-50">Total Stock Entry</label>
                        <input type="text"
                            placeholder='Total Stock Enter'
                            className="mt-1 p-2 border w-full rounded-md"
                            {...register("totalStock", { required: true })}
                        />
                        {
                            errors.totalStock?.type == 'required' && <p className='text-red-500 font-semibold'>Please fill the field</p>
                        }
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center gap-1  font-medium text-lg text-green-50">Purchase Amount</label>
                        <input type="text"
                            placeholder='Enter purchase Amount'
                            className="mt-1 p-2 border w-full rounded-md"
                            {...register("purchaseAmount", { required: true })}
                        />
                        {
                            errors.purchaseAmount?.type === 'required' && <p className='text-red-500 font-semibold'>Please fill the field</p>
                        }

                    </div>
                    <div className="mb-4">
                        <label className="flex items-center gap-1  font-medium text-lg text-green-50">Sells Amount</label>
                        <input type="text"
                            placeholder='Enter sell amount'
                            className="mt-1 p-2 border w-full rounded-md"
                            {...register("sellAmount", { required: true })}
                        />
                        {
                            errors.sellAmount?.type == 'required' && <p className='text-red-500 font-semibold'>Fill sell amount</p>

                        }
                    </div>
                    <div className="mb-4">
                        <label className="flex gap-1 items-center  font-medium text-lg text-green-50">Category</label>
                        <input
                            {...register("category", { required: true })}
                            type="text"
                            className="mt-1 p-2 border w-full rounded-md"

                            placeholder="Enter category"
                        />
                        {
                            errors.category?.type == 'required' &&
                            <p className='text-red-500'>This field is required.</p>
                        }

                    </div>
                    <div className="mb-4">
                        <label className="flex items-center gap-1 font-medium text-lg text-green-50">Unit</label>
                        <input
                            {...register("unit", { required: true })}
                            type="text"
                            className="mt-1 p-2 border w-full rounded-md"
                            placeholder="Enter unit"
                        />
                        {
                            errors.unit?.type == 'required' && <p className='text-red-500'>This field is required.</p>
                        }
                    </div>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-y-3'>
                        <button
                            type="submit"
                            className="bg-green-600 flex items-center gap-1 text-white px-4 py-2 rounded-md hover:transition-all hover:duration-300 hover:bg-green-700">
                            Submit Stock
                        </button>
                        <Link href={"/showstock"} className='bg-green-600 hover:transition-all hover:duration-300 hover:bg-green-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline'>See All Stock</Link>
                    </div>
                </form>
                <ToastContainer />
            </div>

        </div>




    )

}


export default StockAddItem