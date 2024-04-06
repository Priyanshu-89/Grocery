"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import signupAction  from './action/SignupAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const RegistrationForm = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await signupAction(data);
      toast.success("Signup completed!", { autoClose: 2000 }); // Success message with 2 seconds duration
      
    } catch (error) {
      toast.error("Signup failed. Please try again.", { autoClose: 2000 }); // Error message with 2 seconds duration
    }
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-green-100 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb- text-center text-green-600">Sign Up Here</h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium text-green-600">
            Username
          </label>
          <input
            type="text"
           
            {...register('username', { required: true })}
            className={`mt-1 p-2 w-full border rounded-md ${errors.username ? 'border-red-500' : ''}`}
          />
          {errors.username && <span className="text-red-500">Username is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium text-green-600">
            Password
          </label>
          <input
            type="password"
            
            {...register('password', { required: true })}
            className={`mt-1 p-2 w-full border rounded-md ${errors.password ? 'border-red-500' : ''}`}
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-lg font-medium text-green-600">
            Role
          </label>
          <input
            type="text"
           
            {...register('role', { required: true })}
            className={`mt-1 p-2 w-full border rounded-md ${errors.role ? 'border-red-500' : ''}`}
          />
          {errors.role && <span className="text-red-500">Role is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-green-600">
            Email
          </label>
          <input
            type="email"
           
            {...register('email', { required: true })}
            className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium text-green-600">
            Phone
          </label>
          <input
            type="tel"
            
            {...register('phone', { required: true })}
            className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <span className="text-red-500">Phone is required</span>}
        </div>

        <button
          type="submit"
          className="bg-green-500 w-1/3 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Submit
        </button>
       <div className='text-center'>
       <Link  className="text-blue-500 text-base underline p-2 rounded-md" href='/login'>Go to login</Link>
       </div>
      </form>
      <ToastContainer /> 
    </div>
  );
};

export default RegistrationForm;
