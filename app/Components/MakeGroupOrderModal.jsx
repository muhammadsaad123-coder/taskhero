import React, { useState } from 'react';
import Image from 'next/image';
import homeIcon from '../pictures/homeIcon.png';
import editIcon from '../pictures/Edit.png';

const MakeGroupOrderModal = ({ isOpen, onClose }) => {
    const [isScheduled, setIsScheduled] = useState(true);
    const [isCustomLocation, setIsCustomLocation] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 overflow-auto flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl overflow-auto shadow-lg p-6 w-[700px]">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Make group order</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">&times;</button>
                </div>

                {/* Group Name Input */}
                <div className="mb-4 flex justify-normal gap-6">
                    <div className='-mt-2'>
                    <h1 className='text-start '>Group Name</h1>
                    <input type="text" className="border  rounded-2xl w-80 p-3   bg-gray-100" placeholder="Group 7, Design Team, etc." />
                    </div>
                    <div>
                        <h1 className='text-start mb-1'>Order Budget</h1>
                        <label className=' p-1 px-2 text-white bg-purple-600 border border-purple-600 rounded-xl '>none</label> 
                        <label className=' p-1 px-2 text-white bg-purple-600 border border-purple-600 rounded-xl ml-2'>100</label> 
                        <label className=' p-1 px-2 text-white bg-purple-600 border border-purple-600 rounded-xl ml-2'>200</label> 
                        <label className=' p-1 px-2 text-white bg-purple-600 border border-purple-600 rounded-xl ml-2'>custom</label> 
                       
                    </div>
                </div>

                {/* Order Now / Schedule Order */}
                <div className="flex gap-3">
                    <button className={`border-2 p-3 rounded-2xl flex-1 ${!isScheduled ? 'border-purple-800 text-purple-800' : 'border-gray-300 text-gray-600'}`} onClick={() => setIsScheduled(false)}>Order now</button>
                    <button className={`border-2 p-3 rounded-2xl flex-1 ${isScheduled ? 'border-purple-800 text-purple-800' : 'border-gray-300 text-gray-600'}`} onClick={() => setIsScheduled(true)}>Schedule Order</button>
                </div>

                {/* Date & Time Fields */}
                {isScheduled && (
                    <div className="flex justify-end gap-4 mt-4">
                        <input type="date" className="border rounded-lg p-3 w-fit" />
                        <input type="time" className="border rounded-lg p-3 w-fit" />
                    </div>
                )}

                {/* Location Selection */}
                <div className="flex gap-3 mt-6">
                    <button className={`border-2 p-3 rounded-2xl flex-1 ${!isCustomLocation ? 'border-purple-800 text-purple-800' : 'border-gray-300 text-gray-600'}`} onClick={() => setIsCustomLocation(false)}>Same for everyone</button>
                    <button className={`border-2 p-3 rounded-2xl flex-1 ${isCustomLocation ? 'border-purple-800 text-purple-800' : 'border-gray-300 text-gray-600'}`} onClick={() => setIsCustomLocation(true)}>Custom locations</button>
                </div>

                {/* Home Location */}
                <div className="flex items-center justify-between border text-start border-gray-300 rounded-2xl bg-gray-100 p-3 mt-4">
                    <div className="flex items-center">
                        <Image src={homeIcon} width={30} height={30} alt="Home" />
                        <div className="ml-3">
                            <p className="font-semibold">Home</p>
                            <p className="text-sm text-gray-600">6238, Central Park, London, UK</p>
                        </div>
                    </div>
                    <Image src={editIcon} width={20} height={20} alt="Edit" />
                </div>

                {/* Guest Locations */}
                {isCustomLocation && (
                    <div className="mt-4">
                        {[1, 2, 3].map((index) => (
                            <div key={index} className="flex items-center justify-between border-b py-3">
                                <div className="flex items-center">
                                    <Image src={homeIcon} width={30} height={30} alt="Guest" className="mr-3" />
                                    <div>
                                        <p className="text-md text-start font-semibold">Francene Vandyne</p>
                                        <p className="text-sm text-start text-gray-500">+1-202-555-0167</p>
                                        <p className="text-sm text-start bg-gray-200 rounded-2xl p-3 text-purple-600">6238, Central Park, London, UK</p>
                                    </div>
                                </div>
                                <Image src={editIcon} width={20} height={20} alt="Edit" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Complete Button */}
                <button className="bg-purple-600 text-white px-5 py-3 rounded-lg w-full hover:bg-purple-700 transition duration-300 mt-6 text-lg font-semibold">
                    Complete
                </button>
            </div>
        </div>
    );
};

export default MakeGroupOrderModal;
