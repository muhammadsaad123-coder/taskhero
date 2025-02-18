'use client'
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Notificationstable from '../components/Notificationtable';

function Page() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="flex overflow-auto min-h-screen bg-[#F8F9FD]">
            <Sidebar />
            <div className="flex-1 mt-4">
                <Header />
                <main className="pt-16 p-6">
                    {!showForm ? (
                        <>
                            <div className="flex justify-between rounded-lg bg-white p-4">
                                <h3 className="py-1 text-purple-800 font-thin">Get in touch with customers</h3>
                                <button 
                                    className="bg-purple-800 text-white py-1 px-2 rounded-lg" 
                                    onClick={() => setShowForm(true)}
                                >
                                    <span className="mr-1">+</span> Create
                                </button>
                            </div>
                            <div>
                                <Notificationstable />
                            </div>
                        </>
                    ) : (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold">Add Notification</h2>
                            <div className="grid grid-cols-3 gap-8 mt-4">
                                <div>
                                    <label className="block text-sm text-gray-700 font-medium">Notifications Header</label>
                                    <input type="text" className=" w-64 border rounded p-2 mt-1" placeholder="Enter title" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700  font-medium">Category</label>
                                    <select className=" w-64 border bg-white rounded p-2 mt-1">
                                        <option>Cleaning</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm  text-gray-700 font-medium">Choose Subcategory</label>
                                    <select className=" w-64 border bg-white rounded p-2 mt-1">
                                        <option>Choose</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm  text-gray-700 font-medium">Choose Country</label>
                                    <select className="w-64 border  bg-white rounded p-2 mt-1">
                                        <option>England</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700  font-medium">Choose Region</label>
                                    <select className="w-64 border bg-white rounded p-2 mt-1">
                                        <option>Manchester</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700  font-medium">Choose Role</label>
                                    <select className="w-64 border bg-white rounded p-2 mt-1">
                                        <option>Heroes</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700  font-medium">Send to</label>
                                    <select className="w-64 bg-white border rounded p-2 mt-1">
                                        <option>In app + SMS + Email</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700  font-medium">Set Date / Time</label>
                                    <input type="datetime-local" className="w-64 border rounded p-2 mt-1" />
                                </div>
                                

                              
                                <div className="col-span-2">
                                    <label className="block text-sm text-gray-700  font-medium">Description</label>
                                    <textarea className="w-full border rounded p-2 mt-1 h-20" placeholder="Type here..."></textarea>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center space-x-2">
                                    <span>Send Now</span>
                                    <input type="checkbox" className="toggle-checkbox" />
                                </div>
                                <button 
                                    className="bg-purple-900 text-white py-2 px-8 rounded-lg" 
                                    onClick={() => setShowForm(false)}
                                >
                                    Publish
                                </button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Page;
