'use client';

import { useState } from 'react';
import Image from 'next/image';
import profilepic from '../pictures/offerpic.png';
import { QRCodeCanvas } from 'qrcode.react';

const initialStatuses = [
  {
    title: 'Delivery confirmation',
    description:
      'Rider has arrived. Show delivery security code or QR code to the rider & confirm you have received your order.',
    time: '09-01-2023 10:34 PM',
    button: 'Delivery Security Code',
  },
  {
    title: 'Being delivered',
    description: 'Rider is on the way to deliver your order.',
    time: '09-01-2023 10:34 PM',
    avatar: profilepic,
    button: 'Track Live Location',
  },
  {
    title: 'Picked up',
    description: 'Your order is ready and picked up by our rider.',
    time: '09-01-2023 10:34 PM',
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

export default function StatusTracking({ setShowTracking }) {
  const [statuses, setStatuses] = useState(initialStatuses);
  const [showModal, setShowModal] = useState(false);
  const [isViewed, setIsViewed] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeTab, setActiveTab] = useState('qr');
  const [Tab, setTab] = useState('hero');

  const handleTabChange = (tab) => {
    setTab(tab);
  };

  const openModal = () => {
    setShowModal(true);
    if (!isViewed) {
      setStatuses((prevStatuses) => [
        { title: 'Rate & Review', button: 'Rate & tip', description: 'Give your feedback.', time: 'Just now' },
        { title: 'Delivery', button: 'View Images', description: 'Delivery completed.', time: 'Just now' },
        ...prevStatuses,
      ]);
      setIsViewed(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openRateModal = () => {
    setShowRateModal(true);
  };

  const closeRateModal = () => {
    setShowRateModal(false);
  };

  const openImageModal = () => {
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="ml-3 font-bold text-gray-800 mb-4">Status Tracking</h2>
      <div className="relative">
        {statuses.map((status, index) => (
          <div key={index} className="relative mt-4 pl-4 last:mb-0">
            <div className="absolute -left-1.5 top-1 ml-4 w-4 h-4 bg-purple-800 rounded-full border-2 border-white"></div>
            <h3 className="text-purple-900 ml-6 font-semibold text-lg">{status.title}</h3>
            <div className='pl-4 mt-4 border-l-4 border-purple-800'>
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
                    status.button === 'Delivery Security Code' ? openModal() :
                      status.button === 'Rate & tip' ? openRateModal() :
                        status.button === 'View Images' ? openImageModal() :
                          setShowTracking(true)
                  }
                  className="mt-3 px-4 py-2 text-sm font-semibold bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all"
                >
                  {status.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white mx-4 rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Security Code</h2>
              <button onClick={closeModal} className="text-gray-500">
                &times;
              </button>
            </div>
            <div className="flex border-b">
              <button
                className={`flex-1 text-center py-2 ${activeTab === 'qr' ? 'border-b-2 border-purple-800' : ''}`}
                onClick={() => setActiveTab('qr')}
              >
                QR Code
              </button>
              <button
                className={`flex-1 text-center py-2 ${activeTab === 'pin' ? 'border-b-2 border-purple-800' : ''}`}
                onClick={() => setActiveTab('pin')}
              >
                PIN Code
              </button>
            </div>
            <div className="mt-4">
              {activeTab === 'qr' ? (
                <div className="flex flex-col items-center">
                  <p className="mb-2 text-gray-500 ">Scan QR Code (for hero/driver)</p>
                  <div className='bg-gray-100 p-2'>
                    <QRCodeCanvas value="Your QR Code Data Here" size={200} />
                  </div>
                  <p className="text-gray-500 mt-2">If QR code is not showing, <a href="#" className="text-purple-600">contact us</a></p>
                  <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-white border-2 border-purple-800 text-purple-800 py-2 px-8 rounded-3xl">Review</button>
                    <button className="bg-purple-800 text-white py-2 px-4 rounded-3xl">Print QR Code</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="mb-2 text-gray-500 ">Security Pin code</p>
                  <p className="font-bold text-purple-800 text-3xl bg-gray-100 p-2 px-16 rounded-xl">123456</p>
                  <p className="mb-4 mt-8 text-gray-500 text-start ">Please do not share the code with anyone except hero</p>
                  <p className="text-gray-500 mb-4">If PIN code is not showing, <a href="#" className="text-purple-600">contact us</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showRateModal && (
        <div className="fixed inset-0 flex overflow-auto items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="w-96 mx-4 bg-white rounded-lg p-5 shadow-lg">
            <div>
              <div className='flex justify-between'>
                <h2 className="text-xl font-bold">Rate & Tip</h2>
                <button onClick={closeRateModal} className="text-2xl text-gray-500">
                  &times;
                </button>
              </div>
              <div className="flex my-4 justify-between space-x-2">
                <button
                  className={`px-4 w-full py-2 font-semibold ${Tab === 'hero' ? 'border-b-2 border-purple-500 text-purple-800 ' : 'text-gray-500'}`}
                  onClick={() => handleTabChange('hero')}
                >
                  Hero
                </button>
                <button
                  className={`px-4 w-full py-2 font-semibold ${Tab === 'driver' ? 'border-b-2 border-purple-500 text-purple-800' : 'text-gray-500'}`}
                  onClick={() => handleTabChange('driver')}
                >
                  Driver
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-center mb-3">
                <div>
                  <div className='flex justify-center'>
                    <Image src={profilepic} width={80} height={10} alt='' />
                  </div>
                  <h3 className="text-lg font-semibold text-center">John Doe</h3>
                  <span className="text-yellow-500">★ ★ ★ ★ ☆ (4.3)</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="block text-black">Rate & Review</span>
                <div className="flex">
                  <span className="text-yellow-500 text-2xl">★ ★ ★ ★ ☆</span>
                </div>
                <input
                  placeholder="Write a comment"
                  className="mt-2 w-full h-10 border bg-gray-50 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <span className="block font-semibold mb-1">Tip</span>
                <div className="flex flex-col justify-between mb-2">
                  <span>You are tipping: $0</span>
                  <input
                    placeholder="Write a comment"
                    className="mt-2 w-full h-10 border bg-gray-50 border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="flex space-x-2">
                  {['0', '1', '2', '3', '4'].map((value) => (
                    <button key={value} className="bg-purple-800 text-white px-4 py-2 rounded-md">
                      ${value}
                    </button>
                  ))}
                </div>
              </div>
              <button className="bg-purple-800 text-white px-4 py-2 rounded-md w-full">Done</button>
            </div>
          </div>
        </div>
      )}

      {showImageModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white mx-4 rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <button onClick={closeImageModal} className="text-gray-500">
                &larr; Back
              </button>
              <button onClick={closeImageModal} className="text-gray-500">
                &times;
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Image {index + 1}</span>
                </div>
              ))}
            </div>
            <div className='flex justify-center'>
            <button className="bg-purple-800 text-white px-8 py-2 rounded-md ">Done</button>

              </div>
          </div>
        </div>
      )}
    </div>
  );
}