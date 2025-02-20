'use client'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Home,
  ShoppingBag,
  Users,
  Award,
  UserCog,
  Wallet,
  BarChart,
  Bell,
  MessageSquare,
  Zap,
  Users2,
  Settings,
  Menu,
} from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/Admin/dashboard" },
    { icon: ShoppingBag, label: "Orders", href: "/Admin/order2" },
    { icon: Users, label: "Customers", href: "/Admin/customers2" },
    { icon: Award, label: "Heroes", href: "/Admin/heroes" },
    { icon: UserCog, label: "Drivers", href: "/Admin/drivers" },
    { icon: Wallet, label: "Transactions", href: "/Admin/transactions" },
    { icon: BarChart, label: "Analytics", href: "/Admin/analytics" },
    { icon: Bell, label: "Notifications", href: "/Admin/Notifications" },
    { icon: Zap, label: "Ads", href: "/Admin/ads" },
    { icon: Users2, label: "Employees and...", href: "/Admin/employees" },
    { icon: MessageSquare, label: "Chat support", href: "/Admin/chat" },
    { icon: Settings, label: "Settings", href: "/Admin/settings" },
  ]

  return (
    <>
      <button
        className="md:hidden p-3 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      <aside
        className={`fixed md:relative md:w-64 bg-white border-r border-gray-100 h-full left-0 top-0 p-6 transform transition-transform ease-in-out duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Image src="/admin/Logo.png" alt="TaskHero" width={140} height={40} />
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-purple-50 text-purple-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon size={20} className={isActive ? "text-purple-600" : "text-gray-400"} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
