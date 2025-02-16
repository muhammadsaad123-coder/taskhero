'use client'
import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  Search,
  Home,
  ShoppingBag,
  Users,
  Award,
  UserCog,
  Wallet,
  BarChart,
  MessageSquare,
  Zap,
  Users2,
  Settings,
  DollarSign,
  Store,
  Truck,
} from "lucide-react"

export default function Dashboard() {
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: ShoppingBag, label: "Orders", href: "/orders" },
    { icon: Users, label: "Customers", href: "/customers" },
    { icon: Award, label: "Heroes", href: "/heroes" },
    { icon: UserCog, label: "Drivers", href: "/drivers" },
    { icon: Wallet, label: "Transactions", href: "/transactions" },
    { icon: BarChart, label: "Analytics", href: "/analytics" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Zap, label: "Ads", href: "/ads" },
    { icon: Users2, label: "Employees and...", href: "/employees" },
    { icon: MessageSquare, label: "Chat support", href: "/chat" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  const countries = [
    { name: "England", percentage: "50%", flag: "🇬🇧" },
    { name: "Germany", percentage: "20%", flag: "🇩🇪" },
    { name: "Finland", percentage: "15%", flag: "🇫🇮" },
    { name: "Norway", percentage: "10%", flag: "🇳🇴" },
    { name: "Spain", percentage: "5%", flag: "🇪🇸" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 fixed h-screen overflow-y-auto">
        <div className="p-6">
          <Image src="/admin/Logo.png" alt="TaskHero" width={140} height={40} className="mb-8" />
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  item.active ? "bg-purple-50 text-purple-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        

        {/* Main Content Area */}
        <main className="pt-16 p-6">
          {/* Hero Section with Stats */}
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-8 mb-6">
            <h1 className="text-3xl font-bold text-purple-900 mb-8">Welcome back, Tony!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              <StatCard icon={DollarSign} label="Revenue" value="232K" />
              <StatCard icon={Store} label="Places" value="237K" />
              <StatCard icon={Users} label="Customers" value="252K" />
              <StatCard icon={Truck} label="Drivers" value="123K" />
            </div>
            <div className="absolute top-0 right-0 w-2/3 h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-purple-500/20 rounded-l-full transform translate-x-1/3" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active Users Section */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">Active users right now</h2>
              <div className="text-3xl font-bold mb-6">284</div>

              {/* Country Stats */}
              <div className="space-y-4">
                {countries.map((country) => (
                  <div key={country.name} className="flex items-center">
                    <span className="w-8">{country.flag}</span>
                    <span className="w-24">{country.name}</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: country.percentage }} />
                    </div>
                    <span className="w-16 text-right text-gray-600">{country.percentage}</span>
                  </div>
                ))}
              </div>

              {/* World Map Placeholder */}
              <div className="mt-6 relative h-[300px] bg-gray-50 rounded-xl">
                <Image src="/admin/driver.png" alt="World Map" fill className="object-contain p-4" />
              </div>
            </div>

            {/* Available Drivers Section */}
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">Available drivers</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total drivers:</span>
                  <span className="font-semibold">500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Now active:</span>
                  <span className="font-semibold">232</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">On duty:</span>
                  <span className="font-semibold">200</span>
                </div>
              </div>

              {/* Donut Chart */}
              <div className="mt-6 relative">
                <div className="w-48 h-48 mx-auto">
                  <div className="relative w-full h-full">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#7C3AED"
                        strokeWidth="3"
                        strokeDasharray="75, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">232</div>
                        <div className="text-sm text-gray-600">/ 500</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-600" />
                    <span className="text-sm text-gray-600">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-sm text-gray-600">On duty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mt-6 bg-white rounded-2xl p-6">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Order summary</h2>
              <div className="flex gap-4">
                <select className="bg-gray-50 border-none rounded-lg px-4 py-2 text-sm">
                  <option>Choose country</option>
                </select>
                <select className="bg-gray-50 border-none rounded-lg px-4 py-2 text-sm">
                  <option>09 FEB 2024</option>
                </select>
                <select className="bg-gray-50 border-none rounded-lg px-4 py-2 text-sm">
                  <option>09 AUG 2024</option>
                </select>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="h-[300px] relative">
              {/* Chart would go here - simplified version shown */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between h-64">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="w-6 flex flex-col justify-end gap-1">
                    <div className="bg-purple-600 w-full" style={{ height: `${Math.random() * 100}%` }} />
                    <div className="bg-blue-500 w-full" style={{ height: `${Math.random() * 50}%` }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex justify-end gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-600" />
                <span className="text-sm text-gray-600">iOS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-600">Android</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white rounded-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  )
}

