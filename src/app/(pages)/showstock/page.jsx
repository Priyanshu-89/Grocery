"use client"
import axios from "axios"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { FaRupeeSign } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";



function Showstock() {
    const [stockdata, setStockData] = useState([]);
    const [updatestockKey, setUpdateStockKey] = useState(Date.now());

    useEffect(() => {
        const getAllStock = async () => {
            try {
                const response = await axios.get("/api/stocklist");
                setStockData(response.data);
            } catch (error) {
                console.log("Error is", error);
            }
        };
        getAllStock();
    }, [updatestockKey]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure to delete this stock?')) {

            await axios.post("/api/deleteitem", { id }).then(res => {
                console.log(res.data)
                setUpdateStockKey(Date.now())
            })

        }
    }

    return (
        <>
            <div className="shadow-md max-w-full mt-5 rounded-lg mx-auto p-4 bg-green-200">
                <h2 className="text-center mt-4 mb-6 md:text-2xl text-md font-semibold bg-green-600 max-w-lg mx-auto p-3 rounded-lg text-green-200">
                    Stock Details List
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-8 gap-4  mb-3">
                    <div className="font-semibold text-center text-md">Stock Name
                    </div>
                    {/* <div className="font-semibold text-right">Item Name</div> */}
                    <div className="font-semibold text-center text-md ">Category</div>
                    <div className="font-semibold text-center text-md ">Unit</div>
                    <div className="font-semibold text-center text-md ">Total Stock</div>
                    <div className="font-semibold text-center text-md  flex gap-1 "><FaRupeeSign className="mt-1" />Sell Price</div>
                    <div className="font-semibold text-center text-md  flex gap-1 "><FaRupeeSign className="mt-1" />Purchase Price</div>
                    <div className="font-semibold text-right  text-md flex gap-1 ">update</div>
                    <div className="font-semibold text-right  text-md flex gap-1 ">delete</div>
                </div>

                {stockdata.map((stock, i) => (
                    <div key={i} className="flex flex-row md:flex-col items-center justify-center
                      gap-2 mb-3">
                        {/* <div className="font-bold text-green-500">{stock.itemName}</div> */}
                        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 text-center text-sm font-medium  rounded-md w-full mb-2">
                            <div>{stock.itemName}</div>
                            <div>{stock.category}</div>
                            <div>{stock.unit}</div>
                            <div className="flex items-center gap-x-2"><AiOutlineStock />{stock.totalStock}</div>
                            <div className="flex items-center gap-x-2"><FaRupeeSign/>{stock.sellAmount}</div>
                            <div className="flex items-center gap-x-2"><FaRupeeSign/>{stock.purchaseAmount}</div>
                            <Link href={`/supdate/${stock._id}`} className=' text-green-600 ml-3 text-center '>
                                <GrUpdate size={25} />
                            </Link>
                            <button
                                className='  text-red-600  font-semibold ml-3'
                                onClick={() => handleDelete(stock._id)}
                            >
                                <RiDeleteBin5Fill size={30} />
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </>
    );
}

export default Showstock;
