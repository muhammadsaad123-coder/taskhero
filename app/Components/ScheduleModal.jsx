'use client';

import React from "react";
import { useState } from "react";

export default function ScheduleModal({ isOpen, setIsOpen }) {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('Today');

  const timeSlots = [
    '09:00 AM - 09:30 AM',
    '09:15 AM - 09:45 AM',
    '09:30 AM - 10:00 AM',
    '09:45 AM - 10:15 AM',
    '10:00 AM - 10:30 AM',
    '10:15 AM - 10:45 AM',
  ];

  const days = ['Today', 'Tomorrow', 'Mon', 'Tue'];

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white mx-4 p-6 rounded-lg w-96">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Schedule</h2>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-600 hover:text-gray-800"
            >
              {/* Replace with your close icon */}
              ✕
            </button>
          </div>
          <div className="flex gap-2 mb-6">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 py-2 rounded-md text-center text-sm font-medium transition-all ${
                  selectedDay === day ? 'bg-purple-800 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="space-y-3 mb-6">
            {timeSlots.map((time, index) => (
              <label
                key={index}
                className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-all ${
                  selectedTime === time ? 'border-purple-600 bg-purple-50' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="schedule"
                  value={time}
                  checked={selectedTime === time}
                  onChange={() => setSelectedTime(time)}
                  className="accent-purple-900"
                />
                <span className="text-sm">{time}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setIsOpen(false)} 
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-md text-sm font-medium hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                // Handle schedule logic here
                setIsOpen(false);
              }} 
              className="flex-1 bg-purple-900 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-all"
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    )
  );
}