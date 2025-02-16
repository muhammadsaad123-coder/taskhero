'use client';
import React from 'react';
import { useState } from 'react';
import delivery from '../pictures/Deliver.png';
import pickup from '../pictures/Vector.png';
import prority from '../pictures/prority.png';
import standard from '../pictures/standard.png';
import shudle from '../pictures/schudle.png';
import driver from '../pictures/Driver.png';
import ticket from '../pictures/Ticket.png';
import arrow from '../pictures/Arrow - Right 2.png';
import Image from 'next/image';
import VoucherModal from './VoucherModal';
import DriverModal from './DriverModal';
import ScheduleModal from './ScheduleModal';
import parcel from '../pictures/parcel.png';
import distance from '../pictures/distance.png';
import map from '../pictures/Map.png';

function DeliveryOptions() {
    const [selectedOption, setSelectedOption] = useState('Standard');
    const [deliveryType, setDeliveryType] = useState('Delivery');
    const [isOpen, setIsOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white w-full p-4 sm:p-6 rounded-2xl shadow-md mx-auto">
            {/* Delivery/Pickup Toggle Buttons */}
            <div className="flex space-x-2 h-full bg-gray-100 p-1 rounded-full">
                <button
                    className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
                        deliveryType === 'Delivery' ? 'bg-purple-900 text-white' : 'text-gray-500'
                    }`}
                    onClick={() => setDeliveryType('Delivery')}
                >
                    <Image className="inline-block w-fit h-fit mr-2 sm:mr-4" src={delivery} width={40} height={20} alt="Delivery" />
                    Delivery
                </button>
                <button
                    className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
                        deliveryType === 'Pickup' ? 'bg-purple-900 text-white' : 'text-gray-500'
                    }`}
                    onClick={() => setDeliveryType('Pickup')}
                >
                    <Image className="inline-block w-fit h-fit mr-2 sm:mr-4" src={pickup} width={10} height={20} alt="Pickup" />
                    Pickup
                </button>
            </div>

            {/* Conditional Rendering for Delivery/Pickup Content */}
            {deliveryType === 'Delivery' ? (
                <div>
                    {/* Add Delivery-specific content here */}
                </div>
            ) : (
                <div className="mt-4">
                    {/* Pickup Content */}
                    <div className="flex flex-col sm:flex-row justify-start gap-4">
                        <div className="bg-gray-100 w-full sm:w-1/2 gap-x-2 px-2 py-1 rounded-lg flex justify-start items-center mb-4">
                            <div>
                                <Image src={parcel} width={50} height={10} alt="Parcel" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold">Ayyaz Haider</div>
                                <div className="text-xs text-gray-500">6238, Central Park, London UK</div>
                            </div>
                        </div>

                        <div className="bg-gray-100 w-full sm:w-1/2 gap-x-2 px-2 py-1 rounded-lg flex justify-start items-center mb-4">
                            <div>
                                <Image src={distance} width={50} height={10} alt="Distance" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold">Distance</div>
                                <div className="text-xs text-gray-500">0.5m</div>
                            </div>
                        </div>
                    </div>

                    {/* Map Image */}
                    <div className="w-full">
                        <Image src={map} width={1000} height={60} alt="Map" className="w-full h-auto" />
                    </div>
                </div>
            )}

            {/* Delivery Options (Priority, Standard, Schedule) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {['Priority', 'Standard', 'Schedule'].map((option) => (
                    <button
                        key={option}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border text-sm font-medium transition-all ${
                            selectedOption === option ? 'border-purple-600 bg-purple-100' : 'border-gray-300'
                        }`}
                        onClick={() => {
                            if (option === 'Schedule') {
                                setIsScheduleOpen(true);
                            }
                            setSelectedOption(option);
                        }}
                    >
                        <div className="flex justify-normal">
                            <Image
                                className="inline-block w-fit h-fit mr-4"
                                src={
                                    option === 'Priority' ? prority :
                                    option === 'Standard' ? standard :
                                    shudle
                                }
                                width={30}
                                height={20}
                                alt={option}
                            />
                            <span className="-ml-2">{option}</span>
                        </div>
                        <span className="text-xs ml-10 -mt-2 text-gray-500">15-20 min</span>
                    </button>
                ))}
                <ScheduleModal isOpen={isScheduleOpen} setIsOpen={setIsScheduleOpen} />
            </div>

            {/* Driver Instructions and Voucher Buttons */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex text-start items-center bg-gray-100 justify-between p-4 border rounded-xl text-sm font-medium border-gray-300"
                >
                    <Image src={driver} width={30} height={10} alt="Driver" />
                    Driver Instructions
                    <Image src={arrow} width={30} height={10} alt="Arrow" />
                </button>
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center bg-gray-100 justify-between p-4 border rounded-xl text-sm font-medium border-gray-300"
                >
                    <Image className="p-0.5" src={ticket} width={30} height={10} alt="Voucher" />
                    Add a voucher
                    <Image src={arrow} width={30} height={10} alt="Arrow" />
                </button>
            </div>

            {/* Modals */}
            <VoucherModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <DriverModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default DeliveryOptions;