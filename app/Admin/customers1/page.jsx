"use client"
import { useState } from "react"
import Image from "next/image"
import { Search, Grid, LayoutGrid, ChevronDown, MoreVertical } from "lucide-react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

const customers = [
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Premium+",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Free",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Free",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Premium+",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Premium+",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Premium+",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Free",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Premium+",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Free",
  },
  {
    name: "Lincoln Donin",
    id: "00001",
    email: "taskhero@gmail.com",
    phone: "+1 111 467 378 399",
    orders: "32",
    joinedOn: "21-March-2024",
    subscription: "Premium+",
  },
]

export default function CustomerList() {
  const [viewMode, setViewMode] = useState("list") // "list" or "grid"

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8 pt-24">
          <div className="bg-white rounded-xl">
            <div className="px-6 py-5 border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">Customer list</h1>
            </div>

            {/* Filters Bar */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-[360px]">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-50 border-none text-sm focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  {/* Requests Button */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <Image src="/admin/chat.jpeg" alt="" width={24} height={24} className="rounded-full" />
                    <span className="text-sm text-gray-700">Requests</span>
                  </button>
                </div>

                {/* View Options and Filters */}
                <div className="flex items-center gap-2">
                  <div className="flex bg-gray-50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md ${viewMode === "list" ? "bg-purple-600 text-white" : "text-gray-500"}`}
                    >
                      <LayoutGrid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md ${viewMode === "grid" ? "bg-purple-600 text-white" : "text-gray-500"}`}
                    >
                      <Grid size={18} />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700">
                    A-Z
                    <ChevronDown size={16} />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700">
                    Type
                    <ChevronDown size={16} />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700">
                    Most order
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 font-normal text-sm text-gray-500">Name</th>
                    <th className="text-left py-4 px-6 font-normal text-sm text-gray-500">ID</th>
                    <th className="text-left py-4 px-6 font-normal text-sm text-gray-500">E-mail</th>
                    <th className="text-left py-4 px-6 font-normal text-sm text-gray-500">Phone</th>
                    <th className="text-left py-4 px-6 font-normal text-sm text-gray-500">Orders</th>
                    <th className="text-left py-4 px-6 font-normal text-sm text-gray-500">Joined on</th>
                    <th className="text-left py-4 px-6 font-normal text-sm text-gray-500">Subscription</th>
                    <th className="w-16"></th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src="/admin/chat.jpeg"
                            alt={customer.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span className="text-sm text-gray-900">{customer.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">{customer.id}</td>
                      <td className="py-4 px-6 text-sm text-gray-500">{customer.email}</td>
                      <td className="py-4 px-6 text-sm text-gray-500">{customer.phone}</td>
                      <td className="py-4 px-6 text-sm text-gray-500">{customer.orders}</td>
                      <td className="py-4 px-6 text-sm text-gray-500">{customer.joinedOn}</td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            customer.subscription === "Premium+"
                              ? "bg-purple-50 text-purple-600"
                              : "bg-gray-50 text-gray-600"
                          }`}
                        >
                          {customer.subscription}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="p-2 hover:bg-gray-50 rounded-lg">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center py-4 gap-1">
              {["01", "02", "03", "04", "05", "424"].map((page, index) => (
                <button
                  key={page}
                  className={`min-w-[32px] h-8 px-2 rounded-lg text-sm ${
                    index === 0 ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

