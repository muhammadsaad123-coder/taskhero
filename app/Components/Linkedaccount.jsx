'use client';

import { useState } from 'react';
import Image from 'next/image';
import facebook from '../pictures/facebook.png';
import google from '../pictures/gogle.png';
import apple from '../pictures/apple.png';

export default function LinkedAccount() {
  const [linkedAccounts, setLinkedAccounts] = useState({
    google: true,
    apple: true,
    facebook: false,
  });

  const [modalState, setModalState] = useState({
    rememberMe: false,
    biometricID: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const toggleAccount = (account) => {
    setLinkedAccounts((prev) => ({
      ...prev,
      [account]: !prev[account],
    }));
  };

  const toggleModalAccount = (account) => {
    setModalState((prev) => ({
      ...prev,
      [account]: !prev[account],
    }));
  };

  const handleToggleClick = (account) => {
    toggleAccount(account); // Update the state immediately
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleApply = () => {
    setShowAlert(true);
    setAlertMessage('Changes applied successfully!');
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 h-full">
      <div className="h-fit bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Linked accounts</h2>

        <div className="space-y-4">
          {[{ id: 'google', name: 'Google', logo: google },
            { id: 'apple', name: 'Apple', logo: apple },
            { id: 'facebook', name: 'Facebook', logo: facebook }].map((account) => (
            <div key={account.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={account.logo} alt={account.name} width={24} height={24} />
                <span className="text-gray-800 font-medium">{account.name}</span>
              </div>
              <button
                onClick={() => handleToggleClick(account.id)}
                className={`relative w-10 h-5 flex items-center rounded-full transition ${
                  linkedAccounts[account.id] ? 'bg-purple-800' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                    linkedAccounts[account.id] ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-red-500 text-xl"
            >
              ✖
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">Linked accounts</h2>

            <div className="space-y-4">
              {/* Modal Toggle Buttons */}
              {[{ id: 'rememberMe', name: 'Remember me' },
                { id: 'biometricID', name: 'Biometric ID' }].map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{item.name}</span>
                  <button
                    onClick={() => toggleModalAccount(item.id)}
                    className={`relative w-10 h-5 flex items-center rounded-full transition ${
                      modalState[item.id] ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                        modalState[item.id] ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}

              {/* Navigation Links */}
              {['Google Authenticator', 'PIN'].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{item}</span>
                  <span className="text-gray-500 text-lg">›</span>
                </div>
              ))}
            </div>

            {/* Apply Button */}
            <div className='flex justify-center'>
            <button
              onClick={handleApply}
              className="w-fit bg-purple-900 px-6 text-white py-2 rounded-lg mt-6"
            >
              Apply
            </button>
              </div>
           

            {/* Alert Box */}
            {showAlert && (
              <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-lg">
                {alertMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
