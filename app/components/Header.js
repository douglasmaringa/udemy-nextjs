import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { MdLocalShipping } from "react-icons/md";

function Header() {
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">
        <div className="max-w-7xl mx-auto flex justify-between">

        <div className="flex items-center">
        <img src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className="ml-2 text-2xl lg:text-3xl font-bold">TechTrove</h1>
        </div>

        
          <div className="mr-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full max-w-xs pr-10"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <MdSearch className="text-gray-500 text-lg" />
              </div>
            </div>
          </div>
         
        <div className="flex items-center relative">
             
             
             <FaShoppingCart className="text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300" />
            <div className="ml-2 mr-4 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-semibold">
                 1
            </div>

            <MdLocalShipping className="mr-4 text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300" />


            <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>

            
        </div>

        </div>
    </div>
  )
}

export default Header