import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';


function Products() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#5B20B6] text-center">Get Artistic Prints!</h1>
        <p className="text-center text-xl text-gray-500">Elevate your space with stunning art prints, Transform your surroundings with captivating visuals. 🎨✨</p>
      </div>

      <div className="flex flex-col md:flex-row p-10">
        {/* Filters */}
        <div className="mr-8">
          <h1 className="text-2xl font-semibold text-[#5B20B6] mb-4">Filters</h1>
          <div className="space-y-4">
            <div className='space-x-2'>
              <h2 className="text-lg font-medium">Categories</h2>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-[#5B20B6] cursor-pointer" />
                <span className="ml-2">Abstract</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-[#5B20B6] cursor-pointer" />
                <span className="ml-2">Landscape</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-[#5B20B6] cursor-pointer" />
                <span className="ml-2">Portrait</span>
              </label>
              {/* Add more categories as needed */}
            </div>
            
            {/* Price Range */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium">Price Range</h2>
              <div className="flex space-x-2">
                <input type="number" placeholder="Min" className="w-20 px-2 py-1 border border-gray-300 rounded-md" />
                <input type="number" placeholder="Max" className="w-20 px-2 py-1 border border-gray-300 rounded-md" />
              </div>
            </div>
            
            {/* Filter and Sort Dropdowns */}
            <div className="space-y-2">
              <button className="bg-[#5B20B6] text-white px-4 py-2 rounded-md">Filter</button>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-300 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-[#5B20B6]">
                  <option value="latest">Sort by Latest</option>
                  <option value="oldest">Sort by Oldest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5B20B6]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.292 11.707a1 1 0 0 1 1.414 0L12 14.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;