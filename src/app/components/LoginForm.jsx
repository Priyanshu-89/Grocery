"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { TbLogin2 } from "react-icons/tb";
import { LoginAction } from './action/LoginAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const LoginPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    //  console.log(data)
    try {
      await LoginAction(data)
      toast.success("Login Successfully 🥳!", { autoClose: 2000 }); 
      reset();
    } catch (error) {
      toast.error("Login failed. Please try again.", { autoClose: 2000 }); 
    }
    reset()
  }


  return (
    <div className="flex items-center justify-center h-1/2 mt-8">
      <div className="w-full max-w-md">

        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className="space-y-4 bg-green-100 w-4xl p-6 rounded-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center text-green-800">Login Here</h1>
          <div>
            <label className="block text-xl font-medium text-green-800">
              Username
            </label>
            <input
              type="text"

              {...register('username', { required: 'Username is required' })}
              className={`mt-1 p-2 border w-full rounded-md ${errors.username ? 'border-red-500' : ''}`}
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>
          <div>
            <label className="block font-medium  text-xl text-green-800">
              Password
            </label>
            <input
              type="password"

              {...register('password', { required: 'Password is required' })}
              className={`mt-1 p-2 border w-full rounded-md  ${errors.password ? 'border-red-500' : ''}`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block font-medium  text-xl text-green-800">
              Your Role
            </label>
            <input
              type="role"

              {...register('role', { required: 'Role is required' })}
              className={`mt-1 p-2 border w-full rounded-md  ${errors.role ? 'border-red-500' : ''}`}
              placeholder="Enter your specific role"
            />
            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
          </div>



          <button
            type="submit"
            className=" flex items-center gap-1 bg-green-800 text-white px-3 w-28 py-1 rounded-md hover:bg-green-600 transition-all duration-300"
          > <TbLogin2 />
            Login
          </button>

          <div>
            <p className='text-base text-center font-medium text-green-800'>Not yet registered? then <Link href="/register" className="text-blue-500 underline font-semibold"> Register Here</Link></p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;


