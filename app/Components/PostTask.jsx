// components/TaskForm.js
import Image from 'next/image';
import React, { useState } from 'react';
import map from '../pictures/Map.png';
import TaskDescription from './TaskDescription';
import partypoper from '../pictures/bluepartypoper.png'

const PostTask = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Choose');
    const [subCategory, setSubCategory] = useState('Choose');
    const [activeStep, setActiveStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState('asap');
    const [selectedDay, setSelectedDay] = useState('Today');
    const [fromTime, setFromTime] = useState('09:41 AM');
    const [toTime, setToTime] = useState('09:41 AM');
    const [houseType, setHouseType] = useState('All');
    const [rooms, setRooms] = useState(null);
    const [bedrooms, setBedrooms] = useState(null);
    const [bathrooms, setBathrooms] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const days = ['Today', 'Tomorrow', 'Mon', 'Tue'];

    const steps = [
        { id: 1, name: 'Title and Category' },
        { id: 2, name: 'Location' },
        { id: 3, name: 'When do you need this done?' },
        { id: 4, name: 'Details' },
        { id: 5, name: 'Description and images' },
        { id: 6, name: 'Budget' },
    ];

    const handleRoomSelect = (number) => setRooms(number);
    const handleBedroomSelect = (number) => setBedrooms(number);
    const handleBathroomSelect = (number) => setBathrooms(number);

    const handleNext = () => {
        if (activeStep < steps.length) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleStepClick = (stepId) => {
        setActiveStep(stepId);
    };

    const handlePost = () => {
        setIsModalOpen(true);
    };
  

    const handleCloseFirstModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenSecondModal = () => {
        setIsModalOpen(false);
        setIsSecondModalOpen(true);
    };

    
    

    const handleCloseSecondModal = () => {
        setIsSecondModalOpen(false);
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 1:
                return (
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-4">
                    <div className="mb-4 w-full sm:w-96">
                        <label className="text-gray-700 block">Title</label>
                        <textarea
                            type="text"
                            maxLength={50}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border rounded-lg w-full p-2"
                            placeholder="Enter task title"
                        />
                        <div className="text-gray-500 text-sm">{title.length}/50</div>
                    </div>
                    <div className="w-full sm:w-96">
                        <div className="mb-4">
                            <label className="block text-gray-700">Categories</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="border rounded-lg w-full p-2"
                            >
                                <option>Choose</option>
                                <option>Cleaning</option>
                                <option>Gardening</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Sub Category</label>
                            <select
                                value={subCategory}
                                onChange={(e) => setSubCategory(e.target.value)}
                                className="border rounded-lg w-full p-2"
                            >
                                <option>Choose</option>
                                <option>Residential</option>
                                <option>Commercial</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                );
            case 2:
                return (
                    <div className="mb-4">
                        <label className="block text-gray-700">Enter Your Location</label>
                        <input
                            type="text"
                            className="border mb-4 rounded-lg w-full p-2"
                            placeholder="Enter location"
                        />
                        <Image src={map} width={1000} height={10} alt='' />
                    </div>
                );
            case 3:
                return (
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-4 font-semibold">Set date and time</label>
                        <div className="flex md:flex-nowrap flex-wrap justify-start gap-4">
                            <button
                                onClick={() => setSelectedOption('asap')}
                                className={`text-sm p-4 py-10 rounded-lg border ${selectedOption === 'asap'
                                    ? 'bg-purple-100 text-purple-950 border-purple-900'
                                    : 'bg-gray-100 text-gray-700 border-gray-300'
                                    }`}
                            >
                                As soon as possible
                            </button>
                            <button
                                onClick={() => setSelectedOption('schedule')}
                                className={`text-sm p-4 py-10 rounded-lg border ${selectedOption === 'schedule'
                                    ? 'bg-purple-100 text-purple-950 border-purple-900'
                                    : 'bg-gray-100 text-gray-700 border-gray-300'
                                    }`}
                            >
                                Schedule Task
                            </button>
                        </div>
                        {selectedOption === 'schedule' && (
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-4">Schedule</h3>
                                <div className="flex justify-start md:flex-nowrap flex-wrap gap-4 mb-6">
                                    {days.map((day) => (
                                        <button
                                            key={day}
                                            onClick={() => setSelectedDay(day)}
                                            className={`text-sm p-2 rounded-lg border ${selectedDay === day
                                                ? 'bg-purple-100 text-purple-950 border-purple-900'
                                                : 'bg-gray-100 text-gray-700 border-gray-300'
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-start gap-x-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">From</label>
                                        <input
                                            type="time"
                                            value={fromTime}
                                            onChange={(e) => setFromTime(e.target.value)}
                                            className="border w-full rounded-lg p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">To</label>
                                        <input
                                            type="time"
                                            value={toTime}
                                            onChange={(e) => setToTime(e.target.value)}
                                            className="border w-full rounded-lg p-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            case 4:
                return (
                    <div className="mb-4">
                    <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-10">
                        <div className="w-full sm:w-72">
                            <label className="block text-gray-700 mb-2">Select type of your house</label>
                            <select
                                value={houseType}
                                onChange={(e) => setHouseType(e.target.value)}
                                className="border rounded-lg w-full p-3"
                            >
                                <option>All</option>
                                <option>Apartment</option>
                                <option>House</option>
                                <option>Condo</option>
                            </select>
                        </div>
                        <div className="w-full sm:w-auto">
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Select the number of rooms?</label>
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => handleRoomSelect(num)}
                                            className={`border-purple-800 border-2 rounded-lg py-2 px-4 ${
                                                rooms === num ? 'bg-purple-800 text-white' : 'text-purple-800'
                                            }`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handleRoomSelect('More')}
                                        className={`border-purple-800 border-2 rounded-lg py-2 px-4 ${
                                            rooms === 'More' ? 'bg-purple-800 text-white' : 'text-purple-800'
                                        }`}
                                    >
                                        More
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Select the number of bedrooms?</label>
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => handleBedroomSelect(num)}
                                            className={`border-purple-800 border-2 rounded-lg py-2 px-4 ${
                                                bedrooms === num ? 'bg-purple-800 text-white' : 'text-purple-800'
                                            }`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handleBedroomSelect('More')}
                                        className={`border-purple-800 border-2 rounded-lg py-2 px-4 ${
                                            bedrooms === 'More' ? 'bg-purple-800 text-white' : 'text-purple-800'
                                        }`}
                                    >
                                        More
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Select the number of bathrooms?</label>
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => handleBathroomSelect(num)}
                                            className={`border-purple-800 border-2 rounded-lg py-2 px-4 ${
                                                bathrooms === num ? 'bg-purple-800 text-white' : 'text-purple-800'
                                            }`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handleBathroomSelect('More')}
                                        className={`border-purple-800 border-2 rounded-lg py-2 px-4 ${
                                            bathrooms === 'More' ? 'bg-purple-800 text-white' : 'text-purple-800'
                                        }`}
                                    >
                                        More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                );
            case 5:
                return (
                    <div className="mb-4">
                        <TaskDescription />
                    </div>
                );
            case 6:
                return (
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Budget</label>
                        <input
                            type="number"
                            className="border rounded-lg bg-gray-50 w-64 p-2"
                            placeholder="Enter budget"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const FirstModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white mx-4 w-96 p-5 rounded-lg">
                <div className='flex justify-end'>
                    <button
                        onClick={handleCloseFirstModal}
                        className="text-red-700 font-bold rounded-lg px-6 py-2"
                    >
                        X
                    </button>
                </div>
                <h2 className="text-lg font-semibold mb-1 text-center">Average current fare calculated by your task and other service providers is: $150</h2>
                <p className="mb-4 text-center">We recommend raising your fare to $140.7</p>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={handleOpenSecondModal}
                        className="bg-purple-900 text-white rounded-lg px-6 py-2"
                    >
                        Raise to $140.7
                    </button>
                    <button
                        onClick={handleOpenSecondModal}
                        className="bg-gray-200 text-purple-950 font-bold rounded-lg px-6 py-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );

    const SecondModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white mx-4 w-96 p-2 rounded-lg">
                <div className='flex justify-end'>
                    <button
                        onClick={handleCloseSecondModal}
                        className="text-blue-950 font-bold rounded-lg px-6 py-2"
                    >
                        X
                    </button>
                </div>
                <div className='flex justify-center'>
                <Image className='text-purple-900' src={partypoper} width={100} height={20} alt=''/>
                     
                </div>
                <h2 className="text-lg font-semibold mb-1 text-purple-900 text-center">Congratulations</h2>
                <p className="mb-4 text-center">Your task is posted</p>
                <div className="flex justify-center">
                    <button
                        onClick={handleCloseSecondModal}
                        className="bg-purple-900 text-white rounded-lg px-6 py-2"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-100">
            <div className="flex justify-center md:justify-between flex-wrap gap-4 p-6 rounded-2xl bg-white mb-6">
                {steps.map((step) => (
                    <button
                        key={step.id}
                        onClick={() => handleStepClick(step.id)}
                        className={`text-sm w-32 p-1 rounded-lg ${activeStep === step.id
                            ? 'bg-purple-800 text-white'
                            : 'bg-gray-50 text-gray-600'
                            }`}
                    >
                        {step.name}
                    </button>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg">
                {renderStepContent()}

                <div className="flex justify-end">
                    <button
                        onClick={activeStep === steps.length ? handlePost : handleNext}
                        className="bg-purple-900 text-white rounded-lg px-6 py-2"
                    >
                        {activeStep === steps.length ? 'Post' : 'Next'}
                    </button>
                </div>
            </div>

            {isModalOpen && <FirstModal />}
            {isSecondModalOpen && <SecondModal />}
        </div>
    );
};

export default PostTask;