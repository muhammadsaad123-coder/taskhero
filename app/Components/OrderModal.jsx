// components/OrderModal.js
import { X } from 'lucide-react';
import React from 'react';

const OrderModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 overflow-auto  bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white mt-32  rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Label Preview</h2>
                    <button onClick={onClose}>
                        <X className="w-6 h-6 text-red-600 hover:text-gray-800" />
                    </button>
                </div>

                {/* Order Details */}
                <div className="space-y-4 text-xs md:text-sm">
                    <div>
                        <h3 className="font-semibold">ORDERED BY</h3>
                        <p>Bilal Khan Yousafzai</p>
                        <p>9864666666266466</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">ORDER DETAILS</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <p>Name: <span className="text-gray-600">Bilal Khan Yousafzai</span></p>
                            <p>Dimension: <span className="text-gray-600">Inches</span></p>
                            <p>SKU: <span className="text-gray-600">#56452568</span></p>
                            <p>Size: <span className="text-gray-600">3 x 4 x 4</span></p>
                            <p>Order ID: <span className="text-gray-600">#735483658</span></p>
                            <p>Quantity: <span className="text-gray-600">2</span></p>
                            <p>Order Date: <span className="text-gray-600">24/12/2022</span></p>
                            <p>Invoice Date: <span className="text-gray-600">26/12/2022</span></p>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="border border-gray-300 rounded-md overflow-auto">
                        <table className="w-full border-collapse text-xs md:text-sm">
                            <thead>
                                <tr className="border-b border-gray-300 text-left font-medium bg-gray-100">
                                    <th className="p-2">Description</th>
                                    <th className="p-2">Price</th>
                                    <th className="p-2">Qty</th>
                                    <th className="p-2">GSTIN</th>
                                    <th className="p-2">Discount</th>
                                    <th className="p-2 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-b">
                                    <td className="p-2">Product name</td>
                                    <td className="p-2">$363</td>
                                    <td className="p-2">2</td>
                                    <td className="p-2">16%</td>
                                    <td className="p-2">-$0.0</td>
                                    <td className="p-2 text-right font-semibold">$387</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2">Other cost</td>
                                    <td className="p-2">$467</td>
                                    <td className="p-2">1</td>
                                    <td className="p-2">16%</td>
                                    <td className="p-2">-$0.0</td>
                                    <td className="p-2 text-right font-semibold">$489</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold">
                                    <td colSpan="5" className="p-2 text-right">Total</td>
                                    <td className="p-2 text-right text-black">$957</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Addresses */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                        <div>
                            <p>By</p>
                            <p className="text-black font-semibold">AJX Cloths</p>
                            <p>1456 Veitri Drive, Anchorage, AK 99502</p>
                        </div>
                        <div>
                            <h3>Delivered to</h3>
                            <p className="text-black font-semibold">Bilal Khan Yousafzai</p>
                            <p>1456 Veitri Drive, Anchorage, AK 99502</p>
                        </div>
                    </div>

                    {/* Note */}
                    <div>
                        <h3 className="font-semibold">Note:</h3>
                        <p className="text-xs text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus porta mi et nulla sollicitudin, et tristique leo tristique.
                        </p>
                    </div>

                    {/* Print Button */}
                    <div className="flex justify-center">
                        <button className="px-6 py-2 bg-gray-200 text-purple-800 font-semibold rounded-lg hover:bg-gray-300">
                            Print Label
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
