import React from "react";
import {
    FaBriefcase,
    FaHeart,
    FaEnvelope,
    FaUser,
    FaBell,
} from "react-icons/fa";

const UserDashoardS = () => {
    // Sample data related to your schema
    const jobCount = 12;
    const savedJobsCount = 5;
    const applicationsCount = 3;
    const notificationsCount = 7;

    return (
        <div className="p-6 bg-gray-50">
            {/* Dashboard Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-indigo-800">
                    Welcome to Your Dashboard
                </h1>
                <p className="text-lg text-gray-700">
                    Manage your job search, profile, and notifications.
                </p>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Jobs */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Jobs
                        </h2>
                        <p className="text-gray-600">
                            You have {jobCount} new jobs to explore
                        </p>
                    </div>
                    <FaBriefcase size={30} className="text-indigo-500" />
                </div>

                {/* Saved Jobs */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Saved Jobs
                        </h2>
                        <p className="text-gray-600">
                            You have {savedJobsCount} saved jobs
                        </p>
                    </div>
                    <FaHeart size={30} className="text-red-400" />
                </div>

                {/* Applications */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Applications
                        </h2>
                        <p className="text-gray-600">
                            You have {applicationsCount} applications pending
                        </p>
                    </div>
                    <FaEnvelope size={30} className="text-green-400" />
                </div>

                {/* Notifications */}
                <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Notifications
                        </h2>
                        <p className="text-gray-600">
                            You have {notificationsCount} new notifications
                        </p>
                    </div>
                    <FaBell size={30} className="text-yellow-400" />
                </div>
            </div>

            {/* Actionable Links */}
            <div className="mt-12 space-y-6">
                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Explore Jobs
                        </h3>
                        <p className="text-gray-600">
                            Find the perfect job that matches your skills.
                        </p>
                    </div>
                    <a
                        href="/jobs"
                        className="text-indigo-600 hover:underline font-semibold"
                    >
                        View Jobs
                    </a>
                </div>

                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Manage Applications
                        </h3>
                        <p className="text-gray-600">
                            Track your job applications and progress.
                        </p>
                    </div>
                    <a
                        href="/applications"
                        className="text-indigo-600 hover:underline font-semibold"
                    >
                        View Applications
                    </a>
                </div>

                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Edit Profile
                        </h3>
                        <p className="text-gray-600">
                            Update your profile information to stay relevant.
                        </p>
                    </div>
                    <a
                        href="/profile"
                        className="text-indigo-600 hover:underline font-semibold"
                    >
                        Edit Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserDashoardS;
