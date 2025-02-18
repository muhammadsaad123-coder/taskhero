"use client"
import Image from "next/image"
import { useState } from "react"
import { DollarSign, Store, Users, Truck, MoreVertical } from "lucide-react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

const chartData = [
  { ios: 500, android: 400 },
  { ios: 450, android: 350 },
  { ios: 400, android: 300 },
  { ios: 350, android: 250 },
  { ios: 300, android: 200 },
  { ios: 250, android: 150 },
  { ios: 200, android: 100 },
  { ios: 150, android: 50 },
  { ios: 100, android: 0 },
  { ios: 50, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
  { ios: 0, android: 0 },
]

const iosPercentage = 70
const androidPercentage = 30
const totalOrders = 1200
const orderHistory = [
  {
    name: "John Doe",
    price: 100,
    status: "pending",
    time: "2023-10-26 10:00",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jane Doe",
    price: 200,
    status: "completed",
    time: "2023-10-26 11:00",
    avatar: "/placeholder.svg",
  },
  // Add more order history items here...
]

function getStatusColor(status) {
  switch (status) {
    case "pending":
      return "bg-yellow-400"
    case "completed":
      return "bg-green-400"
    case "failed":
      return "bg-red-400"
    default:
      return "bg-gray-400"
  }
}

export default function Dashboard() {
  const [countries] = useState([
    { name: "England", percentage: "50%", flag: "/admin/flags/gb.png", code: "GB" },
    { name: "Germany", percentage: "20%", flag: "/admin/flags/de.svg", code: "DE" },
    { name: "Finland", percentage: "15%", flag: "/admin/flags/fi.svg", code: "FI" },
    { name: "Norway", percentage: "10%", flag: "/admin/flags/no.svg", code: "NO" },
    { name: "Spain", percentage: "5%", flag: "/admin/flags/es.svg", code: "ES" },
  ])

  const [orderHistoryState, setOrderHistory] = useState([
    {
      name: "Lincoln Donin",
      avatar: "/admin/avatars/1.jpg",
      price: "250$",
      status: "completed",
      time: "03/12/2024 23:43",
    },
    { name: "Ruben Press", avatar: "/admin/avatars/2.jpg", price: "250$", status: "pending", time: "03/12/2024 23:43" },
    { name: "Giana Mango", avatar: "/admin/avatars/3.jpg", price: "250$", status: "pending", time: "03/12/2024 23:43" },
    {
      name: "Cheyenne Ekstrom Bothman",
      avatar: "/admin/avatars/4.jpg",
      price: "250$",
      status: "canceled",
      time: "03/12/2024 23:43",
    },
    {
      name: "Giana Baptista",
      avatar: "/admin/avatars/5.jpg",
      price: "250$",
      status: "completed",
      time: "03/12/2024 23:43",
    },
    // ... (other order history items)
  ])

  const [chartDataState] = useState(
    Array.from({ length: 30 }, () => ({
      ios: Math.floor(Math.random() * 100) + 300, // Random between 300-400
      android: Math.floor(Math.random() * 100) + 200, // Random between 200-300
    })),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "canceled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-16 p-6">
          {/* Welcome Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#D9E6FF] to-[#8000FF] h-[220px] mb-6">
            <div className="relative z-10 p-8">
              <h1 className="text-[32px] font-bold text-[#8B3DFF] mb-12">Welcome back, Tony!</h1>
              <div className="grid grid-cols-4 gap-16">
                <StatCard icon={DollarSign} label="Revenue" value="232K" />
                <StatCard icon={Store} label="Heroes" value="237K" />
                <StatCard icon={Users} label="Customers" value="252K" />
                <StatCard icon={Truck} label="Drivers" value="123K" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active Users Section */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-[#374151] mb-4">Active users right now</h2>
              <div className="text-[32px] font-bold text-[#374151] mb-8">284</div>

              <div className="flex gap-6">
                <div className="flex-1 space-y-5">
                  {countries.map((country) => (
                    <div key={country.name} className="flex items-center">
                      <div className="w-8 h-6 relative">
                        <Image
                          src={country.flag || "/placeholder.svg"}
                          alt={`${country.name} flag`}
                          fill
                          className="object-cover rounded-sm"
                        />
                      </div>
                      <span className="w-24 text-[15px] text-[#374151]">{country.name}</span>
                      <div className="flex-1 h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#8B3DFF] rounded-full" style={{ width: country.percentage }} />
                      </div>
                      <span className="w-16 text-right text-[#6B7280] text-[15px]">{country.percentage}</span>
                    </div>
                  ))}
                </div>

                <div className="w-[400px] relative">
                  <Image src="/admin/world-map-dots.jpg" alt="World Map" fill className="object-contain opacity-80" />
                </div>
              </div>
            </div>

            {/* Available Drivers Section */}
                <div className="bg-white shadow-sm p-4 md:p-6 rounded-[20px]">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h3 className="text-sm md:text-base text-gray-600">Available drivers</h3>
              <span className="text-xl md:text-2xl font-bold text-black">231</span>
            </div>

               <div className="relative h-[120px] md:h-[150px] lg:h-[180px] w-full">
                            <Image
                              src="/admin/driver.png"
                              fill
                              style={{ objectFit: "cover" }}
                              alt="Available Drivers"
                              className="rounded-xl"
                            />
                          </div>
             

            
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mt-6 bg-white rounded-2xl p-6">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#374151]">Order summary</h2>
              <div className="flex gap-4">
                <select className="bg-[#F8F9FD] border-none rounded-lg px-4 py-2 text-sm text-[#6B7280]">
                  <option>Choose country</option>
                </select>
                <select className="bg-[#F8F9FD] border-none rounded-lg px-4 py-2 text-sm text-[#6B7280]">
                  <option>09 FEB 2024</option>
                </select>
                <select className="bg-[#F8F9FD] border-none rounded-lg px-4 py-2 text-sm text-[#6B7280]">
                  <option>09 AUG 2024</option>
                </select>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1 px-4">
                <div className="relative h-[300px]">
                  {/* Y-axis */}
                  <div className="absolute left-0 top-0 bottom-6 w-12 flex flex-col justify-between text-xs text-[#6B7280]">
                    {[600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 0].map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="absolute left-14 right-0 bottom-6 flex items-end justify-between h-[280px] px-2">
                    {chartDataState.map((data, i) => (
                      <div key={i} className="w-6 flex flex-col justify-end relative">
                        <div
                          className="bg-[#8B3DFF] w-full rounded-sm"
                          style={{
                            height: `${(data.ios / 600) * 280}px`,
                          }}
                        />
                        <div
                          className="bg-[#4C6FFF] w-full rounded-sm absolute bottom-0"
                          style={{
                            height: `${(data.android / 600) * 280}px`,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* X-axis */}
                  <div className="absolute left-14 right-0 bottom-0 flex justify-between">
                    {Array.from({ length: 30 }, (_, i) => (
                      <span key={i} className="text-xs text-[#6B7280]">
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-48">
                <h3 className="text-sm font-medium mb-4">Total orders</h3>
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    <circle cx="18" cy="18" r="15.91549430918954" fill="none" stroke="#F3F4F6" strokeWidth="2.5" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.91549430918954"
                      fill="none"
                      stroke="#8B3DFF"
                      strokeWidth="2.5"
                      strokeDasharray="65 100"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.91549430918954"
                      fill="none"
                      stroke="#4C6FFF"
                      strokeWidth="2.5"
                      strokeDasharray="35 100"
                      strokeDashoffset="-65"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#8B3DFF]">Total:</div>
                      <div className="text-2xl font-bold text-[#374151]">32,234</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8B3DFF]" />
                    <span className="text-sm text-[#6B7280]">iOS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#4C6FFF]" />
                    <span className="text-sm text-[#6B7280]">Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order History Section */}
          <div className="mt-6 bg-white rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-[#374151] mb-6">Order history</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500">
                    <th className="pb-4 font-normal">Name</th>
                    <th className="pb-4 font-normal">Price</th>
                    <th className="pb-4 font-normal">Status</th>
                    <th className="pb-4 font-normal">Ordered time</th>
                    <th className="pb-4 font-normal"></th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  {orderHistoryState.map((order, index) => (
                    <tr key={index} className="border-t border-gray-100">
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
                        <button className="p-2 hover:bg-gray-50 rounded-lg">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
        <Icon className="w-6 h-6 text-[#8B3DFF]" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-white/90">{label}</div>
      </div>
    </div>
  )
}

