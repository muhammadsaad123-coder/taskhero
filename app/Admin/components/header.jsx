"use client"
import { Bell, Search } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-50">
            <Bell size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <Image src="/admin/chat.jpeg" alt="Profile" width={36} height={36} className="rounded-full" />
            <span className="text-gray-600">▼</span>
          </div>
        </div>
      </div>
    </header>
  )
}

