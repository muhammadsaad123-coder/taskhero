import React, { useState } from "react";
import Image from "next/image";
import profilepic from "../pictures/Ellipse 1.png";
import delivery from "../pictures/Deliver.png";
import pickup from "../pictures/Vector.png";
import addgroup from "../pictures/Add User.png";
import GroupOrderModal from "./GroupOrderModal";

const BurgerZoneCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showPickupDetails, setShowPickupDetails] = useState(false);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="relative">
      <div className="rounded-xl w-72 text-center">
        {/* Header */}
        <div className="flex items-center px-4 py-2 rounded-lg bg-white justify-between mb-2">
          <div className="flex items-center gap-3">
            <Image src={profilepic} alt="Burger Zone Logo" className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">Burger Zone</h2>
              <p className="text-xs text-green-500">Trusted by us</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-sm font-semibold">4.3</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.538 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.783.57-1.838-.196-1.538-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.345 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          </div>
        </div>

        {/* Delivery or Pickup */}
        <div className="flex justify-between bg-white p-2 rounded-lg mb-2">
          <button
            className={`flex-1 py-2 rounded-lg font-medium ${!showPickupDetails ? "bg-purple-900 text-white" : "text-gray-500"}`}
            onClick={() => setShowPickupDetails(false)}
          >
            <Image className="absolute mt-0.5 left-5" src={delivery} width={20} height={20} alt="" />
            Delivery
          </button>
          <button
            className={`flex-1 py-2 rounded-lg font-medium ${showPickupDetails ? "bg-purple-900 text-white" : "text-gray-500"}`}
            onClick={() => setShowPickupDetails(true)}
          >
            <Image className="absolute mt-1 right-28" src={pickup} width={10} height={20} alt="" />
            Pick up
          </button>
        </div>

        {/* Pickup Details - Shown When "Pickup" is Clicked */}
        {showPickupDetails && (
          <div className="bg-white p-4 rounded-lg shadow-lg mt-2 transition-opacity duration-300">
            <p className="text-left text-sm font-semibold">
              <span className="text-gray-600">Located:</span> UK, 11 Horseferry Road, London, England
            </p>
            <div className="relative bg-purple-100 p-4 rounded-lg mt-2">
              <div className="w-full h-28 bg-purple-200 rounded-lg relative">
                <p className="absolute top-2 left-2 text-xs text-gray-500">6 Laurel Pass</p>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-purple-600">
                    <Image src={profilepic} alt="Profile" width={32} height={32} className="rounded-full" />
                  </div>
                </div>
              </div>
              <button className="mt-2 bg-purple-900 text-white py-2 px-6 rounded-lg w-full">Expand</button>
            </div>
          </div>
        )}

        {/* Extras */}
        <div className="p-4 rounded-lg bg-white mt-2">
          {["Extra Cheese", "Extra Ketchup", "Extra Lettuce", "Extra Onions"].map((item, index) => (
            <label key={index} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg cursor-pointer mb-2">
              <input type="checkbox" className="w-5 h-5 text-purple-950 ring-purple-200 focus:ring-purple-500" />
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </label>
          ))}
          <hr />
          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <button onClick={handleDecrement} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-purple-600 font-semibold">-</button>
              <span className="text-lg font-medium">{quantity.toString().padStart(2, "0")}</span>
              <button onClick={handleIncrement} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-purple-600 font-semibold">+</button>
            </div>
            <button className="flex items-center gap-2 bg-purple-900 text-white py-3 px-5 rounded-lg text-sm">
              Add to cart
            </button>
          </div>
        </div>

        {/* Group Order */}
        <div className="bg-white mt-2 p-3 rounded-lg">
          <button onClick={handleOpenModal} className="w-full text-purple-600 text-sm font-medium">
            <Image className="absolute left-20" src={addgroup} width={20} height={20} alt="" />
            Group order
          </button>
        </div>
        <GroupOrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default BurgerZoneCard;
