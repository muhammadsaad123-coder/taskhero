'use client'
import React from 'react'
import Image from 'next/image'
import address from '../pictures/Location.png'
import lang from '../pictures/Language.png'
import logo from '../pictures/Logo.png'
import msg from '../pictures/Chat.png'
import booking from '../pictures/Buy.png'
import LocationModal from './LocationModal'
import { useState } from 'react'

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
 
      <nav className='bg-purple-800 w-full p-2 flex justify-end gap-5'>
        <div className='flex justify-end gap-5'>


          <div>
            <Image
              src={address}
              width={200}
              height={20}
              alt='Choose Your Location'
              onClick={handleOpenModal}
            />
               <LocationModal isOpen={isModalOpen} onClose={handleCloseModal}  />

          </div>
          <div>
            <Image className='mt-1'
              src={lang}
              width={50}
              height={20}
              alt='Select Language'
            />
          </div>
        </div>



      </nav> 
 
      <nav className="bg-white shadow-md p-1 pl-2 pr-4 flex items-center justify-around">
        
        <div className='flex flex-wrap gap-x-20 gap-y-5 justify-center  '>

       
        <div className='flex justify-start gap-4 self-start'>
          <div className="flex  items-center">
            <Image src={logo} alt="TaskHero Logo" width={150} height={40} />
          </div>

       
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className=" w-36 sm:w-36 md:w-44 xl:w-56 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

        </div>


     
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Image
              src={msg}
              width={30}
              height={20}
              alt='Chat'
            />
          </button>

          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Image
              src={booking}
              width={30}
              height={20}
              alt='Chat'
            />
          </button>

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
          </div>
        </div>
      </nav> 


      
    </>
  )
}

export default Header