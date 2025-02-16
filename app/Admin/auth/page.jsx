"use client"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-[#F5F5F5] flex flex-col p-6 md:p-8 lg:p-12">
        {/* Logo and Heading Section */}
        <div className="mb-8 lg:mb-16">
          <Image
            src="/admin/Logo.png"
            width={240}
            height={60}
            alt="TaskHero Logo"
            className="mb-4 lg:mb-6 w-48 md:w-60 lg:w-auto h-auto"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-black">Service on demand!</h2>
        </div>

        {/* Cards Section */}
        <div className="space-y-4 md:space-y-6 max-w-md mx-auto lg:mx-0">
          {/* Chat Support Card */}
          <div className="bg-white shadow-sm p-4 md:p-6 rounded-xl md:rounded-2xl flex items-center space-x-4 md:space-x-6">
            <Image
              src="/admin/chat.jpeg"
              width={80}
              height={80}
              className="rounded-full w-16 h-16 md:w-20 md:h-20"
              alt="Chat Support"
            />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">Chat support</h3>
              <div className="flex gap-2 md:gap-3">
                <button className="bg-purple-600 text-white p-2 md:p-3 rounded-full hover:bg-purple-700 transition">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="md:w-5 md:h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </button>
                <button className="bg-red-500 text-white p-2 md:p-3 rounded-full hover:bg-red-600 transition">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="md:w-5 md:h-5"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Available Drivers Card */}
          <div className="bg-white shadow-sm p-4 md:p-6 rounded-xl md:rounded-2xl">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h3 className="text-sm md:text-base text-gray-600">Available drivers</h3>
              <span className="text-xl md:text-2xl font-bold text-black">231</span>
            </div>
            <div className="relative h-36 md:h-48 w-full">
              <Image
                src="/admin/driver.png"
                fill
                style={{ objectFit: "cover" }}
                alt="Available Drivers"
                className="rounded-lg md:rounded-xl"
              />
            </div>
          </div>

          {/* Transactions Card */}
          <div className="bg-white shadow-sm p-4 md:p-6 rounded-xl md:rounded-2xl flex items-center space-x-4 md:space-x-6">
            <div className="bg-blue-50 p-2 md:p-3 rounded-lg md:rounded-xl">
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

      {/* Right Side - 2FA */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-[400px]">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Two-factor authentication</h2>
          <p className="text-gray-500 text-sm mb-6 md:mb-8">
            Please enter the code wich has sent to your e-mail address{" "}
            <span className="font-medium">g***@gmail.com</span> or{" "}
            <a href="#" className="text-purple-600 hover:underline">
              use the authenticator app
            </a>
          </p>

          {/* Verification Code Inputs */}
          <div className="flex gap-2 md:gap-3 mb-4 md:mb-6">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-10 h-10 md:w-14 md:h-14 border rounded-lg text-center text-lg md:text-xl font-semibold bg-gray-50 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
              />
            ))}
          </div>

          {/* Resend Timer */}
          <div className="text-sm text-gray-500 mb-6 md:mb-8 text-right">
            <span className="text-purple-600 font-medium">56</span> seconds for re-send
          </div>

          {/* Verify Button */}
          <button className="w-full bg-purple-600 text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-purple-700 transition text-base md:text-lg">
            Verify
          </button>
        </div>
      </div>
    </div>
  )
}

