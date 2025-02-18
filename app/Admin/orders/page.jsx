"use client"
import { useState } from "react"
import Image from "next/image"
import { Search, ChevronDown } from "lucide-react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

// Sample data
const orders = [
  {
    id: 1,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
  {
    id: 2,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "waiting",
    time: "03/12/2024 23:43",
  },
  {
    id: 3,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
  {
    id: 4,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
  {
    id: 5,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "cancelled",
    time: "03/12/2024 23:43",
  },
  {
    id: 6,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
  {
    id: 7,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
  {
    id: 8,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
  {
    id: 9,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
  {
    id: 10,
    name: "Lincoln Donin",
    avatar: "/admin/avatars/1.jpg",
    price: "250$",
    status: "completed",
    time: "03/12/2024 23:43",
  },
]

export default function OrderList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Get status color based on status (removed TypeScript type annotation)
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500"
      case "waiting":
        return "bg-yellow-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  // Filter orders based on search query
  const filteredOrders = orders.filter((order) => order.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentOrders = filteredOrders.slice(startIndex, endIndex)

  return (
    <div className="flex min-h-screen bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 mt-4">
        <Header />
        <main className="pt-16 p-6">
          <div className="bg-white rounded-2xl p-6">
            <h1 className="text-xl font-semibold text-[#374151] mb-6">Order list</h1>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#F8F9FD] border-none focus:ring-2 focus:ring-[#8B3DFF]"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <select className="bg-[#F8F9FD] border-none rounded-lg px-4 py-2 text-sm text-[#6B7280] min-w-[120px]">
                  <option>Latest</option>
                </select>
                <select className="bg-[#F8F9FD] border-none rounded-lg px-4 py-2 text-sm text-[#6B7280] min-w-[120px]">
                  <option>Category</option>
                </select>
                <select className="bg-[#F8F9FD] border-none rounded-lg px-4 py-2 text-sm text-[#6B7280] min-w-[120px]">
                  <option>Status</option>
                </select>
                <select className="bg-[#F8F9FD] border-none rounded-lg px-4 py-2 text-sm text-[#6B7280] min-w-[120px]">
                  <option>Today</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                    <th className="pb-4 font-normal">Name</th>
                    <th className="pb-4 font-normal">Price</th>
                    <th className="pb-4 font-normal">Status</th>
                    <th className="pb-4 font-normal">Ordered time</th>
                    <th className="pb-4 font-normal">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  {currentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={order.avatar || "/placeholder.svg"}
                            alt={order.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span className="font-medium text-[#374151]">{order.name}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-[#8B3DFF] font-medium">{order.price}</span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`} />
                          <span className="text-[#374151] capitalize">{order.status}</span>
                        </div>
                      </td>
                      <td className="py-4 text-[#6B7280]">{order.time}</td>
                      <td className="py-4">
                        <button className="text-[#8B3DFF] hover:underline">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm ${
                    currentPage === page ? "bg-[#8B3DFF] text-white" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

