import Image from "next/image";
import React, { useState } from "react";
import { User, Calendar, Mail, Phone, MapPin, Flag, ChevronDown } from "lucide-react";

function Profile({ profileImage }) {
  const [formData, setFormData] = useState({
    name: "John Doe",
    dob: "2023-06-06",
    gender: "Male",
    email: "john.doe@domain.com",
    phone: "111 467 378 399",
    address: "Times Square NYC, Manhattan",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="py-4  max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h2 className="text-lg font-semibold mb-4 text-center">Edit Profile</h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6 relative">
        <Image
          src={profileImage}
          width={80}
          height={80}
          className="rounded-full border-2 border-gray-300"
          alt="User"
        />
      </div>

      {/* Form Fields */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 p-2 gap-4">
        <div className="relative flex items-center">
          <input
            name="name"
            className="p-3 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <User className="absolute right-3 text-gray-500" size={20} />
        </div>

        <div className="relative flex items-center">
          <input
            name="dob"
            className="p-3 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          <Calendar className="absolute right-3 text-gray-500" size={20} />
        </div>

        <div className="relative flex items-center">
          <select
            name="gender"
            className="p-3 border bg-gray-100 rounded-lg w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.gender}
            onChange={handleChange}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
          <ChevronDown className="absolute right-3 text-gray-500" size={20} />
        </div>

        <div className="relative flex items-center">
          <input
            name="email"
            className="p-3 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <Mail className="absolute right-3 text-gray-500" size={20} />
        </div>

        <div className="relative flex items-center">
          <span className="absolute left-3 flex items-center">
            <Flag className="text-gray-500" size={20} />
            <span className="ml-1 text-gray-600">+1</span>
          </span>
          <input
            name="phone"
            className="p-3 pl-14 border rounded-lg bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>

        <div className="relative flex items-center">
          <input
            name="address"
            className="p-3 border rounded-lg bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <MapPin className="absolute right-3 text-gray-500" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
