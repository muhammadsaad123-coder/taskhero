import { useState } from "react";
import Image from "next/image";
import paypal from '../pictures/paypal.png';
import google from '../pictures/gogle.png';
import apple from '../pictures/applee.png';
import wallet from '../pictures/Wallet.png';
import mastercard from '../pictures/logos_mastercard.png';

const paymentMethods = [
  { name: "PayPal", icon: paypal },
  { name: "Google Pay", icon: google },
  { name: "Apple Pay", icon: apple },
  { name: "My Wallet", icon: wallet },
  { name: "Mastercard", icon: mastercard, masked: "**** **** **** 4679" },
];

const PaymentModal = ({ isOpen, onClose }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 sm:p-6">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center mb-4">
          {isAddingCard ? (
            <button onClick={() => setIsAddingCard(false)} className="text-gray-500 hover:text-gray-700">
              ← Back
            </button>
          ) : (
            <div></div>
          )}
          <button onClick={onClose} className="text-red-500 hover:text-red-600">✕</button>
        </div>
        <h2 className="text-xl font-semibold mb-4">
          {isAddingCard ? "Add Card" : "Payment Method"}
        </h2>
        {isAddingCard ? (
          <div>
            <div className="bg-purple-800 text-white p-6 rounded-lg mb-4 relative">
              <h3 className="text-lg font-semibold">Mocard</h3>
              <p className="mt-2 text-xl">•••• •••• •••• ••••</p>
              <div className="flex justify-between text-sm mt-2">
                <span className='text-xs'>Card Holder name</span>
                <span className='text-xs'>Expiry date</span>
              </div>
            </div>
            <div className="space-y-3">
              <label className="block">
                <span className="font-semibold text-sm">Card Name</span>
                <input type="text" className="w-full border bg-gray-50 rounded-lg p-2 mt-1" placeholder="John Doe" />
              </label>
              <label className="block">
                <span className="font-semibold text-sm">Card Number</span>
                <input type="text" className="w-full border bg-gray-50 rounded-lg p-2 mt-1" placeholder="2672 4738 7837 7285" />
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="block flex-1">
                  <span className="font-semibold text-sm">Expiry date</span>
                  <input type="text" className="w-full border bg-gray-50 rounded-lg p-2 mt-1" placeholder="MM/YY" />
                </label>
                <label className="block flex-1">
                  <span className="text-sm font-semibold">CVV</span>
                  <input type="text" className="w-full border bg-gray-50 rounded-lg p-2 mt-1" placeholder="•••" />
                </label>
              </div>
            </div>
            <div className='flex justify-center'>
              <button className="w-fit px-4 mt-4 py-2 bg-gray-200 text-gray-500 rounded-md">Continue</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.name} className={`flex items-center justify-between p-3 border bg-purple-50 rounded-lg cursor-pointer ${selectedMethod === method.name ? "border-purple-500 border-dotted border-2 bg-purple-100" : "border-gray-300"}`} onClick={() => setSelectedMethod(method.name)}>
                  <div className="flex items-center gap-2">
                    <Image src={method.icon} alt={method.name} width={30} height={30} />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">{method.name}</h3>
                      {method.masked && <p className="text-xs text-gray-600">{method.masked}</p>}
                    </div>
                  </div>
                  <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${selectedMethod === method.name ? "border-purple-800" : "border-gray-400"}`}>
                    {selectedMethod === method.name && <div className="w-3 h-3 bg-purple-800 rounded-full"></div>}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setIsAddingCard(true)} className="w-full flex font-semibold items-center justify-center gap-2 text-purple-900 border-2 bg-purple-50 py-2 rounded-md mt-3 hover:bg-purple-100">
              <span className='bg-purple-900 text-white h-6 w-5 rounded-md pb-2'>+</span> Add new card
            </button>
            <button className={`w-full mt-4 py-2 rounded-md ${selectedMethod ? "bg-purple-800 text-white hover:bg-purple-900" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`} disabled={!selectedMethod} onClick={onClose}>
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
