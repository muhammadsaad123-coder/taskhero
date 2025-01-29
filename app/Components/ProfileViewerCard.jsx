import Image from "next/image";
import bookmark from '../pictures/Bookmark.png'
import chat from '../pictures/Chat.png'
import tick from '../pictures/Tick Square.png'
import profilepic from '../pictures/Ellipse 1.png'
import goldbadge from '../pictures/goldbadge.png' 

export default function ProfileViewerCard({ image, name, address, onClickProfile }) {
  return (
    <div className=" shadow-md rounded-xl  p-4 w-72 min-h-full bg-white text-center relative pt-4">
      {/* Bookmark Icon */}
      <div className="flex justify-between text-left mb-10">
        <div >
          <h4 className="text-lg">HeroProfile</h4>
          <span className="text-purple-600 text-xs">TimeZone:</span>
          <span className=" ml-1 text-xs">Thurs,25 April 2024,12:45pm</span>
        </div>

        <div >
          <Image src={bookmark} alt="Bookmark Icon" width={16} height={10} />
        </div>

      </div>


      {/* Profile Image */}
    
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image className=" absolute left-44 top-44" src={goldbadge} width={18} height={20} alt=""/>
          <Image src={profilepic} alt={`${name}'s Profile`} width={96} height={96} objectFit="cover" />
        </div>
      </div>
 
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
   
      <div className="flex justify-center mb-1">

        <h3 className="text-green-700">Trusted by us</h3>

      </div>
      <div className="flex justify-between mt-5">

      
        <button className="flex items-center border border-purple-600 rounded-full px-4 py-2 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition duration-300">
          <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
            <span className="text-white">
              <Image src={chat} width={140} height={140} alt="..."/>
            </span>
          </div>
          <span className="text-xs">Contact me</span>
        </button>
      
      
        <button className="flex items-center border border-purple-600 rounded-full px-5 py-2 font-semibold bg-purple-600 text-white transition duration-300">
          <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
            <span className="text-white">
            <Image src={tick} width={80} height={80} alt="..."/>
            </span>
          </div>
          <span className="text-xs">Hire Me </span>
        </button>
        </div>
     
    </div>
  );
}
