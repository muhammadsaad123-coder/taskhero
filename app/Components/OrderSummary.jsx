'use client';

import Image from 'next/image';
import mastercard from '../pictures/logos_mastercard.png'
export default function OrderSummary({type}) {
  return (
    <div className="max-w-sm   bg-gray-50 flex flex-col gap-2">
      {/* Order Details Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="text-gray-600 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="font-medium text-gray-800">Order no.</span>
            <span className="text-gray-500">#2326g34cf1</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-800">Booking time</span>
            <span className="text-gray-500">01 Jan, 2023 10:20 AM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-800">Location</span>
            <span className="text-gray-500">6238, Central Park, London, UK</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-800">Delivery option</span>
            <span className="text-gray-500">Standard</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-800">Total paid</span>
            <span className="text-gray-500">$10.7</span>
          </div>
          <div className="flex items-center justify-between gap-2 mt-3">
            <span className="font-medium text-gray-800">Type</span>
            <span className="bg-purple-900 text-white text-xs px-8 py-1 rounded-full flex items-center">
               {type}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Summary Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="text-gray-600 text-sm space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="text-gray-800">$7.5</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span className="text-gray-800">$1.5</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span className="text-gray-800">$0.7</span>
          </div>
          <div className="flex justify-between">
            <span>Service Fee</span>
            <span className="text-gray-800">$1.0</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>$10.7</span>
          </div>
          <span className="text-blue-600 font-medium text-right block">Paid</span>
        </div>
      </div>

      {/* Payment Method Card */}
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={mastercard} alt="Mastercard" width={40} height={40} />
          <span className="text-gray-800 font-medium">•••• •••• •••• 4679</span>
        </div>
        <button className="text-purple-600 hover:text-purple-800">✏️</button>
      </div>
    </div>
  );
}
