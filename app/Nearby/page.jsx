'use client'
import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { useState } from 'react';
import Card from '../Components/Card';
import logo from '../pictures/1_clothes&shoes.png'
import foodlogo from '../pictures/pngwing 1.png'
import FoodCard from '../Components/FoodCard';
import Footer from '../Components/Footer';
import SelectableCard from '../Components/SelectableCard';

function page() {
  // const [physical, setPhysical] = useState([]);
  // const [food, setFood] = useState([]);
  // const [digital, setDigital] = useState([]);
  // const [interest, setInterest] = useState([]);

  // Function to fetch data
  // const fetchData = async (endpoint, setState) => {
  //   try {
  //     const response = await fetch(endpoint);
  //     if (!response.ok) {
  //       throw new Error(`Error fetching data from ${endpoint}`);
  //     }
  //     const data = await response.json();
  //     setState(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error.message);
  //   }
  // };

  // Fetch data on component mount
  // useEffect(() => {
  //   fetchData("/api/physical", setPhysical);
  //   fetchData("/api/food", setFood);
  //   fetchData("/api/digital", setDigital);
  //   fetchData("/api/interest", setInterest);
  // }, []);

  const [activeTab, setActiveTab] = useState(0);

  //this is use for to tested the components not represet actually data
  const categories = [
    { name: 'Clothes & Shoes', icon: logo }, // Replace with your icon path
    { name: 'Food', icon: logo },
    { name: 'Digital', icon: logo },
    { name: 'Interests', icon: logo }
  ];
  const cardData = [
    {
      imagePath: logo, // Replace with your image path
      title: "Clothes & Shoes",
      route: "/clothes-and-shoes", // Target route
    },
    {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    },
    {
      imagePath: logo, // Replace with your image path
      title: "Washing ",
      route: "/electronics", // Target route
    }];
  const FoodData = [
    {
      imagePath: foodlogo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
      price: 20,
      info: '441 Kcal'

    },
    {
      imagePath: foodlogo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
      price: 20,
      info: '441 Kcal'

    }, {
      imagePath: foodlogo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
      price: 20,
      info: '441 Kcal'

    },
  ];

  const tabs = [
    { label: 'Physical', content: 'Tab content 1' },
    { label: 'Food', content: 'Tab content 2' },
    { label: 'Digital', content: 'Tab content 3' },
    { label: 'Interest', content: 'Tab content 3' },
  ];

  return (
    <>
      <Header/>
      <div className='py-5 px-8'>
        <h1 className='text-xl font-bold'>Catagory</h1>
        <input type="text"
          placeholder='Search'
          className='w-56 p-2 bg-zinc-200 mt-2 rounded-xl' />


        <div>
          <div className="flex border-b mt-1 border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 md:px-4 px-2 -mb-px border-b-2 font-bold ${activeTab === index
                    ? 'border-purple-900 border-b-2 text-purple-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-6  rounded-md mt-4">
            {activeTab === 0 &&

              <div className='flex justify-center md:justify-start gap-x-4 gap-y-4 flex-wrap'>
                {cardData.map((item, index) => (
                  <Card
                    key={index}
                    imagePath={item.imagePath}
                    title={item.title}
                    route={item.route}
                  />
                ))}
              </div>
            }
            {activeTab === 1 &&
              <div className='flex  justify-center md:justify-start  gap-x-4 gap-y-4 flex-wrap'>
                {FoodData.map((item, index) => (
                  <FoodCard
                    key={index}
                    imagePath={item.imagePath}
                    title={item.title}
                    price={item.price}
                    info={item.info}
                    route={item.route}
                  />
                ))}
              </div>}
            {activeTab === 2 &&
              <div className='flex  justify-center md:justify-start  gap-x-4 gap-y-4 flex-wrap'>
                {cardData.map((item, index) => (
                  <Card
                    key={index}
                    imagePath={item.imagePath}
                    title={item.title}
                    route={item.route}
                  />
                ))}
              </div>}
            {activeTab === 3 &&

              <div>
                <div className='flex justify-between flex-wrap gap-y-2  mb-5 -mt-2 '>
                  <div>
                    <h1 className=' font-bold text-2xl'>Your Interest</h1>
                    <p className=' text-gray-500'>Chose your Interest for a better experience</p>
                  </div>
                  <div>
                    <button className='bg-purple-700 py-2 px-6 rounded-2xl text-white'>Personalize</button>
                  </div>

                </div>
                <div className='flex justify-start gap-x-4 gap-y-4 flex-wrap'>


                  {categories.map((category) => (
                    <SelectableCard key={category.name} title={category.name} icon={category.icon} />
                  ))}
                </div>
              </div>}
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default page