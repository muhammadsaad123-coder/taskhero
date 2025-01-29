// components/Cart.js
import React from 'react';

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="flex justify-between items-center border-b border-gray-200 py-4">
            <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.details}</p>
                <p className="text-gray-700">${item.price}</p>
            </div>
            <div className="flex items-center">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                    Checkout
                </button>
                <button onClick={() => onRemove(item.id)} className="text-red-500 ml-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Addtocard = ({ items, onRemove }) => {
    return (
        <div className="flex flex-col h-screen bg-gray-100 p-6">
            <div className="flex space-x-6">
                <div className="bg-white rounded-lg shadow-lg p-4 h-fit w-1/4">
                    <h2 className="text-xl font-semibold mb-4">Cart</h2>
                    <nav className="flex flex-col ">
                        <button className="bg-purple-600 text-start checked:bg-purple-600  text-white p-2 rounded-lg mb-2">Orders</button>
                        <button className="text-gray-700 text-start p-2 rounded-lg mb-2 hover:bg-gray-200">Tasks</button>
                        <button className="text-gray-700 text-start p-2 rounded-lg hover:bg-gray-200">Offers</button>
                    </nav>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 flex-1">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} onRemove={onRemove} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Addtocard;
