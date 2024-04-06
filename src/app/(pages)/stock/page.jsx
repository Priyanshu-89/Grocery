"use client"
import axios from 'axios';
import Dbconnect from '@/app/mongodb/DbConnect';

import { useForm } from 'react-hook-form';
import { MdOutlineGamepad } from "react-icons/md";
import { FaSitemap } from "react-icons/fa6";
import { MdAcUnit } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Link from 'next/link';
import { useState } from 'react';



const Stock = () => {
  const [isSaved, setIsSaved]=useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const onSubmit = async (data) => {
    await Dbconnect();
    // console.log(data)
    const groceryData = {
      itemName: data.itemName,
      category: data.category,
      unit: data.unit,
    }


    await axios.post("/api/grocery", groceryData).then(res => {
      if(res.status==200){
        setIsSaved(true)
       
    }
      console.log(res.data)
    })
    reset();
  }


  return (
    <div className="mt-16 flex items-center justify-center flex-col gap-7">
      <div className="bg-green-500 p-8 shadow-md rounded-md w-96">
        <h2 className="text-3xl font-semibold mb-4  text-green-50 flex items-center justify-center gap-1"><TbListDetails />Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="flex items-center gap-1  font-medium text-lg text-green-50"><FaSitemap />Item Name</label>
            <input
              {...register("itemName", { required: true, minLength: 3 })}
              type="text"
              className="mt-1 p-2 border w-full rounded-md"
              placeholder="Enter item name"
            />
            {
              errors.item?.type == 'required' && <p className='text-red-500 font-semibold'>Please fill the field</p>
            }
            {
              errors.item?.type == 'minLength' && <p className='text-red-500 font-semibold'>Minimum lenght required 3</p>
            }
          </div>
          <div className="mb-4">
            <label className="flex gap-1 items-center  font-medium text-lg text-green-50"><MdOutlineGamepad />Category</label>
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
            <label className="flex items-center gap-1 font-medium text-lg text-green-50"><MdAcUnit />Unit</label>
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
          <div className='flex items-center justify-between'>
            <button

              type="submit"
              className="bg-green-400 flex items-center gap-1 text-white px-4 py-2 rounded-md hover:bg-green-300"
            ><RiSaveFill />

              Submit
            </button>

            <Link href={"/show"} className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Show Stock</Link>

          </div>
        </form>
      
      </div>
      {
        isSaved ? <p className='p-3 bg-green-200 max-w-3xl text-lg rounded-lg text-center font-semibold'> Stock Added</p> : " "
    }



    </div>
  );
};

export default Stock;
