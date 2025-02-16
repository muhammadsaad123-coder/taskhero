import { useState } from "react";


export default function VoucherModal({ isOpen, setIsOpen }) {
  const [voucherCode, setVoucherCode] = useState("");
  const [showVouchers, setShowVouchers] = useState(false);

  const vouchers = [
    {
      id: 1,
      title: "DISCOUNT VOUCHER",
      discount: "20% OFF",
      description: "On every booking over 100$",
      valid: "January 6-7, 2024",
      barcode: "223221  227226",
    },
    {
      id: 2,
      title: "DISCOUNT VOUCHER",
      discount: "20% OFF",
      description: "On every booking over 100$",
      valid: "January 6-7, 2024",
      barcode: "223221  227226",
    },
  ];

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white mx-4 w-[400px] md:w-[500px] p-6 rounded-2xl shadow-lg relative">
          {/* Header with Back and Close Buttons */}
          <div className="flex items-center justify-between">
            <button onClick={() => setIsOpen(false)}>
              {/* <ArrowLeft className="text-black" /> */}
            </button>
            <h2 className="text-lg font-semibold">Voucher</h2>
            <button onClick={() => setIsOpen(false)}>
              {/* <X className="text-red-500" /> */}
            </button>
          </div>

          {/* Input and Voucher Selection */}
          {!showVouchers ? (
            <>
              <p className="text-gray-500 text-sm mt-2">
                Enter the code in order to claim and use your voucher
              </p>
              <input
                type="text"
                placeholder="Voucher code"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                className="w-full p-3 mt-4 rounded-xl border bg-gray-100 focus:outline-none"
              />
              <button
                className={`w-full mt-4 py-3 rounded-xl font-semibold ${
                  voucherCode
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!voucherCode}
                onClick={() => setShowVouchers(true)}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h3 className="text-md font-medium mt-4">Select Voucher</h3>
              {vouchers.map((voucher) => (
                <div
                  key={voucher.id}
                  className="border-2 border-dashed border-purple-500 p-4 mt-4 rounded-xl"
                >
                  <div className="flex justify-between">
                    <h4 className="text-purple-700 font-bold">
                      {voucher.title}
                    </h4>
                    <p className="text-gray-600 text-sm">Valid: {voucher.valid}</p>
                  </div>
                  <p className="text-2xl font-bold text-purple-700">
                    {voucher.discount}
                  </p>
                  <p className="text-gray-600 text-sm">{voucher.description}</p>
                  <p className="text-center text-lg font-semibold mt-2">
                    <span className="bg-gray-300 p-2 rounded-md">
                      {voucher.barcode}
                    </span>
                  </p>
                </div>
              ))}

              <button
                className="w-full mt-4 py-3 rounded-xl font-semibold bg-gray-200 text-gray-400 cursor-not-allowed"
                disabled
              >
                Continue
              </button>
            </>
          )}
        </div>
      </div>
    )
  );
}
