import React, { useState } from "react";
import {
    FaHome,
    FaShoppingCart,
    FaEnvelope,
    FaUser,
    FaCog,
    FaArrowLeft,
    FaArrowRight,
    FaSignOutAlt,
} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Nav from "../Pages/Navbar/Nav";
import Navbar from "../Navbar/Nav";

export default function SideBar({ children }) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div
                className={`${
                    isExpanded ? "w-[300px]" : "w-[70px]"
                } bg-white text-gray-700 h-full  flex flex-col items-start transition-all duration-300 p-4 shadow-xl`}
            >
                {/* Logo and Sidebar Toggle */}
                <div className="flex items-center justify-between w-full mb-6">
                    <span className="text-lg font-semibold text-indigo-600">
                        {isExpanded ? "Job Portal System" : <FaBagShopping />}
                    </span>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-700 hover:text-indigo-600 pl-3 focus:outline-none"
                    >
                        {isExpanded ? (
                            <FaArrowLeft size={18} />
                        ) : (
                            <FaArrowRight size={18} />
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-6 w-full">
                    {/* Dashboard */}
                    <a
                        href="/dashboard"
                        className="text-gray-700 hover:text-indigo-500 flex items-center space-x-3 text-sm"
                    >
                        <FaHome size={18} />
                        {isExpanded && (
                            <span className="text-sm">Dashboard</span>
                        )}
                    </a>

                    {/* Jobs */}
                    <a
                        href="/jobs"
                        className="text-gray-700 hover:text-indigo-500 flex items-center space-x-3 text-sm"
                    >
                        <FaShoppingCart size={18} />
                        {isExpanded && <span className="text-sm">Jobs</span>}
                    </a>

                    {/* Saved Jobs */}
                    <a
                        href="/saved-jobs"
                        className="text-gray-700 hover:text-indigo-500 flex items-center space-x-3 text-sm"
                    >
                        <FaEnvelope size={18} />
                        {isExpanded && (
                            <span className="text-sm">Saved Jobs</span>
                        )}
                    </a>

                    {/* Applications */}
                    <a
                        href="/applications"
                        className="text-gray-700 hover:text-indigo-500 flex items-center space-x-3 text-sm"
                    >
                        <FaUser size={18} />
                        {isExpanded && (
                            <span className="text-sm">Applications</span>
                        )}
                    </a>

                    {/* Profile */}
                    <a
                        href="/profile"
                        className="text-gray-700 hover:text-indigo-500 flex items-center space-x-3 text-sm"
                    >
                        <FaUser size={18} />
                        {isExpanded && <span className="text-sm">Profile</span>}
                    </a>

                    {/* Notifications */}
                    <a
                        href="/notifications"
                        className="text-gray-700 hover:text-indigo-500 flex items-center space-x-3 text-sm"
                    >
                        <FaCog size={18} />
                        {isExpanded && (
                            <span className="text-sm">Notifications</span>
                        )}
                    </a>
                </nav>

                {/* Logout Link */}
                <div className="mt-auto w-full border-t border-gray-300 pt-4">
                    <a
                        href="/logout"
                        className="text-gray-700 hover:text-indigo-500 flex items-center space-x-3 text-sm"
                    >
                        <FaSignOutAlt size={18} />
                        {isExpanded && <span className="text-sm">Logout</span>}
                    </a>
                </div>
            </div>

            {/* Main Content */}

            <main className="flex-grow flex-col p-4 bg-white rounded-l-lg shadow-inner overflow-auto">
                <Navbar />
                {children}
            </main>
        </div>
    );
}
