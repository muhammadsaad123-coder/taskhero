import React, { useState } from 'react';
import avator from '../pictures/offerpic.png';
import Image from 'next/image';
import PaymentModal from './PaymentModal';

const offersData = [
    {
        id: 1,
        image: avator,
        title: 'Apartment Cleaning',
        timestamp: '09:37 PM - 26 Jan, 2020',
        user: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 235
    },
    {
        id: 2,
        image: avator,
        title: 'Carpet Cleaning',
        timestamp: '10:15 AM - 27 Jan, 2020',
        user: 'Jane Smith',
        message: 'Sed elit est, tristique rhoncus mi nec, varius lobortis leo.',
        price: 180
    },
    {
        id: 3,
        image: avator,
        title: 'Window Cleaning',
        timestamp: '02:45 PM - 28 Jan, 2020',
        user: 'Mike Johnson',
        message: 'Etiam magna augue, tincidunt quis velit non, lacinia pulvinar quam. ',
        price: 250
    }
];

function Offers() {
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [isPayment,setIsPayment]=useState();

    const handleOfferClick = (offer) => {
        setSelectedOffer(offer);
    };

    const handleCloseDetails = () => {
        setSelectedOffer(null);
    };

    return (
        <div>

            {/* Offer List - Only visible when no offer is selected */}
            {!selectedOffer && (
                < div className='bg-white p-6 rounded-lg shadow-lg w-full mx-auto'>
                    <h2 className="text-xl  font-semibold mb-4">Offers ({offersData.length})</h2>
                    {offersData.map((offer) => (
                        <div key={offer.id}
                            className="flex w-full mb-4 cursor-pointer border-b pb-4"
                            onClick={() => handleOfferClick(offer)}
                        >
                            <div className='pr-4'>
                                <Image src={offer.image} width={50} height={50} alt='Offer Avatar' />
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="text-lg font-medium">{offer.title}</div>
                                <div className="text-gray-500">{offer.timestamp}</div>
                                <div className="text-purple-800">{offer.user}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Offer Details - Only visible when an offer is selected */}
            {selectedOffer && (
                <div className="bg-gray-100 p-6  rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Message Section */}
                        <div className="bg-white w-full rounded-lg p-6 shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Message</h3>
                            <p className="text-gray-700 mb-4">{selectedOffer.message}</p>
                            <p className="text-gray-500 text-sm">{selectedOffer.timestamp}</p>
                        </div>

                        {/* Offer Details Section */}
                        <div className="w-full md:w-5/12 flex flex-col  rounded-lg">
                            <div className="flex items-center gap-4 mb-2 w-full rounded-lg bg-white p-1">
                                <img src={selectedOffer.image} alt="User Avatar" className="w-12 h-12 rounded-full" />
                                <div>
                                    <div className="text-lg font-medium">{selectedOffer.title}</div>
                                    <div className="text-gray-500">{selectedOffer.user}</div>
                                </div>
                            </div>

                            <div className=" text-lg flex justify-between bg-white rounded-lg p-3 mb-2">
                                <span className="font-medium">Offered price: </span>
                                <span className="text-purple-800 font-semibold">${selectedOffer.price}</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <button onClick={() => setIsPayment(true)} className="bg-purple-900 text-white py-2 rounded-lg hover:bg-purple-700 transition">Accept</button>
                                <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition">Decline</button>
                            </div>
                        </div>
                        <PaymentModal
                            isOpen={isPayment}
                            onClose={() => setIsPayment(false)}
                        />
                    </div>

                    {/* Back Button */}
                    <button className="mt-6 text-blue-500 hover:underline" onClick={handleCloseDetails}>
                        Back to Offers
                    </button>
                </div>
            )}
        </div>
    );
}

export default Offers;
