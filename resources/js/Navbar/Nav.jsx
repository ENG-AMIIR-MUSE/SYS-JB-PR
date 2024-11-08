import React from "react";
import { FaBell, FaUserCircle, FaCog } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            {/* Left section: Dashboard Logo/Name */}
            <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-indigo-600">
                    <a href="/" className="text-indigo-600">
                        Job Portal
                    </a>
                </div>
            </div>

            {/* Right section: Notifications, Profile Image, Settings */}
            <div className="flex items-center space-x-6">
                {/* Notifications */}
                <div className="relative">
                    <FaBell size={24} className="text-gray-700" />
                    <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1.5">
                        3
                    </span>
                </div>

                {/* User Profile */}
                <div className="flex items-center space-x-2">
                    <img
                        src="https://randomuser.me/api/portraits/men/75.jpg" // Example user image
                        alt="User"
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-700">John Doe</span>
                </div>

                {/* Settings Icon */}
                <div>
                    <FaCog size={24} className="text-gray-700" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
