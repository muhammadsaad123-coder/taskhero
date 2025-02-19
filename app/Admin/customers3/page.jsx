"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, Filter, Columns } from "lucide-react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const customers = Array(10).fill({ // Reduced for clarity
  name: "Lincoln Danin",
  id: "00001",
  email: "taskhero@gmail.com",
  phone: "+1 111 467 378 399",
  joined: "21-March-2024",
  action: "Account verification",
  avatar: "/admin/chat.jpeg", // Add avatar path
});

export default function CustomerList() {
  const [viewMode, setViewMode] = useState("list"); // Default to list view
  const [sortBy, setSortBy] = useState("A-Z");
  const [filterType, setFilterType] = useState("Most popular");

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6 pt-24">
          <div className="bg-white rounded-xl">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-900">
                Customer request list
              </h1>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                  <Filter size={16} />
                  <span className="text-sm text-gray-700">Filters</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                  <Columns size={16} />
                  <span className="text-sm text-gray-700">View</span>
                </button>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4"> {/* Changed to vertical on small screens */}
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-50 border-none text-sm focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-50 rounded-lg border-none text-sm focus:ring-2 focus:ring-purple-500"
                >
                  <option value="A-Z">A-Z</option>
                  {/* Add more sorting options */}
                </select>

                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 bg-gray-50 rounded-lg border-none text-sm focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Most popular">Most popular</option>
                  {/* Add more filter options */}
                </select>
              </div>
            </div>

            {/* Customer List */}
            <div className="p-6">
              <table className="w-full border-collapse table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"></th> {/* Empty header for avatar */}
                    <th className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                    <th className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Joined on</th>
                    <th className="p-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                      <td className="p-3">
                        <Image
                          src={customer.avatar}
                          alt={customer.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </td>
                      <td className="p-3 text-sm text-gray-700">{customer.name}</td>
                      <td className="p-3 text-sm text-gray-700">{customer.id}</td>
                      <td className="p-3 text-sm text-gray-700">{customer.email}</td>
                      <td className="p-3 text-sm text-gray-700">{customer.phone}</td>
                      <td className="p-3 text-sm text-gray-700">{customer.joined}</td>
                      <td className="p-3 text-sm text-blue-500 underline">{customer.action}</td> {/* Action as link */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed" disabled>
                  &lt;
                </button>
                {[1, 2, 3, 4, 5, 6, 624].map((page) => (
                  <button key={page} className={`px-3 py-2 rounded-lg ${page === 1 ? 'bg-purple-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}