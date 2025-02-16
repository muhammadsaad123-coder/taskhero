// components/Cart.js
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import payment from '../pictures/payment.png'
import arrow from '../pictures/Arrow - Right 2.png'
import homeicon from '../pictures/homeIcon.png'
import edit from '../pictures/Edit.png'
import DeliveryOptions from './DeliveryOptions';

import ConfirmPinModal from './ConfirmPinModal';
import PaymentModal from './PaymentModal';



const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <Image className='rounded-lg' src={item.image} width={60} height={40} alt='' />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-500">{item.details}</p>
          <p className="text-gray-700">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ items }) => {
  const [promoCode, setPromoCode] = useState('');
  const [note, setNote] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Home");

  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: "", address: "" });
  const [isConfirmPinOpen, setIsConfirmPinOpen] = useState(false);
  const locations = [
    { name: "Home", address: "6238, Central Park, London, UK" },
    { name: "Office", address: "6238, Central Park, London, UK" },
    { name: "Work", address: "6238, Central Park, London, UK" },
  ];


  const subtotal = 7.5;
  const delivery = 1.5;
  const tax = 0.7;
  const serviceFee = 1.0;
  const total = subtotal + delivery + tax + serviceFee;

  return (
    <div className="flex flex-col h-full  bg-gray-100 ">
      <div className="w-full h-full">
        <div className="bg-gray-100 w-full flex-wrap md:flex-nowrap flex justify-start gap-4">


          <div className='w-full  flex flex-col'>


            <div className='w-full bg-white h-fit rounded-lg p-4'>
              <h3 className="text-lg font-semibold ">William's Restaurant</h3>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="flex justify-between mt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">{items.length} pcs</span>
              </div>

            </div>
            <div className='mt-4 w-full'>
              <DeliveryOptions />
            </div>
          </div>

          <div className='w-full md:w-fit'>
            <div className="flex flex-col   bg-gray-100 h-fit">
              <div className="bg-white  rounded-lg shadow-lg p-4 mb-2">

                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Service Fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t-2 font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-2  mb-2">

                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Add promo"
                    className="flex-1 border text-sm w-36 py-2 border-gray-300 bg-gray-100 rounded-2xl p-2 "
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button className="bg-purple-800 text-sm text-white rounded-2xl px-4 py-2">
                    Active
                  </button>
                </div>
              </div>

              <button onClick={() => setIsPayment(true)} className="flex justify-between bg-white rounded-lg shadow-lg p-2 mb-2">

                <div className="flex justify-start gap-2 items-center">
                  <Image src={payment} width={20} height={20} alt='' />
                  <span className="text-sm font-semibold">{selectedMethod || 'Payment Method'} </span>
                  <span className="text-purple-600"></span>
                </div>
                <div>
                  <Image src={arrow} width={20} height={20} alt='' />
                </div>

              </button>
              {/* Modal */}
              <PaymentModal
                isOpen={isPayment}
                onClose={() => setIsPayment(false)}
              />





              <div className="bg-white rounded-lg shadow-lg p-2 md:w-72 w-full overflow-auto mb-2">
                <button className='w-full' onClick={() => setIsOpen(true)}>


                  <div className="flex justify-between items-center ">
                    <span className="flex items-center font-semibold">
                      <span className="bg-purple-400  text-white rounded-full  mr-2">
                        <Image className='' src={homeicon} width={40} height={10} alt='' />
                      </span>
                      Home

                    </span>
                    <span className="text-purple-600 ">
                      <Image src={edit} width={20} height={10} alt='' />
                    </span>

                  </div>
                  <span className="text-gray-500 text-xs  bottom-4 relative">6238, Central Park, London, UK</span>
                </button>

              </div>
              {isOpen && (
                <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white mx-4  w-96 p-6 rounded-lg shadow-lg relative">
                    {/* Top Buttons */}
                    {isAddingAddress && (
                      <button
                        onClick={() => setIsAddingAddress(false)}
                        className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
                      >
                        ←
                      </button>
                    )}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-3 right-3 text-red-500 hover:text-red-600"
                    >
                      X
                    </button>

                    {/* Modal Header */}
                    <h2 className="text-xl font-semibold mb-4">
                      {isAddingAddress ? "Add New Address" : "Location"}
                    </h2>

                    {isAddingAddress ? (
                      // Add New Address Form
                      <div className="space-y-3">
                        <label className="block">
                          <span className="font-semibold text-sm">Location Name</span>
                          <input
                            type="text"
                            className="w-full border bg-gray-50 rounded-lg p-2 mt-1"
                            placeholder="Home, Office, etc."
                            value={newAddress.name}
                            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                          />
                        </label>
                        <label className="block">
                          <span className="font-semibold text-sm">Detailed Address</span>
                          <input
                            type="text"
                            className="w-full border bg-gray-50 rounded-lg p-2 mt-1"
                            placeholder="Street, City, Country"
                            value={newAddress.address}
                            onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                          />
                        </label>

                        {/* Save Button */}
                        <div className='flex justify-center mt-5'>
                          <button
                            className="w-fit px-12 bg-purple-900 text-white py-2 rounded-2xl hover:bg-purple-700"
                            onClick={() => {
                              setIsAddingAddress(false);
                              setIsOpen(false);
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    ) : (
                      // Location List
                      <div>
                        <div className="space-y-3">
                          {locations.map((loc) => (
                            <div
                              key={loc.name}
                              className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${selectedLocation === loc.name ? "border-purple-500 bg-purple-100" : "border-gray-300"}`}
                              onClick={() => setSelectedLocation(loc.name)}
                            >
                              <div className="flex items-center gap-2">
                                <Image src={homeicon} width={40} height={20} alt='' />
                                <div>
                                  <h3 className="font-semibold">{loc.name}</h3>
                                  <p className="text-sm text-gray-600">{loc.address}</p>
                                </div>
                              </div>
                              <Image src={edit} width={20} height={20} alt='' />
                            </div>
                          ))}
                        </div>

                        {/* Add New Address Button */}
                        <div className='flex justify-center mt-5'>
                          <button
                            className="w-fit px-8 rounded-2xl bg-gray-100 font-semibold py-2 text-purple-900 mb-2 hover:bg-gray-300"
                            onClick={() => setIsAddingAddress(true)}
                          >
                            Add New Address
                          </button>
                        </div>

                        {/* Save Button */}
                        <div className='flex justify-center mt-5'>
                          <button
                            className="w-fit px-12 bg-purple-900 text-white py-2 rounded-2xl hover:bg-purple-700"
                            onClick={() => setIsOpen(false)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}


              <div className="bg-white rounded-lg shadow-lg p-2 mb-2">

                <div className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  <span className='font-semibold'>Allergies</span>
                </div>
                <textarea
                  placeholder="Add any note"
                  className="w-full border bg-gray-100 h-36 border-gray-300 rounded-lg p-2"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <button
                onClick={() => setIsConfirmPinOpen(true)}
                className="bg-gray-300 text-purple-800 shadow-xl mb-4 font-bold rounded-lg px-4 py-2 mt-2">
                Continue
              </button>

              <ConfirmPinModal
                isOpen={isConfirmPinOpen}
                onClose={() => setIsConfirmPinOpen(false)} // Close the modal
              />

            </div>

          </div>
        </div>
      </div>


    </div >
  );
};

export default Cart;
