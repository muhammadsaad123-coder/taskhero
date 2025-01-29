'use client'
import React from 'react';
import  Heart  from '../pictures/Heart.png';
import Image from 'next/image';

const CleaningCard = ({ title, items, onFavoriteClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          className="flex text-xs md:text-sm items-center gap-1 text-purple-600 border border-purple-600 px-3 py-1 rounded-full hover:bg-purple-600 hover:text-white transition"
          onClick={onFavoriteClick}
        >
          <Image src={Heart} width={14} height={10} alt=''/>
          Add favourite
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg  overflow-hidden shadow hover:shadow-lg transition-all "
          >
            <Image
              src={item.image}
              alt={item.title}
            
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningCard;
