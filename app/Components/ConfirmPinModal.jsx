'use client';
import { useState, useRef, useEffect } from 'react';
import partypoper from '../pictures/partypoper.png';
import Image from 'next/image';

export default function ConfirmPINModal({ isOpen, onClose }) {
  const [step, setStep] = useState('confirm'); // "confirm" or "success"
  const [pin, setPin] = useState(['', '', '', '']);
  const inputsRef = [useRef(), useRef(), useRef(), useRef()];

  // Reset step and pin when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setStep('confirm'); // Reset to the first step
      setPin(['', '', '', '']); // Clear the PIN
    }
  }, [isOpen]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputsRef[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      inputsRef[index - 1].current.focus();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white mx-4 p-6 rounded-lg w-96 shadow-lg">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={onClose}>
              X
            </button>
          </div>

          {step === 'confirm' ? (
            // Step 1: Confirm PIN Screen
            <>
              <h2 className="text-lg font-semibold text-center">Confirm PIN</h2>
              <p className="text-gray-600 text-center mb-4">Add your PIN to confirm order</p>

              <div className="flex justify-center gap-4 mb-4">
                {pin.map((value, index) => (
                  <input
                    key={index}
                    ref={inputsRef[index]}
                    type="password"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                  />
                ))}
              </div>

              <button
                className="w-full bg-purple-600 text-white py-2 rounded-md font-medium"
                onClick={() => setStep('success')} // Change modal content
              >
                Continue
              </button>
            </>
          ) : (
            // Step 2: Success Screen
            <>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                  <Image src={partypoper} width={60} height={20} alt="Party Popper" />
                </div>
                <h2 className="text-lg font-semibold text-green-600">Order Successful!</h2>
                <p className="text-gray-600 text-center mb-4">
                  You have successfully placed order
                </p>
                <button
                  className="w-40 bg-green-600 text-white py-2 rounded-md font-medium mb-2"
                  onClick={onClose}
                >
                  OK
                </button>
                <button
                  className="w-40 px-6 bg-green-100 text-green-600 py-2 rounded-md font-medium"
                  onClick={() => alert('Track Order Clicked')}
                >
                  Track Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
}