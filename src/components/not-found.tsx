import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const NotFound: React.FC = () => {
  // Animation state
  const [mounted, setMounted] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);

  useEffect(() => {
    // Trigger mount animation
    setMounted(true);

    // Delay showing the redirect message
    const timer = setTimeout(() => {
      setShowRedirect(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gray-950 p-4">
      <div
        className={`text-center max-w-2xl transition-all duration-1000 transform ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* 404 Header */}
        <h1 className="text-9xl font-bold text-gray-900 mb-2 animate-pulse">
          4<span className="text-blue-500">0</span>4
        </h1>

        {/* Divider with animation */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6 animate-pulse"></div>

        {/* Main message */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back to chatting with Kalph!
        </p>

        {/* Return home button with hover effects */}
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
                    hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1
                    hover:shadow-lg"
        >
          <span className="material-symbols-outlined mr-2">home</span>
          Return Home
        </Link>

        {/* Optional redirect message with fade in */}
        <div
          className={`mt-12 text-gray-500 transition-opacity duration-700 ${
            showRedirect ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>
            <span className="inline-block animate-ping size-2 bg-blue-500 rounded-full mr-2"></span>
            You can also try refreshing the page or checking your connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
