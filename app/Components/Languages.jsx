'use client';

import { useState } from 'react';

export default function Languages() {
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

  const suggestedLanguages = ['English (US)', 'English (UK)'];
  const otherLanguages = ['Mandarin', 'Hindi', 'Spanish', 'French', 'Arabic', 'Bengali', 'Russian', 'Indonesia'];

  return (
    <>
    <h2 className="text-lg  font-semibold p-6 text-gray-800 pb-0">Language</h2>

    <div className="flex items-center justify-center p-4">

      <div className="bg-white p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Suggested Languages */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Suggested</h3>
            {suggestedLanguages.map((lang) => (
              <label key={lang} className="flex items-center justify-between py-2 cursor-pointer">
                <span className="text-gray-700">{lang}</span>
                <input
                  type="radio"
                  name="language"
                  value={lang}
                  checked={selectedLanguage === lang}
                  onChange={() => setSelectedLanguage(lang)}
                  className="appearance-none w-5 h-5 border-2 border-purple-700 rounded-full checked:bg-purple-700 checked:ring-2 checked:ring-purple-500 cursor-pointer"
                />
              </label>
            ))}
          </div>

          {/* Other Languages */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Other Languages</h3>
            {otherLanguages.map((lang) => (
              <label key={lang} className="flex items-center justify-between py-2 cursor-pointer">
                <span className="text-gray-700">{lang}</span>
                <input
                  type="radio"
                  name="language"
                  value={lang}
                  checked={selectedLanguage === lang}
                  onChange={() => setSelectedLanguage(lang)}
                  className="appearance-none w-5 h-5 border-2 border-purple-700 rounded-full checked:bg-purple-700 checked:ring-2 checked:ring-purple-500 cursor-pointer"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
