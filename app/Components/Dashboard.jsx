'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaUser, FaWallet, FaHeart, FaShoppingCart, FaMapMarkerAlt, FaLink, FaLock, FaGlobe, FaDollarSign, FaHeadset, FaExclamationTriangle, FaFileAlt, FaStar, FaBars } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import profileImage from '../pictures/offerpic.png';
import Profile from './Profile';
import PaymentWallet from './PaymentWallet';
import Favorites from './Favorites';
import Orders from './Orders';
import Adresses from './Adresses';
import PrivacySecurity from './PrivacySecurity';
import Languages from './Languages';
import Currency from './Currency';
import HelpCenter from './HelpCenter';
import Report from './Report';
import TermsCondition from './TermsCondition';
import Rateus from './Rateus';
import Linkedaccount from './Linkedaccount';

const menuItems = [
  { id: 'profile', icon: FaUser, label: 'Profile' },
  { id: 'payment', icon: FaWallet, label: 'Payment & Wallet' },
  { id: 'favorites', icon: FaHeart, label: 'Favorites' },
  { id: 'orders', icon: FaShoppingCart, label: 'My Orders' },
  { id: 'addresses', icon: FaMapMarkerAlt, label: 'Addresses' },
  { id: 'linked', icon: FaLink, label: 'Linked Accounts' },
  { id: 'security', icon: FaLock, label: 'Privacy & Security' },
  { id: 'languages', icon: FaGlobe, label: 'Languages' },
  { id: 'currency', icon: FaDollarSign, label: 'Currency' },
  { id: 'help', icon: FaHeadset, label: 'Help Center' },
  { id: 'report', icon: FaExclamationTriangle, label: 'Report' },
  { id: 'terms', icon: FaFileAlt, label: 'Terms & Conditions' },
  { id: 'rate', icon: FaStar, label: 'Rate us' }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex px-4 h-auto  bg-gray-100 ">
      {/* Sidebar */}
      <aside className={`fixed md:relative md:translate-x-0 top-0 left-0   p-4 pl-0 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:block md:w-72 md:h-auto z-10`}>      
        <div className="flex items-center bg-white shadow-md rounded-xl gap-3 p-4  border-b relative">
          <Image src={profileImage} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-500">Hello!</p>
            <p className="text-sm font-semibold">George James</p>
          </div>
          <FiLogOut
            className="ml-auto text-red-500 text-xl cursor-pointer"
            onClick={() => setShowLogoutModal(true)}
          />
        </div>
        <nav className="mt-2 bg-white  rounded-md p-2">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                setSidebarOpen(false); // Close sidebar on selection
              }}
              className={`flex items-center font-semibold gap-3 w-full p-3 rounded-md hover:bg-gray-200 transition ${activeTab === id ? 'text-purple-900' : ''}`}
            >
              <Icon className={` ${activeTab === id ? 'text-purple-900' : 'text-gray-700'}`} />
              {label}
            </button>
          ))}
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar for Small Screens */}
        <header className="md:hidden  p-4 pb-0 flex justify-between items-center h-auto ">
          <FaBars className="text-xl cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
          {/* <h1 className="text-lg font-semibold">Dashboard</h1> */}
        </header>

        {/* Content */}
        <main className="flex-1 text-gray-800  pb-0 bg-white  rounded-md mt-4 mb-4">
          {activeTab === 'profile' && <Profile profileImage={profileImage} />}
          {activeTab === 'payment' && <PaymentWallet />}
          {activeTab === 'favorites' && <Favorites />}
          {activeTab === 'orders' && <Orders />}
          {activeTab === 'addresses' && <Adresses />}
          {activeTab === 'linked' && <Linkedaccount />}
          {activeTab === 'security' && <PrivacySecurity />}
          {activeTab === 'languages' && <Languages />}
          {activeTab === 'currency' && <Currency />}
          {activeTab === 'help' && <HelpCenter />}
          {activeTab === 'report' && <Report />}
          {activeTab === 'terms' && <TermsCondition />}
          {activeTab === 'rate' && <Rateus />}
        </main>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-red-500 text-lg font-bold text-center">Logout</h2>
            <p className="text-center mt-2">Are you sure you want to log out?</p>
            <div className="flex justify-center mt-4 gap-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg" onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg" onClick={() => console.log('User logged out')}>Yes, Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
