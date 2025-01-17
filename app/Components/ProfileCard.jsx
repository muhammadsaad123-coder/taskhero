import Image from "next/image";
import bookmark from '../pictures/Bookmark.png'
import star from '../pictures/Group 618.png'
import profileicon from '../pictures/profile.png'

export default function ProfileCard({ image, name, address, onClickProfile }) {
  return (
    <div className=" shadow-md rounded-xl p-4 w-64 min-h-full bg-zinc-50 text-center relative pt-10">
      {/* Bookmark Icon */}
      <div className="absolute top-4 right-4">
        <Image src={bookmark} alt="Bookmark Icon" width={20} height={20} />
      </div>
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image src={image} alt={`${name}'s Profile`} width={96} height={96} objectFit="cover" />
        </div>
      </div>
      {/* Name */}
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      {/* Rating */}
      <div className="flex justify-center mb-1">
        
          <Image
           
            src={star}
            alt="Star"
            width={90}
            height={16}
            className="mr-1"
          />
       
      </div>
      {/* Address */}
      <p className="text-sm text-gray-500 mb-4">{address}</p>
      {/* Divider */}
      <hr className="border-gray-200 mb-4" />
      {/* Profile Button */}
      <div className="flex justify-center">

     
      <button
        onClick={onClickProfile}
        className="flex items-center justify-center text-purple-600 font-semibold text-sm"
      >
        <Image src={profileicon} alt="Profile Icon" width={20} height={20} className="mr-1" />
        Profile
      </button>
      </div>
    </div>
  );
}
