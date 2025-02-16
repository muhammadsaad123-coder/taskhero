// components/Footer.js

import React from 'react';
import Image from 'next/image';
import logo from '../pictures/Logo.png'
import apple from '../pictures/applestore.png'
import google from '../pictures/googleplay.png'
const Footer = () => {
  return (
    <footer className="bg-white py-10    px-20">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        <div className="flex flex-col items-center mb-10 md:items-start  md:mb-0">
          <Image src={logo} alt="TaskHero Logo" width={250} height={50} /> {/* Replace with your logo path */}
          <div className="flex mt-4">
            <a href="#" className="mr-2">
              <Image src={apple} alt="Download on the App Store" width={160} height={40} /> {/* Replace with your App Store image path */}
            </a>
            <a href="#">
              <Image src={google} alt="Get it on Google Play" width={160} height={40} /> {/* Replace with your Google Play image path */}
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex flex-col  mb-6 md:mb-0">
         
            <a href="#" className="text-gray-900  hover:text-purple-600">Get help</a>
            <a href="#" className="text-gray-900 pt-2 hover:text-purple-600">About Taskhero</a>
            <a href="#" className="text-gray-900 pt-2  hover:text-purple-600">Become a tasker</a>
            <a href="#" className="text-gray-900 pt-2 hover:text-purple-600">Become a hero</a>
          </div>
          <div className="flex flex-col">
       
            <a href="#" className="text-gray-900 hover:text-purple-600">Countries we serve</a>
            <a href="#" className="text-gray-900 pt-2 hover:text-purple-600">Heroes near me</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
