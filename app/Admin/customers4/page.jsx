"use client";

import Image from "next/image";
import { Check, ChevronDown } from "lucide-react"; 
import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function CustomerDetails() {
  const customer = {
    name: "Ahmad Donin",
    id: "23",
    orders: "123", // Added orders
    userFor: "2+ years", // Added userFor
    memberSince: "23-Nov-2023",
    dob: "12-Jan-1996",
    gender: "Male",
    email: "serikabdurahman@gmail.com",
    phone: "+1 111 467 378 399",
    address: "University of Leicester University Road Leicester LE1 7RH United Kingdom",
    paymentMethod: "4576 **** **** 6532", // Assuming this is needed later
    subscriptions: [
      { name: "Premium +", status: "Paid $25", duration: "2+ years", transId: "003423134" }, // Added transId
    ],
    documents: [
      { name: "ID card", verified: false }, // Changed to false to match image
      { name: "Driver licence", verified: true },
    ],
    avatar: "/admin/chat.jpeg",
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6 pt-24">
          <div className="bg-white rounded-xl p-8">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-500 mb-4">
              <a href="#" className="text-purple-500">Customers</a> &gt; Requests
            </div>

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4"> {/* Added gap for spacing */}
                <Image src={customer.avatar} alt={customer.name} width={80} height={80} className="rounded-full" />
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {customer.name}
                  </h1>
                  <div className="flex items-center gap-4 mt-2"> {/* Added gap and mt-2 */}
                    <p className="text-sm text-gray-500">ID: {customer.id}</p>
                    <p className="text-sm text-gray-500">Orders: {customer.orders}</p>
                    <p className="text-sm text-gray-500">User for: {customer.userFor}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscriptions and Documents */}
            <div className="mt-8 flex flex-col md:flex-row gap-8"> {/* Flex for responsiveness */}
              <div className="md:w-1/2"> {/* Adjust width for larger screens */}
                <div className="bg-gray-100 rounded-lg p-4"> {/* Added background and padding */}
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Subscription: {customer.subscriptions[0].name}</p> {/* Display subscription name */}
                    <button className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm">
                      {customer.subscriptions[0].name} <ChevronDown size={16} /> {/* Added button with icon */}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {customer.subscriptions[0].status} | Trans ID: {customer.subscriptions[0].transId}
                  </p>
                </div>

                <div className="mt-8 bg-gray-100 rounded-lg p-4"> {/* Added background and padding */}
                  {customer.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between mb-4">
                      <p>{doc.name}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${doc.verified ? 'text-green-500' : 'text-yellow-500'}`}>
                          {doc.verified ? 'Verified' : 'Unverified'}
                        </span>
                        <Check size={16} className={doc.verified ? 'text-green-500' : 'text-gray-300'} /> {/* Conditional icon color */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2"> {/* Adjust width for larger screens */}
                <div className="mt-8"> {/* Added margin top */}
                  <h2 className="text-lg font-semibold text-gray-900">
                    Account details
                  </h2>
                  <div className="mt-4">
                    <p>Member since: {customer.memberSince}</p>
                    <p>Date of birth: {customer.dob}</p>
                    <p>Gender: {customer.gender}</p>
                    <p>E-mail: {customer.email} <Check size={16} className="inline-block ml-1 text-green-500" /></p> {/* Added inline checkmark */}
                    <p>Phone: {customer.phone}</p>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900 mt-6">
                    Address
                  </h2>
                  <div className="mt-4">
                    <p>{customer.address}</p>
                  </div>

                  {/* Payment method section - if needed */}
                  {/* <h2 className="text-lg font-semibold text-gray-900 mt-6">
                    Payment method
                  </h2>
                  <div className="mt-4">
                    <p>{customer.paymentMethod}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}