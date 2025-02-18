"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronRight, Printer, FileSearch, X, Check, RotateCw } from "lucide-react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

// Delivery status steps
const deliverySteps = [
  {
    status: "FROM",
    location: "Manchester, UK",
    time: "23/4/2024, 02:21 PM",
    completed: true,
  },
  {
    status: "PACKAGE RECEIVED BY FEDEX",
    location: "Manchester, UK",
    time: "23/4/2024, 02:21 PM",
    completed: true,
  },
  {
    status: "IN TRANSIT",
    location: "Manchester, UK",
    time: "23/4/2024, 02:21 PM",
    completed: true,
    current: true,
  },
  {
    status: "OUT FOR DELIVERY",
    location: "",
    time: "",
    completed: false,
  },
  {
    status: "TO",
    location: "",
    time: "",
    completed: false,
  },
]

export default function OrderDetails() {
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false)
  const [isDeliveryStatusOpen, setIsDeliveryStatusOpen] = useState(false)
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false)

  // Delivery Status Modal component
  const DeliveryStatusModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold text-[#374151]">Delivery status</h2>
              <div className="w-2 h-2 rounded-full bg-[#8B3DFF]" />
              <span className="text-[#374151]">In transit</span>
            </div>
            <p className="text-sm text-gray-500">Tracking ID</p>
            <p className="text-[#374151] font-medium">#129301428</p>
          </div>
          <button
            onClick={() => setIsDeliveryStatusOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {deliverySteps.map((step, index) => (
            <div key={index} className="relative pb-8 last:pb-0">
              {/* Vertical line */}
              {index < deliverySteps.length - 1 && (
                <div
                  className={`absolute left-[11px] top-6 bottom-0 w-0.5 ${
                    step.completed ? "bg-[#8B3DFF]" : "border-l-2 border-dashed border-gray-200"
                  }`}
                />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1">
                <div
                  className={`w-[22px] h-[22px] rounded-full border-2 ${
                    step.current
                      ? "border-[#8B3DFF] bg-white"
                      : step.completed
                        ? "border-[#8B3DFF] bg-[#8B3DFF]"
                        : "border-gray-200 bg-white"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="ml-4">
                <p className={`font-medium ${step.current ? "text-[#8B3DFF]" : "text-[#374151]"}`}>{step.status}</p>
                {step.location && (
                  <p className="text-sm text-gray-500 mt-1">
                    {step.location}
                    {step.time && `, ${step.time}`}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Tracking steps data
  const trackingSteps = [
    { status: "Pending", time: "09-March-2024 03:32PM", completed: true },
    { status: "Accepted", time: "09-March-2024 03:32PM", completed: true },
    { status: "Collecting", time: "09-March-2024 03:32PM", completed: true },
    { status: "Packaging", time: "09-March-2024 03:32PM", completed: true },
    { status: "Picked up", time: "09-March-2024 03:32PM", completed: false },
    { status: "On the way", time: "09-March-2024 03:32PM", completed: false },
    { status: "Delivered", time: "09-March-2024 03:32PM", completed: false },
  ]

  // Modal component
  const TrackingModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-[#374151]">Order tracking</h2>
            <p className="text-sm text-gray-500">Tracking no: 323415352241</p>
          </div>
          <button
            onClick={() => setIsTrackingModalOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Timeline */}
        <div className="relative mb-8">
          <div className="absolute top-3 left-3 right-3 h-0.5 bg-gray-200" />
          <div
            className="absolute top-3 left-3 h-0.5 bg-green-500 transition-all duration-500"
            style={{
              width: `${((trackingSteps.filter((step) => step.completed).length - 1) * 100) / (trackingSteps.length - 1)}%`,
            }}
          />
          <div className="relative flex justify-between">
            {trackingSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    step.completed ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  {step.completed && <Check className="w-4 h-4 text-white" />}
                </div>
                <p className="mt-2 text-sm font-medium text-[#374151]">{step.status}</p>
                <p className="mt-1 text-xs text-gray-500">{step.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security PIN */}
        <div>
          <h3 className="text-base font-medium text-[#374151] mb-3">Security PIN code</h3>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-50 rounded-lg px-4 py-2 text-lg font-medium text-[#8B3DFF]">23f34</div>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
              <RotateCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Order Details Modal component
  const OrderDetailsModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 text-sm mb-1">
              <span className="text-[#8B3DFF]">Orders</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500">Order details</span>
            </div>
            <h2 className="text-xl font-semibold text-[#374151]">Order ID: 23049131</h2>
            <p className="text-sm text-gray-500">Date: 09 March 2024</p>
          </div>
          <button
            onClick={() => setIsOrderDetailsModalOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Profiles Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Client Profile */}
            <div className="p-4 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[#374151] font-medium">Client</h3>
                <button className="px-4 py-1 border border-gray-200 rounded-lg text-sm">Profile</button>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/admin/chat.jpeg" alt="John Kovalovski" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-medium text-[#374151]">John Kovalovski</p>
                  <p className="text-sm text-gray-500">johnkovalovski@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Hero Profile */}
            <div className="p-4 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[#374151] font-medium">Hero</h3>
                <button className="px-4 py-1 border border-gray-200 rounded-lg text-sm">Profile</button>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/admin/chat.jpeg" alt="John Kovalovski" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-medium text-[#374151]">John Kovalovski</p>
                  <p className="text-sm text-gray-500">johnkovalovski@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Driver Profile */}
            <div className="p-4 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[#374151] font-medium">Driver</h3>
                <button className="px-4 py-1 border border-gray-200 rounded-lg text-sm">Profile</button>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/admin/chat.jpeg" alt="John Kovalovski" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-medium text-[#374151]">John Kovalovski</p>
                  <p className="text-sm text-gray-500">johnkovalovski@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="text-lg font-medium text-[#374151] mb-4">Order items</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#F8F9FD] rounded-xl">
                <div className="flex items-center gap-4">
                  <Image
                    src="/admin/cheezeburger.png"
                    alt="Cheese burger"
                    width={56}
                    height={56}
                    className="rounded-lg"
                  />
                  <span className="font-medium text-[#374151]">Cheese burger</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-gray-500">1pc</span>
                  <span className="font-medium text-[#374151]">$12</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#F8F9FD] rounded-xl">
                <div className="flex items-center gap-4">
                  <Image src="/admin/fishmeat.png" alt="Chirashizushi" width={56} height={56} className="rounded-lg" />
                  <span className="font-medium text-[#374151]">Chirashizushi with fresh fish meat</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-gray-500">1pc</span>
                  <span className="font-medium text-[#374151]">$12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h3 className="text-lg font-medium text-[#374151] mb-4">Payment details</h3>
            <div className="p-4 bg-[#F8F9FD] rounded-xl space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-[#374151] font-medium">$54</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>
                  <span className="text-[#374151] font-medium">$54</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tax</span>
                  <span className="text-[#374151] font-medium">$54</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service fee</span>
                  <span className="text-[#374151] font-medium">$54</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="font-medium text-[#374151]">Total</span>
                  <span className="font-medium text-[#374151]">$54</span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Method</p>
                <div className="flex items-center gap-2">
                  <Image src="/admin/mastercard.jpeg" alt="Mastercard" width={32} height={20} />
                  <span className="text-[#374151]">**** **** **** 4576</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Status</p>
                <span className="text-green-500 font-medium">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-16 p-6">
          <div className="bg-white rounded-2xl p-6">
            {/* Breadcrumb and Order ID */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#8B3DFF]">Orders</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500">Order details</span>
                </div>
                <div className="space-y-1">
                  <h1 className="text-xl font-semibold text-[#374151]">Order ID: 23049131</h1>
                  <p className="text-sm text-gray-500">Date: 09 March 2024</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsDeliveryStatusOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  Order details
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={() => setIsTrackingModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#8B3DFF] text-white rounded-lg text-sm"
                >
                  <FileSearch className="w-4 h-4" />
                  Track order
                </button>
              </div>
            </div>

            {/* Profiles Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Client Profile */}
              <div className="p-4 border border-gray-100 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-[#374151] font-medium">Client</h2>
                  <button className="px-4 py-1 border border-gray-200 rounded-lg text-sm">Profile</button>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/admin/chat.jpeg" alt="John Kovalovski" width={48} height={48} className="rounded-full" />
                  <div>
                    <p className="font-medium text-[#374151]">John Kovalovski</p>
                    <p className="text-sm text-gray-500">johnkovalovski@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Hero Profile */}
              <div className="p-4 border border-gray-100 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-[#374151] font-medium">Hero</h2>
                  <button className="px-4 py-1 border border-gray-200 rounded-lg text-sm">Profile</button>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/admin/chat.jpeg" alt="John Kovalovski" width={48} height={48} className="rounded-full" />
                  <div>
                    <p className="font-medium text-[#374151]">John Kovalovski</p>
                    <p className="text-sm text-gray-500">johnkovalovski@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Driver Profile */}
              <div className="p-4 border border-gray-100 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-[#374151] font-medium">Driver</h2>
                  <button className="px-4 py-1 border border-gray-200 rounded-lg text-sm">Profile</button>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/admin/chat.jpeg" alt="John Kovalovski" width={48} height={48} className="rounded-full" />
                  <div>
                    <p className="font-medium text-[#374151]">John Kovalovski</p>
                    <p className="text-sm text-gray-500">johnkovalovski@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details and Payment Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Order Items and Delivery Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Order Items */}
                <div>
                  <h2 className="text-lg font-medium text-[#374151] mb-4">Order items</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#F8F9FD] rounded-xl">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/admin/cheezeburger.png"
                          alt="Cheese burger"
                          width={56}
                          height={56}
                          className="rounded-lg"
                        />
                        <span className="font-medium text-[#374151]">Cheese burger</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="text-gray-500">1pc</span>
                        <span className="font-medium text-[#374151]">$12</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#F8F9FD] rounded-xl">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/admin/fishmeat.png"
                          alt="Chirashizushi"
                          width={56}
                          height={56}
                          className="rounded-lg"
                        />
                        <span className="font-medium text-[#374151]">Chirashizushi with fresh fish meat</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="text-gray-500">1pc</span>
                        <span className="font-medium text-[#374151]">$12</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Details */}
                <div>
                  <h2 className="text-lg font-medium text-[#374151] mb-4">Delivery details</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Status:</p>
                        <p className="text-[#374151] font-medium">Processing</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Type:</p>
                        <p className="text-[#374151] font-medium">Bicycle</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Delivery option:</p>
                        <p className="text-[#374151] font-medium">Standard</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address:</p>
                      <p className="text-[#374151] font-medium">
                        University of Leicester University Road
                        <br />
                        Leicester LE1 7RH United Kingdom
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Notes */}
                <div>
                  <h2 className="text-lg font-medium text-[#374151] mb-4">Order notes</h2>
                  <p className="text-[#374151] p-4 bg-[#F8F9FD] rounded-xl">
                    Please ensure no onions or garlic in any dishes as I have allergies.
                  </p>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-lg font-medium text-[#374151] mb-4">Payment details</h2>
                <div className="p-4 bg-[#F8F9FD] rounded-xl space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-[#374151] font-medium">$54</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Delivery</span>
                      <span className="text-[#374151] font-medium">$54</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tax</span>
                      <span className="text-[#374151] font-medium">$54</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Service fee</span>
                      <span className="text-[#374151] font-medium">$54</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-medium text-[#374151]">Total</span>
                      <span className="font-medium text-[#374151]">$54</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Method</p>
                    <div className="flex items-center gap-2">
                      <Image src="/admin/mastercard.jpeg" alt="Mastercard" width={32} height={20} />
                      <span className="text-[#374151]">**** **** **** 4576</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Status</p>
                    <span className="text-green-500 font-medium">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Tracking Modal */}
      {isTrackingModalOpen && <TrackingModal />}
      {/* Order Details Modal */}
      {isOrderDetailsModalOpen && <OrderDetailsModal />}
      {/* Delivery Status Modal */}
      {isDeliveryStatusOpen && <DeliveryStatusModal />}
    </div>
  )
}

