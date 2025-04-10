import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Briefcase, Calendar, Globe, PersonStanding } from 'lucide-react';

const countries = ['India', 'USA', 'Canada', 'UK', 'Australia']; 
const genderOptions = ["Male", "Female", "Other"];
const employmentTypes = ["Full-time", "Part-time", "Freelancer", "Unemployed"];

// Currency mapping for each country
const countryCurrencyMap = {
  'India': { currency: 'INR', symbol: '₹' },
  'USA': { currency: 'USD', symbol: '$' },
  'Canada': { currency: 'CAD', symbol: 'C$' },
  'UK': { currency: 'GBP', symbol: '£' },
  'Australia': { currency: 'AUD', symbol: 'A$' }
};

const SignUp = () => {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    jobTitle: '',
    employmentType: '',
    dob: '',
    gender: '',
    country: 'India', 
    currency: 'INR', 
  });

  const [currencyDisplay, setCurrencyDisplay] = useState({ currency: 'INR', symbol: '₹' });
  const [errors, setErrors] = useState({});

  // Update currency when country changes
  useEffect(() => {
    if (formData.country && countryCurrencyMap[formData.country]) {
      const newCurrencyInfo = countryCurrencyMap[formData.country];
      setCurrencyDisplay(newCurrencyInfo);
      setFormData(prev => ({
        ...prev,
        currency: newCurrencyInfo.currency
      }));
    }
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create data object to match backend schema
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      dob: formData.dob,
      gender: formData.gender,
      country: formData.country,
      currency: formData.currency,
      jobTitle: formData.jobTitle,
      employmentType: formData.employmentType
    };

    try {
      const response = await axios.post("http://localhost:5000/user/signup", userData);
      alert("Sign-up successful!");
    } catch (error) {
      alert(error.response?.data?.message || "Sign-up failed!");
    }
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
                    <button type="button" className="flex items-center justify-center px-4 py-1.5
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="flex items-center">
                      <User className="absolute left-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Full Name"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                    Continue
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  
                  <div className="relative">
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
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
                    <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-1">
                      Employment Type
                    </label>
                    <select
                      id="employmentType"
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Employment Type</option>
                      {employmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className='flex flex-col-2 gap-2'>
                    <div className="relative w-full">
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <div className="flex items-center">
                        <Calendar className="absolute left-3 text-gray-400" size={20} />
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <div className='flex items-center'>
                        <PersonStanding className="absolute left-1 text-gray-400" size={20} />
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full pl-6 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Gender</option>
                          {genderOptions.map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-2'>
                    <div className="relative w-[85%]">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
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
                    <div className="relative w-[15%]">
                      <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                        Currency
                      </label>
                      <div className="flex items-center justify-center h-10 bg-gray-100 border border-gray-300 rounded-md mt-1 p-2">
                        <span className="font-medium">{currencyDisplay.symbol}</span>
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-between'>
                  <button
                    onClick={handleSubmit}
                    className="text-blue-500 hover:underline"
                  >
                    Skip for Now
                  </button>
                    <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600"
                    onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
          <div className="flex justify-center items-center mt-16">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-gray-700">Already has an account?</p>
                <button
                  onClick={() => navigate("/login")}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Sign In
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;