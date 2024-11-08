import React from "react";
import {
    FaUserCog,
    FaBriefcase,
    FaRegFileAlt,
    FaChartLine,
    FaCogs,
    FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
    // Sample admin data (you can replace this with actual dynamic data)
    const totalUsers = 150;
    const totalJobs = 40;
    const totalApplications = 120;
    const platformTraffic = 2500; // Page views or similar metric

    return (
        <div className="p-8">
            {/* Dashboard Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-indigo-600">
                    Admin Dashboard
                </h1>
                <p className="text-lg text-gray-600">
                    Manage users, jobs, applications, and platform settings.
                </p>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Users */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Total Users</h2>
                        <p className="text-gray-600">
                            You have {totalUsers} registered users
                        </p>
                    </div>
                    <FaUsers size={30} className="text-blue-500" />
                </div>

                {/* Jobs */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Total Jobs</h2>
                        <p className="text-gray-600">
                            You have {totalJobs} active job listings
                        </p>
                    </div>
                    <FaBriefcase size={30} className="text-indigo-600" />
                </div>

                {/* Applications */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Total Applications
                        </h2>
                        <p className="text-gray-600">
                            You have {totalApplications} applications
                        </p>
                    </div>
                    <FaRegFileAlt size={30} className="text-green-500" />
                </div>

                {/* Traffic */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Platform Traffic
                        </h2>
                        <p className="text-gray-600">
                            You have {platformTraffic} page views
                        </p>
                    </div>
                    <FaChartLine size={30} className="text-yellow-500" />
                </div>
            </div>

            {/* Manage Links */}
            <div className="mt-12 space-y-6">
                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Manage Users
                        </h3>
                        <p className="text-gray-600">
                            View and manage user profiles and roles.
                        </p>
                    </div>
                    <a
                        href="/admin/users"
                        className="text-indigo-600 hover:underline font-semibold"
                    >
                        Manage Users
                    </a>
                </div>

                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Manage Jobs
                        </h3>
                        <p className="text-gray-600">
                            Add, edit, or remove job listings.
                        </p>
                    </div>
                    <a
                        href="/admin/jobs"
                        className="text-indigo-600 hover:underline font-semibold"
                    >
                        Manage Jobs
                    </a>
                </div>

                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            View Applications
                        </h3>
                        <p className="text-gray-600">
                            Track applications submitted by users.
                        </p>
                    </div>
                    <a
                        href="/admin/applications"
                        className="text-indigo-600 hover:underline font-semibold"
                    >
                        View Applications
                    </a>
                </div>

                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Platform Settings
                        </h3>
                        <p className="text-gray-600">
                            Adjust system configurations and settings.
                        </p>
                    </div>
                    <a
                        href="/admin/settings"
                        className="text-indigo-600 hover:underline font-semibold"
                    >
                        Settings
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
