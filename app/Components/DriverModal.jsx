'use client'
import React from "react";
const DriverModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Driver Instructions</h2>

        {/* Collection Instructions */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Collection Instructions</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="collection" value="No Preference" className="mr-2" />
              No Preference
            </label>
            <label className="flex items-center">
              <input type="radio" name="collection" value="Ring the door bell" className="mr-2" />
              Ring the door bell
            </label>
            <label className="flex items-center">
              <input type="radio" name="collection" value="Knock on the door bell" className="mr-2" />
              Knock on the door bell
            </label>
            <label className="flex items-center">
              <input type="radio" name="collection" value="Do not disturb, bogs out" className="mr-2" />
              Do not disturb, bogs out
            </label>
            <label className="flex items-center">
              <input type="radio" name="collection" value="Call me when you arrive" className="mr-2" />
              Call me when you arrive
            </label>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Delivery Instructions</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="delivery" value="No Preference" className="mr-2" />
              No Preference
            </label>
            <label className="flex items-center">
              <input type="radio" name="delivery" value="Ring the door bell" className="mr-2" />
              Ring the door bell
            </label>
            <label className="flex items-center">
              <input type="radio" name="delivery" value="Knock on the door bell" className="mr-2" />
              Knock on the door bell
            </label>
            <label className="flex items-center">
              <input type="radio" name="delivery" value="Do not disturb, packages out" className="mr-2" />
              Do not disturb, packages out
            </label>
            <label className="flex items-center">
              <input type="radio" name="delivery" value="Call me when you arrive" className="mr-2" />
              Call me when you arrive
            </label>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">

     
        <button
          onClick={onClose}
          className="w-fit  bg-gray-200 rounded-2xl px-12 p-2  hover:bg-purple-300"
        >
          Continue
        </button>
        </div>
      </div>
    </div>
  );
};

export default DriverModal;