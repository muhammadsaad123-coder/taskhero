'use client';

import { useState } from 'react';

export default function Currency() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD ($)');

  const suggestedCurrencies = ['USD ($)', 'Pounds (£)'];
  const otherCurrencies = [
    'Yuan (¥)',
    'Indian Rupee (₹)',
    'Euro (€)',
    'Pakistani Rupee (Rs)',
    'Taka (৳)',
    'Ruble (₽)',
    'AUD ($)',
    'Rupiah (Rp)',
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Currency</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Suggested Currencies */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Suggested</h3>
            {suggestedCurrencies.map((currency) => (
              <label key={currency} className="flex items-center justify-between py-2 cursor-pointer">
                <span className="text-gray-700">{currency}</span>
                <input
                  type="radio"
                  name="currency"
                  value={currency}
                  checked={selectedCurrency === currency}
                  onChange={() => setSelectedCurrency(currency)}
                  className="appearance-none w-5 h-5 border-2 border-purple-700 rounded-full checked:bg-purple-700 checked:ring-2 checked:ring-purple-500 cursor-pointer"
                />
              </label>
            ))}
          </div>

          {/* Other Currencies */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Other Currencies</h3>
            {otherCurrencies.map((currency) => (
              <label key={currency} className="flex items-center justify-between py-2 cursor-pointer">
                <span className="text-gray-700">{currency}</span>
                <input
                  type="radio"
                  name="currency"
                  value={currency}
                  checked={selectedCurrency === currency}
                  onChange={() => setSelectedCurrency(currency)}
                  className="appearance-none w-5 h-5 border-2 border-purple-700 rounded-full checked:bg-purple-700 checked:ring-2 checked:ring-purple-500 cursor-pointer"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
