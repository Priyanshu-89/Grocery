"use client"


import Image from 'next/image';
import React from 'react';
import StarRating from '@/app/components/StarRating';

function Customer() {
  return (
    <div className="w-5xl mr-6 h-auto mt-12 mx-auto bg-green-500">
      <h2 className="text-center text-2xl md:text-4xl text-green-100 font-semibold mb-6 underline">Customer&apos;s Review</h2>
      <div className="md:h-80 flex flex-col md:flex-row gap-y-5 items-center justify-around">
        <div className="shadow-lg shadow-green-600 p-4 text-center flex flex-col items-center rounded-md hover:mb-2">
          <Image
            src={'/images/women1.jpg'}
            alt="not found"
            width={200}
            height={200}
            className="w-36 h-36 rounded-full object-cover mb-1 hover:scale-110 hover:transition-all hover:duration-200"
          />
          <h1 className="text-md font-normal text-white">Customer Name: Mariya</h1>
          <p className="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         
            <div>
              <StarRating />

            </div>
        
        </div>

        <div className="shadow-lg shadow-green-600 p-4 text-center flex flex-col items-center rounded-md hover:mb-2">
          <Image
            src={'/images/man1.jpg'}
            alt="not found"
            width={200}
            height={200}
            className="w-36 h-36 rounded-full  object-contain mb-1 hover:scale-110 hover:transition-all hover:duration-200"
          />
          <h1 className="text-md font-normal text-white ">Customer Name: Mariya</h1>
          <p className="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
            <div>
              <StarRating />

            </div>
         
        </div>


        <div className="shadow-lg shadow-green-600 p-4 text-center flex flex-col items-center rounded-md  hover:mb-2">
          <Image
            src={'/images/women2.jpg'}
            alt="not found"
            width={200}
            height={200}
            className="w-36 h-36 rounded-full object-contain mb-1 hover:scale-110 hover:transition-all hover:duration-200"
          />
          <h1 className="text-md font-normal text-white">Customer Name: Mariya</h1>
          <p className="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
            <div>
              <StarRating />

            </div>
          </div>
        </div>
      </div>
 
  );
}

export default Customer;
