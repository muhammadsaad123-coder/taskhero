'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight ,ChevronDownIcon } from 'lucide-react';


const data = Array(12).fill({
    name: 'Big Sale 50%',
    category: 'Home & Garden',
    date: '04/29/2024',
    views: '321412',
    clicks: '321412',
});

export default function Notificationstable() {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 624;

    return (
        <div className=" mt-4 min-h-screen flex justify-center">
            <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Push notifications</h2>
                <div className=' flex justify-between'>


                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className=" w-60 bg-gray-100 p-2 border rounded-md mb-4 text-sm"
                    />
                    <div className="flex  justify-end space-x-2 mb-4">
                        <button className="px-3   bg-gray-100 border rounded-md text-sm">Low to High <span className='ml-1'><ChevronDownIcon className=' inline-block' size={18}/></span></button>
                        <button className="px-3   bg-gray-100 rounded-md border  text-sm">Latest <span> <ChevronDownIcon className=' inline-block' size={18}/></span></button>
                    </div>
                </div>
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className=" text-gray-500 text-left">
                            {['Name', 'Category', 'Date / time', 'Views', 'Clicks', 'In app', 'SMS'].map((header) => (
                                <th key={header} className="p-3 border-b">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-3">{item.name}</td>
                                <td className="p-3">{item.category}</td>
                                <td className="p-3">{item.date}</td>
                                <td className="p-3">{item.views}</td>
                                <td className="p-3">{item.clicks}</td>
                                <td className="p-3 text-xl">
                                    <button className=' w-5 bg-green-100 text-green-500'>+</button>
                                </td>
                                <td className="p-3 text-xl">
                                <button className=' w-4  bg-red-50 text-red-500'>-</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
                    <button
                        className="p-2 border rounded-md"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                className={`p-2 border rounded-md ${currentPage === num ? 'bg-purple-500 text-white' : ''}`}
                                onClick={() => setCurrentPage(num)}
                            >
                                {num < 5 ? `0${num}` : num}
                            </button>
                        ))}
                        <span>...</span>
                        <button className="p-2 border rounded-md">{totalPages}</button>
                    </div>
                    <button
                        className="p-2 border rounded-md"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
