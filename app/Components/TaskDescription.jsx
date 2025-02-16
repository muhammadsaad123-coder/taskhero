'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import camericon from '../pictures/Camera.png'
import files from '../pictures/folder.png'


export default function TaskDescription() {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prevImages) => [...prevImages, ...newImages]);
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white  p-6 w-80 rounded-lg shadow-lg relative">
            <h3 className="text-lg font-semibold text-center mb-4">Choose from</h3>
            <div className="flex justify-center gap-4">
              <label className="flex flex-col items-center cursor-pointer border-2 border-purple-800 rounded-lg p-4 hover:bg-purple-100 transition">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} multiple />
               <Image src={files} width={40} height={10} alt=''/>
                {/* <Camera className="text-purple-500 w-8 h-8" /> */}
                <span className="text-purple-500 mt-2">From Files</span>
              </label>
              <label className="flex flex-col items-center cursor-pointer border-2 border-purple-800 rounded-lg p-4 hover:bg-purple-100 transition">
              <Image src={camericon} width={40} height={10} alt=''/>
                {/* <Camera className="text-purple-500 w-8 h-8" /> */}
                <span className="text-purple-500 mt-2">Camera</span>
              </label>
            </div>
            <button className="absolute top-2 right-2 text-red-500" onClick={() => setIsModalOpen(false)}>X</button>
          </div>
        </div>
      )}

<div className="flex flex-wrap gap-6 sm:gap-12">
  {/* Description and Textarea */}
  <div className="w-full sm:w-auto">
    <label className="block font-semibold">Description and images</label>
    <textarea className="border rounded-lg w-full sm:w-96 p-2" placeholder="Enter description" />
  </div>

  {/* Image Upload Button */}
  <div className="w-full sm:w-auto flex justify-center sm:justify-start">
    <button
      onClick={() => setIsModalOpen(true)}
      className="border-2 border-purple-800 rounded-lg w-40 h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-purple-100 transition relative overflow-hidden"
    >
      <Image src={camericon} width={40} height={10} alt="Camera Icon" />
      <span className="text-purple-800 mt-2">Add photo</span>
    </button>
  </div>
</div>

{/* Uploaded Images */}
<div className="flex flex-wrap mt-4 gap-4">
  {images.map((img, index) => (
    <img key={index} src={img} alt="Uploaded" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
  ))}
</div>

    </>
  );
}
