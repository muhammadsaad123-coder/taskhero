"use client"
import Image from "next/image"
import Sidebar from "../components/sidebar"
import Header from "../components/header"
import { ChevronRight } from "lucide-react"

export default function DriverMonitoring() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-16 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="text-[#8B3DFF]">Dashboard</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500">Available drivers</span>
          </div>

          {/* Title Section */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-[#374151]">Available drivers</h1>
              <span className="text-sm text-red-500">(live)</span>
            </div>
            <div className="text-xl font-semibold text-[#374151]">231</div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-2xl overflow-hidden h-[calc(100vh-220px)] relative">
            <Image
              src="/admin/map.png"
              alt="Driver locations map"
              fill
              className="object-cover"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

