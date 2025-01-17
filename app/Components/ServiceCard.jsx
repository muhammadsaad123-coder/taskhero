import Image from "next/image";
import Hearticon from "../pictures/Heart.png";
import star from "../pictures/Star.png";

export default function ServiceCard({ image, title, rating, reviews, description, price }) {
  return (
    <div className="flex flex-col sm:flex-row bg-zinc-50 shadow-md rounded-xl p-2 w-full sm:min-w-96 sm:w-5/12">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <div className="rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={220}
            height={220}
            className="w-full sm:w-[220px] h-auto"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Content Section */}
      <div className="flex-grow sm:ml-4 mt-4 sm:mt-0">
        <div className="flex justify-between items-start">
          {/* Title */}
          <h2 className="text-lg font-semibold">{title}</h2>
          {/* Heart Icon */}
          <Image src={Hearticon} alt="Favorite" width={30} height={30} />
        </div>
        {/* Rating */}
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Image
            src={star}
            alt="Rating"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-purple-600 font-medium">{rating}</span>
          <span className="ml-1">({reviews})</span>
        </div>
        {/* Description */}
        <p className="text-gray-500 mt-2">{description}</p>
        {/* Price */}
        <p className="text-sm text-purple-600 font-semibold mt-3">
          From {price}
        </p>
      </div>
    </div>
  );
}
