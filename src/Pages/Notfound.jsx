import React from "react";
import { Link } from "react-router-dom";

// NotFound component displays a 404 error page for unmatched routes
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center s bg-white">
    <div className="text-center">
      {/* 404 Error Code */}
      <h1 className="text-6xl font-extrabold text-primary-blue mb-4">404</h1>
      {/* Error Message */}
      <p className="text-xl font-bold text-neutralDark mb-6">
        Oops! Page not found.
      </p>
      {/* Button to go back to Home */}
      <Link
        to="/home"
        className="inline-block bg-accent text-neutralDark px-6 py-3 rounded-lg font-extrabold text-lg hover:bg-primary-blue hover:text-white transition-colors"
      >
        Go to Home
      </Link>
    </div>
  </div>
);

export default NotFound;