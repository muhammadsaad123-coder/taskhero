

import Link from "next/link";
import React, { useState, useEffect } from "react";

const LocationModal = ({ isOpen, onClose  }) => {

  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [aptNo, setAptNo] = useState("");
  const [floor, setFloor] = useState("");

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
 
  //Fetch countries and cities
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Example city list for demonstration purposes
  useEffect(() => {
    const fetchCities = () => {
      const exampleCities = ["London", "Manchester", "Birmingham", "Liverpool"];
      setCities(exampleCities);
    };

    fetchCities();
  }, []);

  if (!isOpen) return null;

  const handleDoneClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Save the data or handle the final submission
      
      setStep(1);  
   
      onClose(); // Close the modal after saving
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
        {step === 1 ? (
          <>
            <h2 className="text-lg font-bold mb-4">Your location</h2>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            <button
              onClick={handleDoneClick}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              Done
            </button>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">Add details</h2>
            <div className="mb-4">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your location"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-1 bg-zinc-100 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="">Home, office, etc</option>
                <option value="home">Home</option>
                <option value="office">Office</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block  text-sm font-medium text-gray-600">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter or select your country"
                  className="mt-1 bg-zinc-100  block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  list="countrySuggestions"
                />
                <datalist id="countrySuggestions">
                  {countries.map((country, index) => (
                    <option key={index} value={country} />
                  ))}
                </datalist>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter or select your city"
                  className="mt-1 bg-zinc-100  block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  list="citySuggestions"
                />
                <datalist id="citySuggestions">
                  {cities.map((city, index) => (
                    <option key={index} value={city} />
                  ))}
                </datalist>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Apt No.</label>
              <input
                type="text"
                value={aptNo}
                onChange={(e) => setAptNo(e.target.value)}
                placeholder="Apt No."
                className="mt-1 block bg-zinc-100  w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Floor</label>
              <input
                type="text"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                placeholder="Floor"
                className="mt-1 block bg-zinc-100  w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <Link href={'/Nearby'}>
               <button
              onClick={handleDoneClick}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              Done
            </button>
            </Link>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LocationModal;
