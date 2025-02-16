'use client'
import React from 'react'
import Image from 'next/image'
import address from '../pictures/location1.png'
import lang from '../pictures/Language.png'
import logo from '../pictures/Logo (1).png'
import msg from '../pictures/Chat.png'
import booking from '../pictures/Buy.png'
import LocationModal from './LocationModal'
import { useState } from 'react'
import Link from 'next/link'
import downicon from '../pictures/Down icon.png'
import global from '../pictures/global.png'
import { useRouter } from "next/navigation";
function Header() {
  const [isModalOpen, setModalOpen] = useState(false);


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <>

      <nav className='bg-purple-800 w-full p-2 flex justify-center md:justify-end gap-5'>
        <div className='flex justify-end gap-5'>


          <div className='flex gap-1 pt-1 justify-normal'>
            <Image
              src={address}
              width={20}
              height={20}
              alt='Choose Your Location'
              onClick={handleOpenModal}
            />
            <div>
              <p className='text-white text-sm'>Chose your location</p>
            </div>
            <div>
              <Image
                src={downicon}
                width={20}
                height={20}
                alt='Choose Your Location'
                onClick={handleOpenModal}
              />
            </div>
            <LocationModal isOpen={isModalOpen} onClose={handleCloseModal} />

          </div>
          <div className=' flex justify-normal gap-1'>

            <Image className='mt-1'
              src={global}
              width={20}
              height={20}
              alt='Select Language'
            />
            <div>
              <p className='text-white mt-1 text-sm'>ENG</p>

            </div>
          </div>
        </div>



      </nav>

      <nav className="bg-white shadow-md p-1 pl-2 pr-4 flex items-center justify-around">

        <div className='flex flex-wrap gap-x-20 gap-y-2 justify-center  '>


          <div className='flex justify-start gap-4 self-start'>
            <div className="flex  items-center">
              <Image src={logo} alt="TaskHero Logo" width={150} height={40} />
            </div>


            <div>
      <input
        type="text"
        placeholder="Search"
        className="w-36 sm:w-36 md:w-44 xl:w-56 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Detect Enter key press
      />
    </div>

          </div>



          <div className="flex items-center space-x-4">
            <Link href={'/chat'} className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Image
                src={msg}
                width={30}
                height={20}
                alt='Chat'
              />
            </Link>
            <Link href={'/addtocart'}>

              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Image
                  src={booking}
                  width={30}
                  height={20}
                  alt='Chat'
                />
              </button>
            </Link>
            <Link href={'/profile'}>
              <div className="relative ">
                <button className="flex ml-2  items-center justify-center w-8 h-8 rounded-full border-2 border-blue-500 bg-white hover:bg-blue-50">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Avatar"
                        className="w-8 h-8 object-cover"
                      />
                    </div>
                  </div>

                </button>
              </div>
            </Link>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Header