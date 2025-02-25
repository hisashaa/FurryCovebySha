import { ShoppingBagIcon } from '@heroicons/react/16/solid';
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FaRegHeart, FaUser } from 'react-icons/fa';

const ShopMain = () => {
  return (
  <div className="border-b border-gray-200 py-6 md:pl-14">
    <div className="container sm:flex justify-between items-center">
        <div className="w-full sm:w[300px] md:w-[70%] relative">
          <input className="border-gray-200 border p-2 px-4 rounded-lg w-full"
          type="text" placeholder="Enter any product name..." />
          
          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" 
          size={20}/>
        </div>

      <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <FaUser />
        
        <div className="relative">
          <FaRegHeart />
          <div className="bg-red-700 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
          text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        <div className="relative">
          <BiShoppingBag />
          <div className="bg-red-700 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
          text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

      </div>        
    </div>
  </div>
  );
};

export default ShopMain;