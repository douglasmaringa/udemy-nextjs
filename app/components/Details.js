import React from 'react';

function Details() {
  return (
    <div className='max-w-7xl mx-auto mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>

        {/* Left - Main Image */}
        <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
          <img
            src="painting.jpg"
            layout="fill"
            objectFit="cover"
            alt="art"
          />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5B20B6]">Iphone 15</h1>
          <p className="text-lg text-gray-500 mt-4">Iphone 15 pro max 2023 version best phone</p>

          {/* Color Selection Circles */}
          <div className="flex mt-6 space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
          </div>

          <div className="mt-5">
            {/* Additional details can be added here */}
            <span className="text-[#5B20B6] text-xl font-semibold">$99.99</span>
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
      <div className="mt-8">
        <ul className="flex gap-4 overflow-x-auto">
          <li className="w-20 h-20 relative overflow-hidden aspect-ratio-1 cursor-pointer">
            <img
              src="painting.jpg"
              layout="fill"
              objectFit="cover"
              alt="small_art1"
            />
          </li>
          <li className="w-20 h-20 relative overflow-hidden aspect-ratio-1 cursor-pointer">
            <img
              src="painting.jpg"
              layout="fill"
              objectFit="cover"
              alt="small_art2"
            />
          </li>
          {/* Add more small images as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Details;
