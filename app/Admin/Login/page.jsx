import Image from "next/image";


export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[#F5F5F5] flex flex-col justify-center items-center p-8">
        <Image src="/admin/Logo.png" width={180} height={50} alt="TaskHero Logo" />
        <h2 className="text-2xl font-bold mt-4 text-black">Service on demand!</h2>

        {/* Images and Content */}
        <div className="mt-8 flex flex-col gap-4">
          {/* Chat Support Card */}
          <div className="bg-white shadow-lg p-4 rounded-xl flex items-center space-x-4">
            <Image src="/admin/chat.jpeg" width={60} height={60} className="rounded-full" alt="Chat Support" />
            <div>
              <h3 className="font-semibold text-black">Chat support</h3>
              <div className="flex gap-2 mt-2">
                <button className="bg-purple-500 text-white p-2 rounded-full">
                  📞
                </button>
                <button className="bg-red-500 text-white p-2 rounded-full">
                  🚫
                </button>
              </div>
            </div>
          </div>

          {/* Available Drivers */}
          <div className="bg-white shadow-lg p-4 rounded-xl">
            <h3 className="text-sm text-gray-600 text-black">Available drivers</h3>
            <span className="text-lg font-bold text-black">231</span>
            <Image src="/admin/driver.png" width={220} height={150} alt="Available Drivers" className="mt-2 rounded-lg" />
          </div>

          {/* Transactions */}
          <div className="bg-white shadow-lg p-4 rounded-xl flex items-center space-x-4">
            <Image src="/admin/paypal.png" width={40} height={40} alt="PayPal Logo" />
            <div>
              <h3 className="text-sm text-gray-600 text-black">Transactions</h3>
              <p className="text-lg font-bold text-black">$205</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <h2 className="text-2xl font-bold text-black">Welcome back!</h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolar ipsum solar something</p>

        {/* Login Form */}
        <form className="mt-6 w-80 space-y-4">
          {/* Username Input */}
          <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-100">
            <span className="text-gray-500">👤</span>
            <input type="text" placeholder="Login name" className="bg-transparent outline-none ml-2 w-full" />
          </div>

          {/* Password Input */}
          <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-100">
            <span className="text-gray-500">🔒</span>
            <input type="password" placeholder="Password" className="bg-transparent outline-none ml-2 w-full" />
            <button type="button" className="text-gray-500">👁️</button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-purple-500">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
