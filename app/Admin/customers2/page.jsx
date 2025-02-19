"use client"
import { useState } from "react"
import Image from "next/image"
import { Search, Grid, LayoutGrid, ChevronDown } from "lucide-react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

const customers = Array(15).fill({
  name: "John Kovalovski",
  email: "johnkovalovski@gmail.com",
  avatar: "/admin/chat.jpeg",
})

export default function CustomerList() {
  const [viewMode, setViewMode] = useState("grid") // "list" or "grid"

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

            {/* Grid View */}
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {customers.map((customer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.avatar || "/placeholder.svg"}
                        alt={customer.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{customer.name}</h3>
                        <p className="text-sm text-gray-500">{customer.email}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                      Profile
                    </button>
                  </div>
                ))}
              </div>
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

