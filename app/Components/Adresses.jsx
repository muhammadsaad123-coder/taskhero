'use client';

import { useState } from 'react';
import { MapPin, X } from 'lucide-react';

const addresses = [
  {
    id: 1,
    name: 'Home',
    address: '6328, Central Park, London, UK',
  },
  {
    id: 2,
    name: 'Home',
    address: '6328, Central Park, London, UK',
  },
  {
    id: 3,
    name: 'Home',
    address: '6328, Central Park, London, UK',
  },
  {
    id: 4,
    name: 'Home',
    address: '6328, Central Park, London, UK',
  },
];

export default function Addresses() {
  const [selectedId, setSelectedId] = useState(addresses[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full p-6 h-full  rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Addresses</h2>
      <div className="space-y-2 bg-g ">
        {addresses.map((address) => (
          <div
            key={address.id}
            onClick={() => setSelectedId(address.id)}
            className={`flex  items-center  justify-between p-4 rounded-lg cursor-pointer transition 
              ${selectedId === address.id ? 'bg-gray-200' : 'bg-gray-100'}`}
          >
            <div className="flex items-center  gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <MapPin className="text-purple-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-800">{address.name}</p>
                <p className="text-gray-500 text-sm">{address.address}</p>
              </div>
            </div>
            <div className={`h-5 w-5 border-2 rounded-full flex items-center justify-center 
                ${selectedId === address.id ? 'border-purple-800' : 'border-gray-400'}`}>
              {selectedId === address.id && <div className="w-2.5 h-2.5 bg-purple-800 rounded-full"></div>}
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 w-fit px-6 bg-gray-200 text-purple-800 py-2 rounded-2xl font-semibold">
          Add New Address
        </button>

      </div>

      {isModalOpen && (
        <div className="fixed text-xs  inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white mx-4 p-6 rounded-lg shadow-lg w-96 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-red-500">
              <X size={20} />
            </button>
            {isApplied ? (
              < div className='mx-4'>
                <h2 className="text-lg font-semibold mb-4">Add New Address</h2>
                <input type="text" value="Times Square NYC, Manhattan" className="w-full p-2 border rounded-md" readOnly />
                <div className="h-60 bg-purple-100 rounded-lg mt-4 relative flex items-center justify-center">
                  <p className="text-purple-800 font-semibold">Map Preview</p>
                  <button className="absolute bottom-4 right-4 bg-purple-800 text-white px-4 py-2 rounded-lg">Expand</button>
                </div>
                <div className='flex justify-center'>
                <button onClick={() => setIsModalOpen(false)} className="mt-6 w-fit px-6 bg-purple-800 text-white py-2 rounded-lg font-semibold">
                  Apply
                </button>

                </div>
              
              </div>
            ) : (
              < div className='mx-4'>
               <h2 className="text-lg font-semibold  mb-4">Add New Address</h2>
            <div className="space-y-4">
              <div>
                <label className='font-semibold'>Type</label>
                <input type="text" placeholder="Home, Office, etc" className="w-full bg-gray-50 p-2 border rounded-md" />
              </div>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className='font-semibold'>Country</label>
                  <input type="text" placeholder="Country" className="w-full p-2 bg-gray-50  border rounded-md" />
                </div>
                <div className="w-1/2">
                  <label className='font-semibold'>City</label>
                  <input type="text" placeholder="City" className="w-full p-2 bg-gray-50  border rounded-md" />
                </div>
              </div>
              <div>
                <label className='font-semibold'>Address</label>
                <input type="text" placeholder="Type address" className="w-full p-2 bg-gray-50  border rounded-md" />
              </div>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className='font-semibold'>Phone Number</label>
                  <input type="text" placeholder="Phone Number" className="w-full p-2 bg-gray-50  border rounded-md" />
                </div>
                <div className="w-1/2">
                  <label className='font-semibold'>Zip/Postal Code</label>
                  <input type="text" placeholder="Zip/Postal Code" className="w-full p-2 bg-gray-50  border rounded-md" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className='font-semibold'>Save as primary address</label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="toggle-checkbox"
                />
              </div>
              <div className='flex justify-center'>
                <button
                onClick={() => setIsApplied(true)}
                  className={`w-fit px-12 py-2 rounded-lg font-semibold ${isChecked ? 'bg-purple-800 text-white' : 'bg-gray-300 text-gray-600'
                    }`}
                >
                  Apply
                </button>
              </div>
              </div>
              </div>
            )}
           

            
          </div>
        </div>
      )}

    </div>
  );
}
