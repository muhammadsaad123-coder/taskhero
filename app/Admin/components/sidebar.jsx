"use client"
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
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/admin/dashboard" },
    { icon: ShoppingBag, label: "Orders", href: "/admin/orders" },
    { icon: Users, label: "Customers", href: "/admin/customers" },
    { icon: Award, label: "Heroes", href: "/admin/heroes" },
    { icon: UserCog, label: "Drivers", href: "/admin/drivers" },
    { icon: Wallet, label: "Transactions", href: "/admin/transactions" },
    { icon: BarChart, label: "Analytics", href: "/admin/analytics" },
    { icon: Bell, label: "Notifications", href: "/admin/notifications" },
    { icon: Zap, label: "Ads", href: "/admin/ads" },
    { icon: Users2, label: "Employees and...", href: "/admin/employees" },
    { icon: MessageSquare, label: "Chat support", href: "/admin/chat" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-100 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <Image src="/admin/Logo.png" alt="TaskHero" width={140} height={40} className="mb-8" />
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  isActive ? "bg-purple-50 text-purple-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

