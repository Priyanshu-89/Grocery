 import React from 'react';
 import { IoIosBasket } from 'react-icons/io';
import { SiHellofresh } from 'react-icons/si';
import { FaAppleAlt } from "react-icons/fa";
import { ImLeaf } from 'react-icons/im';
import { GiBananaBunch, GiMilkCarton, GiPeas, GiFishEggs, GiChickenOven } from 'react-icons/gi';


function Header() {
  return (
    <div className='hidden md:block max-w-5xl mx-auto bg-green-600 p-1 rounded-md mt-2'>
      <div className='flex  gap-4 text-green-50 text-2xl'>
      <GiPeas /> <FaAppleAlt /> <ImLeaf /> <GiFishEggs />


      </div>

      <h1 className=' text-2xl font-bold font-sans text-green-50 flex items-center justify-center gap-2'>
          <IoIosBasket size={30} />SwiftHarvest

        </h1>
      <p className='text-md font-serif text-green-50 flex items-center justify-center gap-2'>
        <SiHellofresh size={30}/> Freshness, Goodness & Happiness at Your Fingertips.
      </p>

      <div className='flex items-center justify-end gap-7 text-green-50 text-2xl'>
      <GiMilkCarton /> <ImLeaf /> <GiBananaBunch /> <GiChickenOven />
      </div>
    </div>
  );
}

export default Header;


