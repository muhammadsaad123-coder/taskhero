import React, { useState } from 'react';
import Image from 'next/image';
import avator from '../pictures/Avatar.png';
import gift from '../pictures/Gift.png';
import MakeGroupOrderModal from './MakeGroupOrderModal';

const GroupOrderModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // State to track the modal step
   
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    if (!isOpen) return null;

    const handleOrderNowClick = () => {
        setStep(2); // Change to the next content step
    };

    const handleBackClick = () => {
        setStep(1); // Go back to the previous content step
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl p-6 overflow-y-auto max-h-[90vh]">
                {step === 1 && (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Group Order</h2>
                            <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">&times;</button>
                        </div>
                        <p className="mb-4 text-start text-gray-500">
                            Order for your friends/family or office group who are at multiple locations.
                        </p>
                        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
                            <div className="w-full md:w-1/2">
                                <div className="bg-blue-500 text-white p-4 text-start rounded-lg mb-4">
                                    <div className="flex justify-end">
                                        <Image src={avator} width={40} height={40} alt="Avatar" />
                                    </div>
                                    <h4 className="font-bold text-2xl -mt-8">CREATE <br /> GROUP</h4>
                                    <p className="text-sm text-gray-100">Add guests & pay</p>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={handleOrderNowClick}
                                            className="mt-2 bg-white text-blue-500 px-4 py-1.5 rounded-xl"
                                        >
                                            Order now
                                        </button>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-start text-sm">Requests (1)</h3>
                                <div className="bg-purple-600 text-white p-4 mt-2 text-start rounded-lg mb-4">
                                    <div className="flex justify-end">
                                        <Image src={gift} width={40} height={40} alt="Gift" />
                                    </div>
                                    <h4 className="font-bold text-white -mt-8">Tech team have<br /> invited you</h4>
                                    <p>Budget: $26.7</p>
                                    <p>01:36 pm, 29 Aug</p>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={handleOrderNowClick}
                                            className="mt-2 bg-white text-purple-500 px-4 py-1.5 rounded-2xl"
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="font-semibold text-start mb-4 text-sm">My Groups (3)</h3>
                                {['Design Team', 'Design Team', 'Design Team'].map((group, index) => (
                                    <div
                                        key={index}
                                        className="flex border border-purple-600 text-purple-700 justify-between items-center py-6 px-4 bg-gray-100 rounded-lg mb-4 w-full"
                                    >
                                        <span className="text-start text-sm md:text-base">
                                            {group}<br /> on 29 Aug
                                        </span>
                                        <button className="text-purple-600 text-sm md:text-base">Invite Again</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={handleBackClick}
                                className="text-gray-600 hover:text-gray-900 text-xl"
                            >
                                &larr;
                            </button>
                            <h2 className="text-xl font-semibold ">Add Guests</h2>
                            <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">&times;</button>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            />
                            <div className="space-y-4">
                                {[{
                                    name: 'Lauralee Quintero', phone: '+1-300-555-0135'
                                }, {
                                    name: 'Annabel Rohan', phone: '+1-202-555-0136'
                                }, {
                                    name: 'Alfonzo Schuessler', phone: '+1-300-555-0119'
                                }, {
                                    name: 'Augustina Midgett', phone: '+1-300-555-0161'
                                }, {
                                    name: 'Freida Varnes', phone: '+1-300-555-0136'
                                }].map((guest, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer"
                                    >
                                        <div>
                                            <h4 className="font-semibold text-sm md:text-base">{guest.name}</h4>
                                            <p className="text-sm text-gray-500">{guest.phone}</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                                        />
                                    </label>
                                ))}
                            </div>
                            <button onClick={openModal} className="w-fit px-10 mt-4 bg-purple-800 text-white py-2 rounded-xl">
                                Continue
                            </button>
                        </div>
                    </>
                )}
            </div>
            <MakeGroupOrderModal isOpen={isModalOpen} onClose={closeModal} />
            
        </div>
    );
};

export default GroupOrderModal;
