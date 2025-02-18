'use client';

import { useState } from 'react';
import Image from 'next/image';
import OrderModal from './OrderModal';

import { X, Camera, MessageCircle } from "lucide-react";
import box1 from '../pictures/box1.png'
import box2 from '../pictures/box2.png'
import box3 from '../pictures/box3.png'
import box4 from '../pictures/box4.png'
import arrow from '../pictures/Arrow - Right 2.png'

const initialStatuses = [
  {
    title: 'Mail Now',
    description: 'Add mailing information',
    time: '09-01-2023 10:34 PM',
    button: 'Tracking Info',
    subButton: 'Print label'
  },
  {
    title: 'Processing',
    description: 'Your order is being processed.',
    time: '09-01-2023 10:34 PM',

  },
  {
    title: 'Accepted',
    description: 'Order is accepted.',
    time: '09-01-2023 10:34 PM',
  },
  {
    title: 'Pending',
    description: 'Request is sent.',
    time: '09-01-2023 10:34 PM',
  },
];

export default function StatusTracking() {
  const [statuses, setStatuses] = useState(initialStatuses);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [newTracking, setNewTracking] = useState({ carrier: "", number: "" });
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const [note, setNote] = useState("");
  const timestamp = new Date().toLocaleString();
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false);

 

  const handleImageUpload = (event) => {
    setSelectedImages([...selectedImages, ...event.target.files]);
  };

  const handleAddTracking = () => {
    setTrackingInfo(newTracking);
    setIsTrackingModalOpen(false);
    setNewTracking({ carrier: "", number: "" });
    setIsTrackingModalOpen(false);
  };



  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="ml-3 font-bold text-gray-800 mb-4">Status Tracking</h2>
      <div className="relative">
        {statuses.map((status, index) => (
          <div key={index} className="relative mt-4 pl-4 last:mb-0">
            <div className="absolute -left-1.5 top-1 ml-4 w-4 h-4 bg-purple-800 rounded-full border-2 border-white"></div>
            <h3 className="text-purple-900 ml-6 font-semibold text-lg">{status.title}</h3>
            <div className='pl-4 mt-4 border-l-4 border-purple-800 flex flex-col'>
              <p className="text-gray-600 text-sm leading-tight mt-1">{status.description}</p>
              <p className="text-gray-400 text-xs mt-1">{status.time}</p>
              {status.avatar && (
                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src={status.avatar}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full border border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                </div>
              )}
              {status.button && (
                <button
                  onClick={() =>
                    setIsOpen(true)
                  }
                  className="mt-3 w-fit px-4 py-2 text-sm font-semibold bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all"
                >
                  {status.button}
                </button>
              )}
              {status.subButton && (
                <button
                  onClick={() =>
                    alert("helo")
                  }
                  className="mt-3  w-fit   px-4 py-1 rounded-xl text-xs font-semibold border-2 text-purple-900 border-purple-900  hover:bg-purple-700 hover:text-white transition-all"
                >
                  {status.subButton}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0  bg-black overflow-auto bg-opacity-50 flex justify-center items-center">
          <div className="bg-white mx-4 mt-16 p-6 rounded-xl shadow-lg w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Tracking info.</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-800" />
              </button>
            </div>

            {/* Images Section */}
            <div className="mt-4">
              <h3 className="font-bold mb-2">Images</h3>
              <p className="text-xs text-gray-600 bg-blue-100 px-3 py-2 rounded-md">
                Adding images helps conflict-free service.
              </p>
              <p className="text-xs text-gray-800 p-1">Attach images in .jpg, .jpeg, .png.</p>

              <div className="flex items-center">
                <label className="w-fit border-purple-900 flex flex-col items-center border-2 rounded-xl p-4 cursor-pointer">
                  <Camera className="w-6 h-6 text-purple-900" />
                  <span className="text-purple-900 text-xs">Add photo</span>
                  <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                </label>

                <div className="ml-4 flex flex-wrap gap-2">
                  {selectedImages.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt="Selected" className="w-16 h-16 object-cover rounded-lg border" />
                  ))}
                </div>
              </div>
            </div>

            {/* Tracking Section */}
            <div className="mt-4">
              <h3 className="mb-1 font-semibold">Tracking</h3>
              {trackingInfo && (
                <div className="bg-gray-100 flex justify-between mb-2 px-4 py-2 border rounded-md">
                  <div>
                    <div className='font-thin '>{trackingInfo.carrier}</div>
                    <div className='font-semibold '>{trackingInfo.number}</div>
                    <div className='font-extralight text-gray-500 '>{timestamp}</div>
                  </div>
                  <div>
                  <MessageCircle className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              )}
              <button className="w-full flex bg-gray-100 items-center justify-between px-4 py-3 border border-gray-300 rounded-md" onClick={() => setIsTrackingModalOpen(true)}>
                <span className="text-purple-900">+ Add Tracking</span>
              </button>

            </div>

            {/* Order Notes Section */}
            <div className="mt-4">
              <h3 className="mb-1 font-semibold">Order Notes</h3>
              {isNoteVisible && (
                <textarea className="w-full border px-4 py-2 rounded-md" value={note} onChange={(e) => setNote(e.target.value)} />
              )}
                <button className="w-full bg-gray-100 flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md" onClick={() => setIsNoteVisible(true)}>
                  <span className="text-purple-900">+ Add a note</span>
                </button>
              
            </div>

            {/* Generate Label Section */}
            <h3 className="mt-4 font-semibold">Generate Label</h3>
            <div className="mt-1 flex justify-between">
              <button className="bg-purple-800 text-xs text-white px-2 py-2 rounded-3xl flex-1 mr-2">Print label</button>
              <button  onClick={() => setIsModalOpen(true)} className="border border-purple-900 text-xs text-purple-900 px-2 py-2 rounded-3xl flex-1">Preview</button>
            </div>

            {/* Done Button */}
            <div className="mt-4 flex justify-center">
              <button className="w-fit bg-purple-900 text-white px-12 py-2 rounded-3xl text-xs" onClick={() => setIsOpen(false)}>
                Done
              </button>
            </div>
          </div>

          {/* Add Tracking Modal */}
          {isTrackingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white mx-4 mt-10 p-6 rounded-xl shadow-lg w-80">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Add Tracking</h2>
              <button onClick={() => setIsTrackingModalOpen(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-800" />
              </button>
            </div>

            {/* Shipping Carrier Input - Opens Packaging Modal */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Shipping Carrier</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-md"
                value={newTracking.carrier}
              // Open New Modal on Focus
                onChange={(e) => setNewTracking({ ...newTracking, carrier: e.target.value })}
              />
              <button onClick={() => setIsPackagingModalOpen(true)} className=' bg-gray-100  relative bottom-8 left-60'>
                <Image src={arrow} width={20} height={20} alt=''/>
              </button>
            </div>

            {/* Tracking Number Input */}
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Tracking Number</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-md"
                value={newTracking.number}
                onChange={(e) => setNewTracking({ ...newTracking, number: e.target.value })}
              />
            </div>

            {/* Add Button */}
            <div className="mt-4 flex justify-end">
              <button className="bg-purple-800 text-white px-4 py-2 rounded-md" onClick={handleAddTracking}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
       {isPackagingModalOpen && (
        <div className="fixed   inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white  p-6 w-full mx-4 rounded-xl shadow-lg ">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Select Packaging</h2>
              <button onClick={() => setIsPackagingModalOpen(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-800" />
              </button>
            </div>

            {/* Packaging Options */}
            <div className="mt-4  w-fit">
              <label className="block font-semibold text-sm">Dimension</label>
              <div className="flex space-x-3 mt-2">
                <button className="border  rounded-md p-2 focus:ring-2 focus:ring-purple-700">
                  <Image src={box1} width={50} height={40} alt=''/>
                </button>
                <button className="border rounded-md p-2 focus:ring-2 focus:ring-purple-700">
                <Image src={box2} width={50} height={40} alt=''/>
                </button>
                <button className="border rounded-md p-2 focus:ring-2 focus:ring-purple-700">
                <Image src={box3} width={50} height={40} alt=''/>
                </button>
                <button className="border rounded-md p-2 focus:ring-2 focus:ring-purple-700">
                <Image src={box4} width={50} height={40} alt=''/>
                </button>
              </div>

              {/* Input Fields */}
              <div className="flex mt-3">
                <input type="text" className="border bg-gray-50 rounded-2xl p-2 w-16 text-center" placeholder="123" />
                <span className="p-2">X</span>
                <input type="text" className="border bg-gray-50 rounded-2xl  p-2 w-16 text-center" placeholder="123" />
                <span className="p-2">X</span>
                <input type="text" className="border bg-gray-50 rounded-2xl  p-2 w-16 text-center" placeholder="123" />
                <select className="ml-2 rounded-2xl  border px-2">
                  <option>in</option>
                  <option>cm</option>
                </select>
              </div>
            </div>

            {/* Weight Input */}
            <div className="mt-4">
              <label className="block font-medium">Weight</label>
              <input type="text" className="w-full border p-2" placeholder="123" />
              <select className="ml-2 relative bottom-10 p-2.5 left-64   border px-2">
                  <option>Kg</option>
                  <option>g</option>
                </select>
            </div>

            {/* Done Button */}
            <div className="mt-4 flex justify-center">
              <button
                className="bg-purple-800 text-white px-12 py-2 rounded-3xl text-sm"
                onClick={() => setIsPackagingModalOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      )}

{isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} />}


    </div>
  );
}