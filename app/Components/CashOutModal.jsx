// components/Modal.js
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
const CashOutModal = ({ cash, changeModal, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white rounded-2xl mx-4 p-6 w-[400px] shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{cash}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-red-500">
                <AiOutlineClose size={20} />
              </button>
            </div>

            {/* Input Field */}
            <div className="mt-4">
              <label className="block text-sm font-semibold">Enter Amount</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md mt-1"
                placeholder="Enter amount"
              />
            </div>

            {/* Choose Account */}
            <div className="mt-4">
              <label className="block text-sm font-semibold">Choose Account</label>
              <div className="flex items-center justify-between p-3 border rounded-md mt-1">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    width={24}
                    height={24}
                  />
                  <span>**** **** **** 4679</span>
                </div>
                <button onClick={changeModal} className="text-purple-600">✎</button>
              </div>
            </div>

            {/* Reason Input */}
            <div className="mt-4">
              <label className="block text-sm font-semibold">Reason</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md mt-1"
                placeholder="For shopping, etc."
              />
            </div>

            {/* Add Money Button */}
            <div className=' flex justify-center'>   
            <button className="w-fit px-6 bg-purple-900 text-white py-2 text-sm mt-6 rounded-2xl hover:bg-purple-700">
              Add Money
            </button>
            </div>
          </div>
        </div>
  );
};

export default CashOutModal;
