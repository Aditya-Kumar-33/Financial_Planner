import React from "react";

const LoginRequired = () => {
  return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-[#121323] text-white p-8 rounded-lg shadow-lg w-[400px] flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Login Required</h2>
            <p className="text-white/70 mb-6 text-center">
            You need to log in to access this page. Please log in to continue.
            </p>
            <button
            className="bg-[#85EFC4] cursor-pointer text-black px-6 py-2 rounded-lg hover:bg-[#62be99] transition duration-300"
            onClick={() => (window.location.href = "/login")} // Redirect to login page
            >
            Go to Login
            </button>
        </div>
        </div>
  );
};

export default LoginRequired;
