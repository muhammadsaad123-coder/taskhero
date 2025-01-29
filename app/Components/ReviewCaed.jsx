// components/ReviewCard.js

import Image from 'next/image';

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg  mb-1">
      <div className="flex-shrink-0">
        <Image
          className="rounded-full"
          src={review.avatar}
          alt={review.name}
          width={50}
          height={50}
        />
      </div>
      <div className="ml-4 border-b-2 pb-8">
        <div className="text-lg font-semibold">{review.name}</div>
        <div className="text-gray-500">{review.location}</div>
        <div className="flex items-center mt-2">
          {Array.from({ length: review.rating }).map((_, index) => (
            <span key={index} className="text-yellow-500">★</span>
          ))}
        </div>
        <p className="mt-2 text-gray-700">{review.text}</p>
      </div>
      <div className="ml-auto text-gray-500 text-sm">{review.date}</div>
      
    </div>
    
  );
};

export default ReviewCard;
