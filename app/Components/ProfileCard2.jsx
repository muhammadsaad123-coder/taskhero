'use client'
import { useState } from 'react';
import Image from 'next/image';
import profilepic from '../pictures/Ellipse 1.png';
import delivery from "../pictures/Deliver.png";
import pickup from "../pictures/Vector.png";

export default function ProfileCard2() {
  const [activeTab, setActiveTab] = useState('Small'); // Default tab is 'Small'
  const [showPickupDetails, setShowPickupDetails] = useState(false);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <Image
            src={profilepic}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">Zain Lipshutz</h3>
            <p className="text-green-600 text-sm">Trusted by us</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-semibold">4.3</span>
          </div>
        </div>
        <div className="flex justify-between bg-white p-2 rounded-lg mb-2">
          <button
            className={`flex-1 py-2 rounded-lg font-medium ${!showPickupDetails ? "bg-purple-900 text-white" : "text-gray-500"}`}
            onClick={() => setShowPickupDetails(false)}
          >
            <Image className="absolute mt-0.5 left-5" src={delivery} width={20} height={20} alt="" />
            Delivery
          </button>
          <button
            className={`flex-1 py-2 rounded-lg font-medium ${showPickupDetails ? "bg-purple-900 text-white" : "text-gray-500"}`}
            onClick={() => setShowPickupDetails(true)}
          >
            <Image className="absolute mt-1 right-36" src={pickup} width={10} height={20} alt="" />
            Pick up
          </button>
        </div>
         {/* Pickup Details - Shown When "Pickup" is Clicked */}
         {showPickupDetails && (
          <div className="bg-white p-4 rounded-lg shadow-lg mt-2 transition-opacity duration-300">
            <p className="text-left text-sm font-semibold">
              <span className="text-gray-600">Located:</span> UK, 11 Horseferry Road, London, England
            </p>
            <div className="relative bg-purple-100 p-4 rounded-lg mt-2">
              <div className="w-full h-28 bg-purple-200 rounded-lg relative">
                <p className="absolute top-2 left-2 text-xs text-gray-500">6 Laurel Pass</p>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-purple-600">
                    <Image src={profilepic} alt="Profile" width={32} height={32} className="rounded-full" />
                  </div>
                </div>
              </div>
              <button className="mt-2 bg-purple-900 text-white py-2 px-6 rounded-lg w-full">Expand</button>
            </div>
          </div>
        )}

        {/* Delivery Info */}
        <div className="mt-4 flex justify-between text-center">
          <div>
            <p className="text-sm font-semibold text-purple-700">$2.5 Delivery Fee</p>
            <p className="text-xs text-gray-500">Pricing & fees</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div>
            <p className="text-sm font-semibold text-purple-700">35 min</p>
            <p className="text-xs text-gray-500">Delivery time</p>
          </div>
        </div>

        {/* Size Tabs */}
        <div className="mt-6 flex gap-4">
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              activeTab === 'Small'
                ? 'text-purple-700 bg-purple-100'
                : 'text-gray-500 bg-gray-100'
            }`}
            onClick={() => setActiveTab('Small')}
          >
            Small
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              activeTab === 'Medium'
                ? 'text-purple-700 bg-purple-100'
                : 'text-gray-500 bg-gray-100'
            }`}
            onClick={() => setActiveTab('Medium')}
          >
            Medium
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              activeTab === 'Large'
                ? 'text-purple-700 bg-purple-100'
                : 'text-gray-500 bg-gray-100'
            }`}
            onClick={() => setActiveTab('Large')}
          >
            Large
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === 'Small' && (
            <ul className="text-sm text-gray-700">
              <li className="flex justify-between py-1">
                <span>Price</span>
                <span className="font-medium text-purple-700">$20/hr</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Type</span>
                <span className="font-medium">Apartment</span>
              </li>
            </ul>
          )}
          {activeTab === 'Medium' && (
            <ul className="text-sm text-gray-700">
              <li className="flex justify-between py-1">
                <span>Price</span>
                <span className="font-medium text-purple-700">$25/hr</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Type</span>
                <span className="font-medium">Condo</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Rooms</span>
                <span className="font-medium">3</span>
              </li>
            </ul>
          )}
          {activeTab === 'Large' && (
            <ul className="text-sm text-gray-700">
              <li className="flex justify-between py-1">
                <span>Price</span>
                <span className="font-medium text-purple-700">$30/hr</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Type</span>
                <span className="font-medium">Villa</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Rooms</span>
                <span className="font-medium">5</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Bathrooms</span>
                <span className="font-medium">3</span>
              </li>
            </ul>
          )}
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6">
          <button className="w-full bg-purple-700 text-white text-center py-3 rounded-full flex items-center justify-center gap-2">
            <span className="text-lg">🛒</span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
