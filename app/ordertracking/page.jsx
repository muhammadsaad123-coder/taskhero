'use client'
import React, { useState } from 'react'

import StatusTracking from '../Components/StatusTracking'
import burger from '../pictures/burgerpicture.png';
import Image from 'next/image';

import OrderSummary from '../Components/OrderSummary';
import LiveTracking from '../Components/LiveTracking'; // New Component

const CartItem = ({ item }) => {
  return (
    <div className="flex w-full justify-between items-center py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <Image className='rounded-lg' src={item.image} width={60} height={40} alt='' />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-500">{item.details}</p>
          <p className="text-gray-700">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

function Page() {
  const [showTracking, setShowTracking] = useState(false); // New state to toggle components

  const [cartItems, setCartItems] = useState([
    { id: 1, image: burger, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
    { id: 2, image: burger, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
    { id: 3, image: burger, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
  ]);

  return (
    <>
      <div className='bg-gray-50'>
      
        <div className='flex sm:w-full md:flex-nowrap flex-wrap w-full gap-2 p-2'>
          <div className='w-full   min-w-72 flex-1'>
            <StatusTracking setShowTracking={setShowTracking} /> 
          </div>

          {!showTracking ? (
            <>
              {/* Order Summary and Restaurant Details */}
              <div className='w-full flex-2'>
                <div className='w-full bg-white h-fit min-w-72 rounded-lg p-4'>
                  <h3 className="text-lg font-semibold ">William's Restaurant</h3>
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                  <div className="flex justify-between mt-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">{cartItems.length} pcs</span>
                  </div>
                </div>
              </div>

              <div className='w-full min-w-72 flex-1'>
                <OrderSummary tpye={'Delivery'} />
              </div>
            </>
          ) : (
            <div className='w-full flex-2'>
              <LiveTracking /> 
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
