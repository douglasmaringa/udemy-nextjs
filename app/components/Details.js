"use client"
import Image from 'next/image';
import React,{useState} from 'react';
import useCartStore from "../../cartStore"

function Details({product}) {
  return (
    <div className='max-w-7xl mx-auto mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>

        {/* Left - Main Image */}
        <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
          <img
            src={product?.image}
            layout="fill"
            objectfit="cover"
            alt="art"
          />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5B20B6]">{product?.name}</h1>
          <p className="text-lg text-gray-500 mt-4">{product?.description}</p>

          {/* Color Selection Circles */}
          <div className="flex mt-6 space-x-3">
            {product?.colors?.map((color) => {
              switch (color) {
                case 'Grey':
                  return <div key={color} className="w-8 h-8 rounded-full bg-gray-500 cursor-pointer hover:border-4 hover:border-blue-900"></div>;
                case 'Black':
                  return <div key={color} className="w-8 h-8 rounded-full bg-black cursor-pointer hover:border-4 hover:border-blue-900"></div>;
                case 'Blue':
                  return <div key={color} className="w-8 h-8 rounded-full bg-blue-900 cursor-pointer hover:border-4 hover:border-blue-900"></div>;
                default:
                  return <div key={color} className="w-8 h-8 rounded-full bg-gray-200 cursor-pointer hover:border-4 hover:border-blue-900"></div>;
              }
            })}
          </div>


          <div className="mt-5">
            {/* Additional details can be added here */}
            <span className="text-[#5B20B6] text-xl font-semibold">${product?.price}</span>
          </div>

          <div className='mt-6 flex flex-col text-gray-500'>
            <label className='ml-2' htmlFor="">Qty</label>
            <input type="number" defaultValue={1} className="w-20 px-4 h-10 border border-gray-300 rounded-md" />
          </div>

          <div className='mt-6'>
            <button className='bg-[#5B20B6] text-white px-6 py-3 rounded-md'>Add to Cart</button>
          </div>

        </div>
      </div>

      {/* Below Main Image - Small Image List */}
      <div className="mt-2">
        <ul className="flex gap-4 overflow-x-auto">
          {
            product?.extraImages?.map((image)=>(
              <li className="w-20  relative overflow-hidden aspect-ratio-1 cursor-pointer hover:border-4 hover:border-black">
                <img
                  src={image}
                  layout="fill"
                  objectfit="cover"
                  alt="small_art1"
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Details;
