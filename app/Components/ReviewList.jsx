// components/ReviewList.js
'use client'
import ReviewCard from "./ReviewCaed";



const ReviewList = ({ reviews }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full  ">
        <div className="flex justify-between px-2 border-b-2 mb-8">

        
      <h2 className="text-xl font-semibold mb-4">{reviews.length} reviews for this tasker</h2>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-xl font-semibold ml-2">{reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length}</span>
        <span className="text-gray-500 ml-2">({reviews.length}+)</span>
      </div>
      </div>
      
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
      <div className="flex justify-center">
      <button className="mt-4 py-3 px-10 bg-white text-sm border-purple-600 border text-purple-600 rounded-xl shadow-md hover:bg-purple-100">
        Load more
      </button>

      </div>
      
    </div>
  );
};

export default ReviewList;
