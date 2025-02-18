"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronRight, Printer, Star, X } from "lucide-react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

export default function OrderDetails() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [activeReviewTab, setActiveReviewTab] = useState("hero") // "hero" or "driver"

  // Review Modal Component
  const ReviewModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-semibold text-[#374151]">Order review</h2>
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-200 mb-6">
            <button
              className={`pb-4 relative ${
                activeReviewTab === "hero" ? "text-[#8B3DFF] font-medium" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveReviewTab("hero")}
            >
              Hero review
              {activeReviewTab === "hero" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B3DFF]" />}
            </button>
            <button
              className={`pb-4 relative ${
                activeReviewTab === "driver" ? "text-[#8B3DFF] font-medium" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveReviewTab("driver")}
            >
              Driver review
              {activeReviewTab === "driver" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B3DFF]" />}
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Rating and Dates */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Stars:</span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">5.0</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Task done:</span>
                <span className="text-[#374151]">09-Sep-2024 02:23PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Review date:</span>
                <span className="text-[#374151]">09-Sep-2024 02:23PM</span>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-[#374151] text-sm">
              {activeReviewTab === "hero"
                ? "The patties are juicy, and the cheese is perfectly melted. It's a great spot for a quick and tasty meal!"
                : "The delivery person was friendly and the food arrived hot and well-packaged. Overall, a smooth and convenient experience."}
            </p>

            {/* Tip Amount */}
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Tipped:</span>
              <span className="font-medium text-[#374151]">$15</span>
            </div>

            {/* Review Images */}
            <div>
              <p className="text-gray-500 mb-3">Images:</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative aspect-square">
                  <Image src="/admin/pic1.png" alt="Review image 1" fill className="rounded-xl object-cover" />
                </div>
                <div className="relative aspect-square">
                  <Image src="/admin/pic2.png" alt="Review image 2" fill className="rounded-xl object-cover" />
                </div>
                {activeReviewTab === "hero" && (
                  <div className="relative aspect-square">
                    <Image src="/admin/pic3.png" alt="Review image 3" fill className="rounded-xl object-cover" />
                  </div>
                )}
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
      <div className="flex-1 mt-4">
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
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  <Star className="w-4 h-4" />
                  Order review
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
                        <p className="text-green-500 font-medium">Completed</p>
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

                {/* Photo Proofs */}
                <div>
                  <h2 className="text-lg font-medium text-[#374151] mb-4">Photo proofs</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="relative aspect-square">
                      <Image
                        src="/admin/pic1"
                        alt="Delivery proof 1"
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/admin/pic2"
                        alt="Delivery proof 2"
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/admin/pic3"
                        alt="Delivery proof 3"
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
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

      {/* Review Modal */}
      {isReviewModalOpen && <ReviewModal />}
    </div>
  )
}

