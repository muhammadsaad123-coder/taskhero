'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, CreditCard } from 'lucide-react';
import mastercard from '../pictures/logos_mastercard.png';
import googleLogo from '../pictures/gogle.png';
import { FaRegTimesCircle } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import PaymentModal from './PaymentModal';
import CashOutModal from './CashOutModal';

const transactions = [
    { id: 1, name: 'Bank Transfer - Freida Varnes', date: '09/12/23', amount: '$401.5', logo: mastercard },
    { id: 2, name: 'Bank Transfer - Rayford Chenail', date: '09/12/23', amount: '$401.5', logo: googleLogo },
];

const allTransactions = [
    ...transactions,
    { id: 3, name: 'Bank Transfer - Freida Varnes', date: '07/12/23', amount: '$401.5', logo: mastercard },
    { id: 4, name: 'Bank Transfer - Rayford Chenail', date: '09/12/23', amount: '$401.5', logo: googleLogo },
];

export default function PaymentWallet() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [receiptOpen, setReceiptOpen] = useState(false);

    const openModal = () => {
        setReceiptOpen(true);
    };

    const closeModal = () => {
        setReceiptOpen(false);
    };
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, [isModalOpen]);

    const changeModal = () => {
        setIsModalOpen(false);
        setIsOpen(false);
        setIsPayment(true);
    };

    return (
        <div className="max-w-4xl  py-6 rounded-xl mx-auto md:w-full sm:w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg ">
                    <h3 className="font-bold">Payment & Wallet</h3>
                    <h2 className="text-3xl font-bold text-center text-purple-900 mt-2">$347.3</h2>
                    <p className="text-gray-500 text-sm text-center">Your Balance</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 mt-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-600 text-xs text-white px-6 py-2 rounded-2xl font-medium w-fit sm:w-auto"
                        >
                            Add Cash
                        </button>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-blue-600 text-xs text-white px-6 py-2 rounded-2xl font-medium w-fit sm:w-auto"
                        >
                            Cash Out
                        </button>
                    </div>
                    <button onClick={changeModal} className="  flex w-full items-center justify-between bg-gray-200 mt-4 p-3 rounded-lg">
                        <span className="flex items-center space-x-2">
                            <CreditCard className="text-black" size={20} />
                            <span className="text-black text-sm font-medium">Payment Method</span>
                        </span>
                        <ChevronRight className="text-gray-600" size={20} />
                    </button>
                </div>
                <div className="bg-white p-4  rounded-lg">
                    <h3 className="text-black font-semibold text-base sm:text-sm">Recent Transactions</h3>
                    <div className="space-y-3 mt-4">
                        {(showAll ? allTransactions : transactions).map((tx) => (
                            <div
                                onClick={openModal}
                                key={tx.id}
                                className="flex gap-y-8 items-center justify-between bg-gray-100 p-4 sm:p-2 rounded-lg flex-wrap"
                            >
                                <div className="flex items-center space-x-3 sm:space-x-2">
                                    <Image
                                        src={tx.logo}
                                        width={30}
                                        height={30}
                                        className="w-7 h-7 sm:w-6 sm:h-6"
                                        alt={tx.name}
                                    />
                                    <div>
                                        <p className="text-black font-medium text-sm sm:text-xs">{tx.name}</p>
                                        <p className="text-gray-500 text-xs sm:text-[10px]">{tx.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-2 sm:space-x-1">
                                    <span className="text-red-500 font-medium text-sm sm:text-xs">{tx.amount}</span>
                                    <ChevronRight className="text-gray-600 text-xs sm:text-[10px]" size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <p
                        onClick={() => setShowAll(!showAll)}
                        className="text-purple-700 text-right mt-4 cursor-pointer font-medium text-sm sm:text-xs"
                    >
                        {showAll ? "Show Less" : "See All"}
                    </p>
                </div>

            </div>
            <CashOutModal cash={'Add Cash'} changeModal={changeModal} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <CashOutModal cash={'Cash Out'} changeModal={changeModal} isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <PaymentModal isOpen={isPayment} onClose={() => setIsPayment(false)} />
            {receiptOpen && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white mx-4 rounded-lg shadow-lg p-6 w-96 relative">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-red-500">
                            <FaRegTimesCircle size={20} />
                        </button>
                        <h2 className="text-2xl font-bold text-center text-purple-700">taskhero</h2>
                        <p className="text-center font-semibold  mt-1">Transaction Successful</p>
                        <p className="text-center text-sm text-gray-500">You have sent money</p>
                        <hr className='mt-2'/>
                        <div className="mt-1 text-xs text-gray-700">
                            <p className="text-gray-500">09-Dec-2023  03:35PM</p>
                            <p className="text-gray-500">ID #2470168749</p>
                        </div>
                        <div className=" pt-3 text-xs">
                            <h3 className="font-semibold">Received by</h3> 
                            <p className="text-gray-500 ">Augustina Midgett</p>

                            <p className="text-gray-500">2672 4738 7387 7285</p>
                            <h3 className="font-semibold mt-2">Received from</h3> 
                            <p className="text-gray-500"> John Doe</p>
                            
                            <p className="text-gray-500">2******************7285</p>
                        </div>
                        <div className="mt-4 border-t pt-3 text-sm">
                            <p className="flex mb-2 justify-between"><span>Amount</span> <span>$2000.00</span></p>
                            <p className="flex justify-between"><span>Tax + Other charges</span> <span>$47.00</span></p>
                            <p className="flex justify-between font-bold text-md mt-2">
                                <span>Total Amount</span> <span>$2047.00</span>
                            </p>
                        </div>
                        <div className="mt-6 flex justify-between text-gray-600">
                            <button className="flex items-center gap-1 text-sm hover:text-gray-900">
                                <IoShareOutline size={18} /> Share
                            </button>
                            <button className="flex items-center gap-1 text-sm hover:text-gray-900">
                                <MdSaveAlt size={18} /> Save to Device
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
