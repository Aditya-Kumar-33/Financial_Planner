import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    const userData = {
      email: formData.email,
      password: formData.password
    };
  
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Login successful!");
  
        // Store user details and token in localStorage
        localStorage.setItem("user", JSON.stringify({ 
          name: data.name, 
          email: data.email,
          _id:data._id,
          token: data.token 
        }));

        navigate("/test"); // Redirect to dashboard
        
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="h-screen flex 
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] 
    font-dm-sans"
    >
      <div className="w-1/2 h-full bg-white flex flex-col justify-center">
        <div className="w-full h-full shadow-lg rounded-xl p-8 pb-0 space-y-6">
          {/* Header Section */}
          <div className="mt-8">
            <h2 className="text-[25px] font-bold text-start">Login</h2>
            <p className="text-gray-600 text-[16px]">Access your account now</p>
          </div>

          {/* Google Sign-In */}
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-1.5
                bg-white border border-gray-300 rounded-3xl text-gray-800
                font-semibold transition hover:bg-gray-100 my-5"
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google Logo"
                className="w-6 mr-2"
              />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 w-[60%] mx-auto">
            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="flex items-center">
                <Mail className="absolute left-3 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="flex items-center">
                <Lock className="absolute left-3 text-gray-400" size={20} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600"
            >
              Login
            </button>

            <div className="flex justify-between">
                <div className="flex gap-1">
                    <input type="checkbox" name="" id="" />
                    <span>Remember Me</span>
                </div>
                <a href="#" className="text-blue-500 hover:underline">
                    Forgot password?
                </a>
            </div>
            
            {/* Forgot Password & Create Account Links */}
            <div className="flex justify-center items-center mt-16">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-gray-700">Not registered yet?</p>
                <button
                  onClick={() => navigate("/signup")}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Create an Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
