'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import burger from '../pictures/burgerpicture.png';
import Cart from './Cart';
import Mytask from './Mytask';
import Offers from './Offers';



export default function Addtocart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, image: burger, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
        { id: 2, image: burger, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
        { id: 3, image: burger, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
    ]);

    const [showCheckout, setShowCheckout] = useState(false);
    const [activeTab, setActiveTab] = useState('Orders'); // State to manage active tab
   
    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    // Content for each tab
    const renderContent = () => {
        switch (activeTab) {
            case 'Orders':
                return (
                    <div className="bg-white rounded-lg shadow-lg  flex-1">

                        <div>
                            {!showCheckout ? (
                                <div>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex p-4 flex-col sm:flex-row justify-between items-center border-b border-gray-200 py-4">
                                            {/* Item Details */}
                                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                                <Image
                                                    className="rounded-lg"
                                                    src={item.image}
                                                    width={60}
                                                    height={40}
                                                    alt={item.name}
                                                />
                                                <div>
                                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                                    <p className="text-gray-500 text-sm">{item.details}</p>
                                                    <p className="text-gray-700 font-medium">${item.price}</p>
                                                </div>
                                            </div>

                                            {/* Buttons for Checkout and Remove */}
                                            <div className="flex items-center space-x-4">
                                                <button
                                                    onClick={handleCheckout}
                                                    className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
                                                >
                                                    Checkout
                                                </button>
                                                <button
                                                    onClick={() => handleRemove(item.id)}
                                                    className="text-red-500 hover:text-red-600 transition-all"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className='bg-gray-100 '>
                                    <Cart className="bg-gray-200" items={cartItems} />
                                </div>
                            )}
                        </div>


                    </div>

                );
            case 'Tasks':
                return (
                    <div className="bg-white rounded-lg  flex-1">
                        <Mytask />
                    </div>
                );
            case 'Offers':
                return (
                    <div className="bg-white rounded-lg  flex-1">
                      <Offers/>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 p-4 sm:p-6">

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                {/* Sidebar for Cart Navigation */}
                <div className="flex bg-white flex-col h-fit w-full md:w-3/12 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Cart</h2>
                    <button
                        className={`text-start p-2 rounded-lg ${activeTab === 'Orders' ? 'bg-purple-900 text-white' : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        onClick={() => setActiveTab('Orders')}
                    >
                        Orders
                    </button>
                    <button
                        className={`text-start p-2 rounded-lg ${activeTab === 'Tasks' ? 'bg-purple-900 text-white' : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        onClick={() => setActiveTab('Tasks')}
                    >
                        Tasks
                    </button>
                    <button
                        className={`text-start p-2 rounded-lg ${activeTab === 'Offers' ? 'bg-purple-900 text-white' : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        onClick={() => setActiveTab('Offers')}
                    >
                        Offers
                    </button>
                </div>

                {/* Content Section */}
                {renderContent()}
            </div>

        </div>
    );
}