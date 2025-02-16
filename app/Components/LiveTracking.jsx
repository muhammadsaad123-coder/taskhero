import React from 'react'
import livelocation from '../pictures/livelocationmap.png'
import scan from '../pictures/Scan.png';
import chaticon from '../pictures/blackchaticon.png';
import call from '../pictures/Call.png'
import profilepic from '../pictures/offerpic.png'
import stars from '../pictures/starebundle.png'
import watchicon from '../pictures/watchicon.png'
import bikeicon from '../pictures/bikeicon.png'
import Image from 'next/image'
function LiveTracking() {
  return (
    <>
      <div className='flex flex-wrap md:flex-nowrap justify-normal gap-4'>
        <div >
          <Image src={livelocation} width={650} height={40} alt='' />
        </div>
        <div>
          <div className="max-w-md  rounded-xl  border border-gray-200">
            {/* Rider Profile */}
            <div className="flex bg-white  rounded-xl items-center mb-4 justify-between p-4">
              <div className="flex items-center gap-3">
                <Image
                  src={profilepic}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                  className="rounded-full border"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <div className="flex text-yellow-500 text-sm">

                    <span className="text-gray-300">
                      <Image src={stars} width={130} height={10} alt='' />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 text-gray-600 text-xl">
                <span className="cursor-pointer"><Image src={scan} width={20} height={10} alt='' /></span>
                <span className="cursor-pointer"><Image src={chaticon} width={20} height={10} alt='' /></span>
                <span className="cursor-pointer"><Image src={call} width={20} height={10} alt='' /></span>
              </div>
            </div>

            {/* Status Section */}
            <div className='bg-white rounded-xl p-4 '>
            <div className='flex gap-2'>
              <div>
                <Image src={watchicon} width={50} height={10} alt=''/>
              </div>
              <div className=" mt-0">
                <div className=" text-purple-800 font-semibold text-lg">
                  <span className="text-2xl"></span>
                  12 May 2022
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Rider is expected to arrive at <b>08:47 PM</b> in (5 min)
                </p>

                {/* Location Selection */}
                <div className="mt-3">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <input type="radio" name="location" className="accent-purple-600" defaultChecked />
                    Mirod Road <span className="text-gray-500 text-sm">(Hero)</span>
                  </label>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mt-2">
                    <input type="radio" name="location" className="accent-purple-800" />
                    Bellaire Town <span className="text-gray-500 text-sm">(You)</span>
                  </label>
                </div>
              </div>
              </div>

              {/* Vehicle Details */}
              <div className="flex items-center gap-3 py-2 border-t mt-3">
                <Image
                  src={bikeicon}
                  alt="Bike"
                  width={50}
                  height={50}
                  className="rounded-lg bg-purple-100 p-2"
                />
                <div>
                  <p className="text-gray-900 font-medium">Black Bike Honda</p>
                  <p className="text-gray-800 text-lg font-semibold">LA267</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default LiveTracking