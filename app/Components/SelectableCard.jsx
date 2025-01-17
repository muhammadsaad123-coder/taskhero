// components/SelectableCard.js

import Image from 'next/image';
import React, { useState } from 'react';

const SelectableCard = ({ title, icon }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCardClick = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`border rounded-lg min-w-52 p-4 flex flex-col items-center cursor-pointer transition-transform transform ${
        isChecked ? 'bg-gray-100' : 'bg-white'
      }`}
    >
      <div className="relative mb-2">
        
        <input
          type="checkbox"
          checked={isChecked}
          readOnly
          className=" relative left-16 w-5 h-5  border border-gray-400 rounded-full checked:bg-purple-600 checked:border-transparent"
        />
      </div>
      <Image width={100} height={50} src={icon} alt={title} className=' items-center'  />
      
      <span className="font-bold text-lg">{title}</span>
    </div>
  );
};

export default SelectableCard;
