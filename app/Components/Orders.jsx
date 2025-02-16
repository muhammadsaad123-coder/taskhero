"use client";
import { useState } from "react";
import burger from '../pictures/pngwing 1.png'
import shoeRepair from '../pictures/ShoeRepair.png'
import Image from "next/image";
export default function Orders() {
  const [activeTab, setActiveTab] = useState("Current");

  const orders = {
    Current: [
      {
        id: 1,
        title: "Double Sausage and Egg Muffin",
        date: "12/19/2023 03:32 PM",
        status: "Processing",
        statusColor: "text-blue-500",
        image:burger, // Replace with actual image
      },
      {
        id: 2,
        title: "Double Sausage and Egg Muffin",
        date: "12/19/2023 03:32 PM",
        status: "Pending",
        statusColor: "text-yellow-500",
        image: burger,
      },
      {
        id: 3,
        title: "Shoe Repair",
        date: "12/19/2023 03:32 PM",
        status: "Being mailed",
        statusColor: "text-blue-500",
        image: shoeRepair,
      },
    ],
    Completed: [
      {
        id: 4,
        title: "Coffee Beans",
        date: "12/18/2023 10:15 AM",
        status: "Delivered",
        statusColor: "text-green-500",
        image: burger,
      },
    ],
    Reviewed: [
      {
        id: 5,
        title: "Wireless Headphones",
        date: "12/15/2023 08:00 PM",
        status: "Reviewed",
        statusColor: "text-purple-500",
        image: shoeRepair,
      },
    ],
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-lg font-semibold mb-4">My Orders</h2>
      {/* Tabs */}
      <div className="flex text-xs sm:text-lg  border-b">
        {["Current", "Completed", "Reviewed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-center ${
              activeTab === tab ? "border-b-2 border-purple-800 font-semibold" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Order List */}
      <div className="mt-4">
        {orders[activeTab].map((order) => (
          
          <div
            key={order.id}
            className="flex bg-gray-100  items-center justify-between p-4  shadow rounded-lg mb-3"
          >
            <Image src={order.image} alt={order.title} width={40} height={40} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1 ml-4">
              <h3 className="text-sm font-medium">{order.title}</h3>
              <p className="text-xs text-gray-500">{order.date}</p>
              <p className={`text-xs font-semibold ${order.statusColor}`}>Status: {order.status}</p>
              <button className="text-sm text-purple-500 mt-1 hover:underline">See more</button>
            </div>
            <span className="text-xl">›</span>
          </div>
          
          
        ))}
      </div>
    </div>
  );
}
