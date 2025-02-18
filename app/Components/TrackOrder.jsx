'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import burger from '../pictures/burgerpicture.png';
import arrow from '../pictures/Arrow - Right 2.png';


const orders = [
  {
    id: 1,
    name: "Double Sausage and Egg Muffin",
    image: burger,
    date: "12/19/2023 03:32 PM",
    status: "Processing",
    statusColor: "text-blue-500",
    dotColor: "bg-blue-500",
    link: "/ordertracking"  // Unique link for each order
  },
  {
    id: 2,
    name: "Double Sausage and Egg Muffin",
    image: burger,
    date: "12/19/2023 03:32 PM",
    status: "Pending",
    statusColor: "text-yellow-500",
    dotColor: "bg-yellow-500",
    link: "/servicetracking"  // Unique link for each order
  },
];

const TrackOrder = () => {
  return (
    <div className="bg-white text-sm   p-4 mt-4 mx-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Track Order</h2>
      <div className="flex gap-4 w-full flex-wrap ">
        {orders.map((order) => (
          <Link href={order.link} key={order.id}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm w-fit flex-shrink-0 cursor-pointer hover:bg-gray-200 transition">
              <div className="flex items-center gap-3">
                <Image src={order.image} alt="" className="rounded-lg" width={60} height={10} />
                <div>
                  <h3 className="font-medium">{order.name}</h3>
                  <p className="text-xs text-gray-500">{order.date}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Status:</span>
                    <span className={`${order.statusColor} font-medium text-xs`}>{order.status}</span>
                    <span className={`${order.dotColor} w-2 h-2 rounded-full`} />
                  </div>
                </div>
              </div>

              <hr className="mt-2 text-black" />
              <div className="flex justify-between items-center">
                <span className="text-purple-500 text-sm mt-2">See more</span>
                <Image src={arrow} width={20} height={10} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
