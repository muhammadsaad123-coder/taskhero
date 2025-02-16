'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import ServiceImage from '../pictures/Rectangle 203.png';
import ServiceCard from '../Components/ServiceCard';

function Page() {
  const ServiceData = Array(9).fill({
    image: ServiceImage,
    title: 'Home cleaning',
    rating: '4.8',
    reviews: '900+',
    description: 'I will clean your house lorem ipsum something else',
    price: '$25/hr'
  });

  const [budget, setBudget] = useState([575, 1500]);

  return (
    <div className='flex flex-wrap bg-gray-100 p-6 gap-6'>
      {/* Sidebar Filters */}
      <div className='sm:w-72 w-full  bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Filters</h2>
        
        {/* Location Input */}
        <div className='mb-6'>
          <label className='text-sm font-medium flex items-center gap-2'>
            <IoLocationOutline className='text-gray-500' /> By location
          </label>
          <input 
            type='text' 
            className='mt-2 w-full border border-gray-300 p-2 rounded-lg' 
            placeholder='Enter delivery address' 
          />
        </div>

        {/* Budget Slider */}
        <div className='mb-6'>
          <h3 className='text-sm font-medium'>By budget</h3>
          <div className='flex justify-between text-xs mt-2'>
            <span className='px-2 py-1 bg-purple-200 text-purple-700 rounded'>Min ${budget[0]}</span>
            <span className='px-2 py-1 bg-purple-200 text-purple-700 rounded'>Max ${budget[1]}</span>
          </div>
          <input type='range' min='0' max='2000' value={budget[0]} onChange={(e) => setBudget([Number(e.target.value), budget[1]])} className='w-full mt-2' />
          <input type='range' min='0' max='2000' value={budget[1]} onChange={(e) => setBudget([budget[0], Number(e.target.value)])} className='w-full mt-2' />
        </div>

        {/* Type Selection */}
        <div className='mb-6'>
          <h3 className='text-sm font-medium'>Type</h3>
          <div className='flex gap-2 mt-2'>
            <button className='bg-purple-800 text-white px-4 py-2 rounded-lg'>Posts</button>
            <button className='text-gray-400 border border-gray-300 px-4 py-2 rounded-lg'>Heroes</button>
          </div>
        </div>

        {/* Rating Filter */}
        <div className='mb-6'>
          <h3 className='text-sm font-medium'>By rating</h3>
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className='flex items-center justify-between mt-2'>
              <div className='flex space-x-1'>
                {[...Array(stars)].map((_, i) => (
                  <FaStar key={i} className='text-yellow-400' />
                ))}
              </div>
              <input type='checkbox' className='form-checkbox text-purple-600 border-gray-300' />
            </div>
          ))}
        </div>

        {/* Clear Button */}
        <button className='w-full bg-red-100 text-red-600 px-4 py-2 rounded-lg'>X Clear</button>
      </div>

      {/* Service List */}
      <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
        <div className='flex justify-between flex-wrap gap-4 items-center mb-4'>
          <h2 className='text-lg font-semibold'>Result for: <span className='font-bold text-purple-800'>Cleaning house</span></h2>
          <div className='flex gap-4 text-xs sm:text-sm'>
            <button className='bg-purple-200 text-purple-700 px-4 py-2 rounded-lg'>Offers</button>
            <button className='bg-gray-200 text-gray-700 px-4 py-2 rounded-lg'>Most Rated</button>
            <button className='bg-gray-200 text-gray-700 px-4 py-2 rounded-lg'>New</button>
          </div>
        </div>
        
        {/* Grid Display */}
        <div className='flex flex-wrap gap-6'>
          {ServiceData.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>

        {/* Load More Button */}
        <div className='flex justify-center mt-6'>
          <button className='bg-purple-800 text-white px-6 py-2 rounded-lg'>Load more</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
