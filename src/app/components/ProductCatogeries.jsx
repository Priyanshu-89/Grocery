"use client"

import React, { useState } from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiStockFill } from 'react-icons/ri';
import { IoHome } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { MdPointOfSale } from 'react-icons/md';

import { CiAlignTop } from 'react-icons/ci';
import { IoMdLogOut } from 'react-icons/io';

import { GiFruitBowl } from 'react-icons/gi';
import { GiPeas } from 'react-icons/gi';
import { IoMdIceCream } from 'react-icons/io';
import { GiDoubleFish } from 'react-icons/gi';
import { BsCartCheckFill } from 'react-icons/bs';
import { MdAddComment } from 'react-icons/md';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import Link from 'next/link';

const ProductCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:bg-green-600 overflow-hidden relative w-12 md:w-60 min-h-screen text-green-50 p-4 flex flex-col">
      {/* Toggle button for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-green-700">
          {isOpen ? <FaWindowClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
      </div>

      <div className={`md:flex md:flex-col ${isOpen ? 'block' : 'hidden'}`}>
        {/* Menu items */}
        <div className='py-2 md:py-1'>
          <Link href={'/'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <IoHome size={20} />
            Home


          </Link>
          <Link href={'/'} className='md:hidden text-green-700'><IoHome size={20} /></Link>
        </div>

        {/* Other menu items */}
        <div className='py-2 md:py-1'>
          <Link href={'/contact'} className=" hidden text-lg mb-4 md:flex items-center gap-2">
            <IoIosContact size={20} />
            Contact us
          </Link>
          <Link href={'/contact'} className='md:hidden mt-5 text-xl text-green-700'><IoIosContact size={20} /></Link>
        </div>

        <div className='py-2 md:py-1'>
          <Link href={'/stockdata'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <MdAddComment size={20} />
            Add New Stock
          </Link>
          <Link href={'/stockdata'} className='md:hidden mt-5 text-xl text-green-700'> <MdAddComment size={20} /></Link>
        </div>

        <div className='py-2 md:py-1'>
          <Link href={'/showstock'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <RiStockFill size={20} />
            See Stock List
          </Link>
          <Link href={'/showstock'} className='md:hidden mt-5 text-xl text-green-700'><RiStockFill size={20} /></Link>
        </div>

        <div className='py-2 md:py-1'>
          <Link href={'/sellpage'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <BsCartCheckFill size={20} />
            Sell Here
          </Link>
          <Link href={'/sellpage'} className='md:hidden mt-5 text-xl text-green-700'><BsCartCheckFill size={20} /></Link>
        </div>

        <div className='py-2 md:py-1'>
          <Link href={'#'} className="hidden text-lg mb-4 md:flex items-center gap-2 font-bold">
            <MdOutlineProductionQuantityLimits size={20} />
            Product Categories
          </Link>

        </div>

        {/* Fruits */}
        <div className="mb-1 ml-4 md:ml-8 py-2 md:py-1">
          <Link href={'/fruit'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <GiFruitBowl />
            Fruit
          </Link>
          <Link href={'/fruit'} className='md:hidden mt-5 text-xl text-green-700'><GiFruitBowl /></Link>
        </div>

        {/* Vegetables */}
        <div className="mb-1 ml-4 md:ml-8 py-2 md:py-1">
          <Link href={'/vegetables'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <GiPeas />
            Vegetables
          </Link>
          <Link href={'/vegetables'} className='md:hidden mt-5 text-xl text-green-700'><GiPeas /></Link>
        </div>

        {/* Dairy */}
        <div className="mb-1 ml-4 md:ml-8 py-2 md:py-1">
          <Link href={'/dairy'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <IoMdIceCream />
            Dairy
          </Link>
          <Link href={'/dairy'} className='md:hidden mt-5 text-xl text-green-700'><IoMdIceCream /></Link>
        </div>

        {/* Non-Veg */}
        <div className="mb-1 ml-4 md:ml-8 py-2 md:py-1">
          <Link href={'/nonveg'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <GiDoubleFish />
            Non-Vegs
          </Link>
          <Link href={'/nonveg'} className='md:hidden mt-5 text-xl text-green-700'><GiDoubleFish /></Link>
        </div>

        <div className=' py-2 md:py-1'>
          <Link href={'/totalsale'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <MdPointOfSale size={20} />
            Today&apos;s Sell
          </Link>
          <Link href={'/totalsale'} className='md:hidden mt-5 text-xl text-green-700'> <MdPointOfSale size={20} /></Link>
        </div>

        <div className=' py-2 md:py-1'>
          <Link href={'/monthsale'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <CiAlignTop size={20} className="text-bold" />
            Top Selling Products
          </Link>
          <Link href={'/monthsale'} className='md:hidden mt-5 text-xl text-green-700'> <CiAlignTop size={20} /></Link>
        </div>

        <div className=' py-2 md:py-1'>
          <Link href={'/customer'} className="hidden text-lg mb-4 md:flex items-center gap-2">
            <RiCustomerService2Fill size={25} />
            Customer
          </Link>
          <Link href={'/customer'} className='md:hidden mt-5 text-xl text-green-700'><RiCustomerService2Fill size={25} /></Link>
        </div>

        <div className=' py-2 md:py-1'>
          <Link href='/api/auth/signout' className="hidden text-lg mb-4 md:flex items-center gap-2">
            <IoMdLogOut size={20} />
            Log Out
          </Link>
          <Link href={'/api/auth/signout'} className='md:hidden mt-5 text-xl text-green-700'><IoMdLogOut size={20} /></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;