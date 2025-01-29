// pages/index.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";

const contactsData = [
    { id: 1, name: "John Doe", message: "I can help with your task", time: "16:25", read: false, img: "/profile.jpg" },
    { id: 2, name: "Jane Smith", message: "Meeting at 3 PM?", time: "15:40", read: true, img: "/profile.jpg" },
    { id: 3, name: "Alex Brown", message: "Let's finalize the project", time: "14:10", read: true, img: "/profile.jpg" },
    { id: 4, name: "Emily White", message: "Got it, thanks!", time: "12:00", read: false, img: "/profile.jpg" },
];

const messagesData = {
    1: [
        { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", time: "09:15 PM", sender: "them" },
        { id: 2, text: "ok", time: "09:16 PM", sender: "me" },
    ],
    2: [{ id: 1, text: "See you at 3 PM!", time: "02:30 PM", sender: "them" }],
    3: [{ id: 1, text: "Let's finalize it today.", time: "11:00 AM", sender: "them" }],
    4: [{ id: 1, text: "Noted!", time: "10:45 AM", sender: "them" }],
};

export default function ChatScreen() {
    const [filter, setFilter] = useState("All");
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [showChat, setShowChat] = useState(false); // Controls screen switching on small devices

    const filteredContacts = contactsData.filter((contact) => {
        if (filter === "All") return true;
        if (filter === "Read") return contact.read;
        if (filter === "Unread") return !contact.read;
        return false;
    });

    const sendMessage = () => {
        if (!messageInput.trim()) return;
        messagesData[selectedChat].push({
            id: messagesData[selectedChat].length + 1,
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            sender: "me",
        });
        setMessageInput("");
    };

    return (
        <div className="h-screen flex flex-col md:flex-row gap-x-2 bg-gray-100">
            {/* Inbox Sidebar - Visible on larger screens or when `showChat` is false */}
            <div
                className={`w-full md:w-1/3 bg-white rounded-2xl border-r p-4 transition-all ${showChat ? "hidden md:block" : "block"
                    }`}
            >
                <h2 className="text-lg font-semibold mb-3">Inbox</h2>
                <div className="flex gap-2 mb-3">
                    {["All", "Read", "Unread"].map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-1 rounded-full text-sm font-medium ${filter === type ? "bg-purple-900 text-white" : "bg-gray-200 text-gray-700"
                                }`}
                            onClick={() => setFilter(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 rounded-lg border bg-gray-100 mb-3"
                />

                <div className="overflow-auto h-[70vh]">
                    {filteredContacts.map((contact) => (
                        <div
                            key={contact.id}
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${selectedChat === contact.id ? "bg-purple-200" : "hover:bg-gray-100"
                                }`}
                            onClick={() => {
                                setSelectedChat(contact.id);
                                setShowChat(true);
                            }}
                        >
                            <Image src={contact.img} alt={contact.name} width={40} height={40} className="rounded-full" />
                            <div className="flex-1">
                                <h3 className="font-medium">{contact.name}</h3>
                                <p className="text-xs text-gray-500">{contact.message}</p>
                            </div>
                            <span className="text-xs text-gray-400">{contact.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Section - Visible when a chat is selected */}
            <div
                className={`w-full md:flex-1 flex flex-col h-full bg-white transition-all ${showChat ? "block" : "hidden md:block"
                    }`}
            >
                {/* Header */}
                <div className="p-4 bg-white border-b flex rounded-2xl items-center gap-4">
                    <button
                        onClick={() => setShowChat(false)}
                        className="md:hidden p-2 rounded-lg bg-gray-200 text-gray-700"
                    >
                        <IoArrowBack size={20} />
                    </button>
                    <h2 className="text-lg font-semibold">
                        {contactsData.find((c) => c.id === selectedChat)?.name || "Select a chat"}
                    </h2>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-auto p-4">
                    {selectedChat &&
                        messagesData[selectedChat]?.map((msg) => (
                            <div key={msg.id} className={`flex mb-3 ${msg.sender === "me" ? "justify-end" : ""}`}>
                                <p
                                    className={`p-3 rounded-lg max-w-[75%] ${msg.sender === "me" ? "bg-purple-900 text-white" : "bg-purple-200 text-gray-800"
                                        }`}
                                >
                                    {msg.text}
                                </p>
                                <span className="text-xs text-gray-400 ml-2">{msg.time}</span>
                            </div>
                        ))}
                </div>

                {/* Message Input */}
                {selectedChat && (
                    <div className="p-4 border-t flex items-center bg-white">
                        <input
                            type="text"
                            placeholder="Type something..."
                            className="flex-1 p-3 rounded-lg border bg-gray-100"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-3 bg-purple-900 text-white p-3 rounded-lg flex items-center justify-center"
                        >
                            <FiSend size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
