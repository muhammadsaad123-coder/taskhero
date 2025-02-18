'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import bronze from '../pictures/bronze.png';
import silver from '../pictures/silver.png';
import gold from '../pictures/gold.png';
import plantinum from '../pictures/plantinum.png';
import { FaHeadset, FaWhatsapp, FaGlobe, FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import Image from 'next/image';

export default function HelpCenter() {
  const [activeTab, setActiveTab] = useState('FAQ');
  const [activeCategory, setActiveCategory] = useState('General');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = ['General', 'Account', 'Service', 'Payment'];
  const badges = [
    { level: 'Level 1 - Bronze', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: bronze },
    { level: 'Level 2 - Silver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: silver },
    { level: 'Level 3 - Gold', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: gold },
    { level: 'Level 4 - Platinum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: plantinum },
  ];

  const faqData = {
    General: [
      { question: 'What is Taskhero?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { question: 'How to make a payment?', answer: '' },
      { question: 'How do I cancel an order?', answer: '' },
      { question: 'How can I exit the app?', answer: '' },
    ],
    Account: [
      { question: 'How do I create an account?', answer: 'You can sign up by clicking on the register button and following the steps.' },
      { question: 'How do I reset my password?', answer: '' },
    ],
    Service: [
      { question: 'What services does Taskhero offer?', answer: 'We offer a variety of services including task management, project tracking, and collaboration tools.' },
    ],
    Payment: [
      { question: 'How do I request a refund?', answer: 'Refunds can be requested through the payment settings in your account.' },
    ],
  };
  
  const contacts = [
    { name: "Customer Service", icon: <FaHeadset />, link: "#" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "#" },
    { name: "Website", icon: <FaGlobe />, link: "#" },
    { name: "Facebook", icon: <FaFacebook />, link: "#" },
    { name: "X", icon: <FaXTwitter />, link: "#" },
    { name: "Instagram", icon: <FaInstagram />, link: "#" },
  ];

  return (
    <>
      <h3 className='font-semibold p-4 pb-0  mb-4 text-base sm:text-lg md:text-xl'>Help Center</h3>

    
    <div className="flex p-4 justify-center w-full ">
    <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl  rounded-lg">
      <div className="flex text-sm  flex-wrap justify-between border-b pb-2 text-center">
        {['FAQ', 'Badges', 'Contact us'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs sm:text-sm md:text-base w-1/3 pb-2 ${activeTab === tab ? 'text-purple-900 border-b-2 border-purple-700' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>
  
      {activeTab === 'FAQ' && (
        <div>
          <div className="flex  flex-wrap justify-center gap-2 mt-4 mb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-xs sm:text-sm rounded-full border ${activeCategory === category ? 'bg-purple-900 text-white' : 'border-purple-700 text-purple-900'}`}
              >
                {category}
              </button>
            ))}
          </div>
  
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-8 rounded-lg bg-gray-100 outline-none text-xs sm:text-sm"
            />
            <Search className="absolute left-2 top-2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
  
          <div>
            {faqData[activeCategory].map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left bg-gray-100 p-2 rounded-lg flex justify-between items-center text-xs sm:text-sm"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={`transition-transform text-purple-900 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && faq.answer && (
                  <p className="mt-2 p-2 bg-gray-50 rounded-lg text-xs sm:text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
  
      {activeTab === 'Badges' && (
        <div className="space-y-4 p-4">
          {badges.map((badge, index) => (
            <div key={index} className="bg-gray-50 text-xs sm:text-sm p-3 rounded-lg flex flex-col sm:flex-row justify-between items-center shadow">
              <div>
                <h3 className="font-semibold text-purple-700">{badge.level}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
              <Image src={badge.image} alt={badge.level} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mt-2 sm:mt-0" />
            </div>
          ))}
        </div>
      )}
  
      {activeTab === 'Contact us' && (
        <div className="space-y-4 p-4">
          {contacts.map((contact, index) => (
            <a key={index} href={contact.link} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg shadow hover:bg-gray-200 transition text-xs sm:text-sm">
              <span className="text-base text-purple-700">{contact.icon}</span>
              <span className="font-medium text-gray-700">{contact.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
  </>
  );
}
