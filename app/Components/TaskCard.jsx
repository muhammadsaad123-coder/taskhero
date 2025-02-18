// components/TaskCard.js
import React, { useState } from 'react';
import clean from '../pictures/clean.png';
import Image from 'next/image';
import Link from 'next/link';

const TaskCard = ({ title, time, onSeeOffers, onCancelTask }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false); // State for modal visibility

  const handleCancelClick = () => {
    setIsCancelModalOpen(true); // Open the modal
  };

  const handleConfirmCancel = () => {
    onCancelTask(); // Call the parent's cancel task function
    setIsCancelModalOpen(false); // Close the modal
  };

  const handleCloseModal = () => {
    setIsCancelModalOpen(false); // Close the modal without canceling
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-4 flex flex-col items-start">
      {/* Task Details */}
      <div className="flex items-center mb-2">
        <Image src={clean} width={60} height={10} alt="Task Image" />
        <div className="text-lg mt-4 font-semibold">
          {title}
          <div className="text-gray-500 text-sm mb-4">{time}</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full gap-2">
        <Link href="/HeroProfile2">
          <button onClick={onSeeOffers} className="w-full mb-2 bg-purple-800 text-white rounded-lg px-4 py-2">
            See Offers
          </button>
        </Link>
        <button
          onClick={handleCancelClick}
          className="w-full border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
        >
          Cancel Task
        </button>
      </div>

      {/* Confirmation Modal */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white mx-4 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Cancel</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to cancel this task?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
              >
                No
              </button>
              <button
                onClick={handleConfirmCancel}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;