import { useState } from "react";
import { FaPaperclip } from "react-icons/fa6";

export default function Report() {
  const [message, setMessage] = useState("");

  return (
    <div className="  flex items-center justify-center p-6">
      <div className="bg-white w-full   rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Report</h2>
        <p className="text-gray-600 text-sm mb-4">
          Describe your problem or report any issue.
        </p>
        <p className="text-gray-500 text-xs mb-2">
          You can add pictures for proof or references (Optional)
        </p>

        {/* Textarea with Attachment Icon */}
        <div className="relative">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
            rows="4"
            placeholder="Describe your issue here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <FaPaperclip className="absolute top-3 right-4 text-gray-500 cursor-pointer" />
        </div>

        {/* Send Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition">
            Send
          </button>
        </div>

        {/* Note Section */}
        <p className="text-xs text-gray-500 mt-4">
          Note: Action will be taken after the thorough check-up of your issue.
        </p>
      </div>
    </div>
  );
}
