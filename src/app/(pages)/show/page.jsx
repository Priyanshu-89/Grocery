"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Page() {
    const [Grodata, setGroData] = useState([]);
    const [updateKey, setUpdateKey] = useState(Date.now());

    useEffect(() => {
        const getAllStock = async () => {
            try {
                const response = await axios.get("/api/showlist");
                setGroData(response.data);
            } catch (error) {
                console.log("Error is", error);
            }
        };
        getAllStock();
    }, [updateKey]);

    return (
        <>
            <div className='shadow-md max-w-3xl mt-5 rounded-lg mx-auto p-4 bg-green-200'>
                <h2 className='text-center mt-4 mb-6 text-xl font-semibold bg-green-600 max-w-lg mx-auto p-3 rounded-lg text-green-200'>
                    Stock Details List
                </h2>
       
                {Grodata.map((gro, i) => (
                    <div className='mx-auto p-2  max-w-5xl' key={i}>
                        <div className='flex text-right gap-4 justify-around items-center font-semibold shadow-lg mb-3 p-4'>
                            <div className=''>
                                {gro.item}
                            </div>

                            <div className=''>
                                {gro.category}
                            </div>

                            <div className=''>
                                {gro.unit}
                            </div>

                            <div className='col-span-1'>
                                <Link href={`/update/${gro._id}`} className='px-8 py-1 bg-yellow-600 text-white font-semibold rounded-md'>
                                    Update
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Page;
