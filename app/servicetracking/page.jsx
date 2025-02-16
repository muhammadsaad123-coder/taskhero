'use client'
import React, { useState } from 'react'
import Header from '../Components/Header'
import StatusTracking2 from '../Components/StatusTracking2'
import ShoeRepair from '../pictures/ShoeRepair.png';
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
                    <div className='flex justify-start gap-x-4'>
                        <div className='bg-purple-300 px-3 py-1 w-fit rounded-3xl '>   <p className=" text-xs text-purple-900">{item.Shoelaces}</p></div>
                        <div className='bg-purple-300 px-3 py-1 w-fit rounded-3xl '>   <p className=" text-xs text-purple-900">{item.BlackPolish}</p></div>

                    </div>

                </div>

            </div>
        </div>
    );
};

function Page() {
    const [showTracking, setShowTracking] = useState(false); // New state to toggle components

    const [cartItems, setCartItems] = useState([
        { id: 1, image: ShoeRepair, name: 'Shoe Repair', details: 'Pick up at 117 Clarendon Park Rd', Shoelaces: 'Shoe Laces', BlackPolish: 'Black Polish' },
        { id: 2, image: ShoeRepair, name: 'Shoe Repair', details: 'Pick up at 117 Clarendon Park Rd', Shoelaces: 'Shoe Laces', BlackPolish: 'Black Polish' },
        { id: 3, image: ShoeRepair, name: 'Shoe Repair', details: 'Pick up at 117 Clarendon Park Rd', Shoelaces: 'Shoe Laces', BlackPolish: 'Black Polish' },
    ]);

    return (
        <>
            <div className='bg-gray-50 h-full'>
               
                <div className='flex w-full md:flex-nowrap flex-wrap gap-2 p-2'>
                    <div className='w-full min-w-72 flex-1'>
                        <StatusTracking2 />
                    </div>
                    <div className='w-full flex-2'>
                        <div className='w-full bg-white h-fit rounded-lg p-4'>
                            <h3 className="text-lg font-semibold ">Ayaz Hiader</h3>
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
                        <OrderSummary type={'Mail'} />
                    </div>


                </div>
            </div>
        </>
    );
}

export default Page;
