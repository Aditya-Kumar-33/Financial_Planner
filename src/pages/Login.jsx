import React from "react";
import Google from "../components/GoogleSignIn"

const Login = () => {
  return (
    <div className="h-screen flex 
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] 
    font-dm-sans">

    <div className="w-1/2 h-full bg-white flex flex-col justify-center">
        <h2 className="text-[25px] font-bold  text-start px-10">Login</h2>
        <p className="text-gray-600 text-[16px] mb-4 px-10">Smart tools for smarter financial decisions.</p>
        
        <div className="flex flex-col items-center justify-center">
        <button className="flex items-center justify-center px-4 py-1.5
         bg-white border border-gray-300 rounded-3xl text-gray-800 
         font-semibold transition hover:bg-gray-100 my-5">
        <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
            className="w-6 mr-2"
        />
        <span>Continue with Google</span>
        </button>
        
        <div className="w-full max-w-sm">
            <label className="block text-gray-700 font-semibold mb-1">Username*</label>
            <input 
            type="text" 
            className="w-full border rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
            />
            
            <div className="text-center text-gray-500 my-2">or</div>
            
            <label className="block text-gray-700 font-semibold mb-1">Email*</label>
            <input 
            type="email" 
            className="w-full border rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            />
            
            <label className="block text-gray-700 font-semibold mb-1">Password*</label>
            <input 
            type="password" 
            className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            />
            
            <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            
            <button className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
            Login
            </button>
        </div>
        
        <div className="mt-6 text-center flex justify-between">
            <p className="text-gray-700">Not registered yet?</p>
            <button className="text-blue-500 font-semibold hover:underline">Create an Account</button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Login;