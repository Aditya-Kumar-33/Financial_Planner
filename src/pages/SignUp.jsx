import React, { useState } from 'react';
import { User, Lock, Mail, Phone, Building2, Briefcase, Calendar, Globe } from 'lucide-react';

const countries = ['India', 'USA', 'Canada', 'UK', 'Australia']; // Add more as needed

const SignUp = () => {
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    jobTitle: '',
    dateOfBirth: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.Name.trim()) newErrors.Name = 'Full name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^[+]?[\d\s()-]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Form Data:', formData);
    alert('Sign-up successful!');
  };

  return (
    <div className="h-screen flex 
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] 
    font-dm-sans">
      <div className="w-1/2 h-full bg-white flex flex-col">
        <div className="w-full h-full shadow-lg rounded-xl p-8 pb-0 space-y-6">
          <div className='mt-8'>
            <h2 className="text-[25px] font-bold text-start">
              Create Your Account
            </h2>
            <p className="text-gray-600 text-[16px]">Start your financial journey today</p>
          </div>

          <div className='w-full flex justify-center flex-col items-center'>
            <form onSubmit={step === 1 ? handleNext : handleSubmit}
            className="space-y-4 w-[60%]">
              {step === 1 && (
                <>
                  <div className='flex justify-center'>
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
                  </div>
                  <div className="relative">
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="flex items-center">
                      <User className="absolute left-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Full Name"
                      />
                    </div>
                    {errors.Name && <p className="text-red-500 text-xs mt-1">{errors.Name}</p>}
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                        placeholder="Enter Your Email"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="flex items-center">
                      <Phone className="absolute left-3 text-gray-400" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="********"
                        />
                      </div>
                      {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <div className="flex items-center">
                        <Lock className="absolute left-3 text-gray-400" size={20} />
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="********"
                        />
                      </div>
                      {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>
                  </div>
                  <button onClick={(e) => handleNext(e)}
                  className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                    Continue
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="relative">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <div className="flex items-center">
                      <Building2 className="absolute left-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title (Optional)
                    </label>
                    <div className="flex items-center">
                      <Briefcase className="absolute left-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Job Title"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country (Optional)
                    </label>
                    <div className="flex items-center">
                      <Globe className="absolute left-3 text-gray-400" size={20} />
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                  <button className="text-blue-500 hover:underline">
                      Skip for now
                    </button>
                    <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
