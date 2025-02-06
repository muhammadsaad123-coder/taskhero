"use client"
import Image from "next/image"
import { Mic, PhoneOff, Eye, User, Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-[#F5F5F5] flex flex-col p-8 md:p-12 lg:p-16">
        {/* Logo and Heading Section */}
        <div className="mb-12 lg:mb-20">
          <Image
            src="/admin/Logo.png"
            width={240}
            height={60}
            alt="TaskHero Logo"
            className="mb-6 w-48 md:w-60 lg:w-auto h-auto"
          />
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black">Service on demand!</h2>
        </div>

        {/* Cards Section */}
        <div className="space-y-6 max-w-md mx-auto lg:mx-0">
          {/* Chat Support Card */}
          <div className="bg-white shadow-sm p-4 md:p-6 rounded-[20px] flex items-center space-x-4 md:space-x-6">
            <Image
              src="/admin/chat.jpeg"
              width={90}
              height={90}
              className="rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px]"
              alt="Chat Support"
            />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">Chat support</h3>
              <div className="flex gap-2 md:gap-3">
                <button className="bg-[#8B3DFF] text-white p-2 md:p-3 rounded-full hover:bg-[#7B2FFF] transition">
                  <Mic size={16} className="md:w-5 md:h-5" />
                </button>
                <button className="bg-red-500 text-white p-2 md:p-3 rounded-full hover:bg-red-600 transition">
                  <PhoneOff size={16} className="md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Available Drivers Card */}
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

          {/* Transactions Card */}
          <div className="bg-white shadow-sm p-4 md:p-6 rounded-[20px] flex items-center space-x-4 md:space-x-6">
            <div className="bg-[#F5F7FA] p-2 md:p-3 rounded-xl">
              <Image
                src="/admin/paypal.png"
                width={32}
                height={32}
                alt="PayPal Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
            <div>
              <h3 className="text-sm md:text-base text-gray-600 mb-1">Transactions</h3>
              <p className="text-xl md:text-2xl font-bold text-black">$205</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-8 md:p-12 lg:p-16">
        <div className="w-full max-w-[400px]">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-2">Welcome back!</h2>
          <p className="text-gray-500 mb-6 md:mb-8">Lorem ipsum dolor ipsum solar something</p>

          <form className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Login name"
                className="w-full bg-[#F5F7FA] h-12 md:h-[52px] pl-12 pr-4 rounded-lg outline-none focus:ring-2 focus:ring-[#8B3DFF] transition"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#F5F7FA] h-12 md:h-[52px] pl-12 pr-12 rounded-lg outline-none focus:ring-2 focus:ring-[#8B3DFF] transition"
              />
              <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Eye size={20} />
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <label className="flex items-center space-x-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#8B3DFF] focus:ring-[#8B3DFF]"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#8B3DFF] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#8B3DFF] text-white h-12 md:h-[52px] rounded-lg font-semibold hover:bg-[#7B2FFF] transition text-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

