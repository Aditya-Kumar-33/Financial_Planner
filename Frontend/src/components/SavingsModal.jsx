import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SavingsModal({ open, setOpen, onSubmit }) {
  if (!open) return null;

  const [formData, setFormData] = useState({
    amount: "",
    type: "Expense",
    category: "Food",
    paymentMethod: "Cash",
    subCategory: "",
    description: "",
    dateTime: new Date().toISOString().slice(0, 16),
    repeat: "None",
    nextDueDate: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const signedUser = JSON.parse(localStorage.getItem("user"));
    if (signedUser) setUser(signedUser);
  }, []);

  // Category options based on type
  const categoryOptions = {
    Expense: ['Food', 'Travel', 'Household', 'Lifestyle', 'Miscellaneous'],
    Income: ['Salary', 'Business', 'Investments', 'Passive & Other Income']
  };

  // Reset form on open
  useEffect(() => {
    if (open) {
      setFormData({
        amount: "",
        type: "Expense",
        category: "Food",
        paymentMethod: "Cash",
        subCategory: "",
        description: "",
        dateTime: new Date().toISOString().slice(0, 16),
        repeat: "None",
        nextDueDate: ""
      });
      setErrors({});
    }
  }, [open]);

  //Escape key close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // If changing type, also update category to valid option for the type
    if (name === 'type') {
      setFormData({
        ...formData,
        [name]: value,
        category: categoryOptions[value][0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = "Amount must be a positive number";
    }
    
    if (!formData.type) {
      newErrors.type = "Type is required";
    }
    
    if (!formData.category) {
      newErrors.category = "Category is required";
    }
    
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Payment method is required";
    }
    
    if (!formData.dateTime) {
      newErrors.dateTime = "Date and time is required";
    }
    
    if (formData.repeat !== "None" && !formData.nextDueDate) {
      newErrors.nextDueDate = "Next due date is required for recurring entries";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      // Process the data with numeric conversion for amount
      const processedData = {
        userId : user._id,
        amount: Number(formData.amount),
        type: formData.type,
        category: formData.category,
        paymentMethod: formData.paymentMethod,
        subCategory: formData.subCategory || "",
        description: formData.description || "",
        dateTime: new Date(formData.dateTime).toISOString(),
        repeat: formData.repeat,
        nextDueDate: formData.nextDueDate ? new Date(formData.nextDueDate).toISOString() : null
      };
      
      try {
        console.log("Sending data to server:", processedData);
        const user = JSON.parse(localStorage.getItem("user"));
        // Set Content-Type header explicitly
        const response = await axios.post("http://localhost:5000/savings", processedData, {
          headers: { Authorization: `Bearer ${user.token}` },
          withCredentials: true // Send cookies if you're using session-based auth
        });
        
        console.log("Server response:", response.data);
        
        if (onSubmit) {
          onSubmit(processedData);
        }
        
        setOpen(false);
      } catch (error) {
        console.error("Error details:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          alert(error.response.data.message || "Server error: " + error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
          alert("No response from server. Check if your backend is running.");
        } else {
          // Something happened in setting up the request
          console.error("Error message:", error.message);
          alert("Error: " + error.message);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-20"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-hidden={!open}
    >
      <button
        className="absolute top-[3%] right-[4%] bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
        onClick={() => setOpen(false)}
      >
        <X/>
      </button>
      <div
        className="w-[85%] h-[80%] bg-[#121323]/99 p-5 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.7)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Add New Transaction</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Amount */}
            <div className="mb-4">
              <label className="block text-white mb-2">
                Amount*
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className={`w-full p-2 rounded bg-[#1e1f38] text-white border ${errors.amount ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="0.00"
                step="0.01"
              />
              {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
            </div>

            {/* Type */}
            <div className="mb-4">
              <label className="block text-white mb-2">
                Type*
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`w-full p-2 rounded bg-[#1e1f38] text-white border ${errors.type ? 'border-red-500' : 'border-gray-600'}`}
              >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
              </select>
              {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-white mb-2">
                Category*
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full p-2 rounded bg-[#1e1f38] text-white border ${errors.category ? 'border-red-500' : 'border-gray-600'}`}
              >
                {categoryOptions[formData.type].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            {/* Payment Method */}
            <div className="mb-4">
              <label className="block text-white mb-2">
                Payment Method*
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className={`w-full p-2 rounded bg-[#1e1f38] text-white border ${errors.paymentMethod ? 'border-red-500' : 'border-gray-600'}`}
              >
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Wallets">Wallets</option>
                <option value="Other">Other</option>
              </select>
              {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
            </div>

            {/* Sub Category */}
            <div className="mb-4">
              <label className="block text-white mb-2">
                Sub Category
              </label>
              <input
                type="text"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#1e1f38] text-white border border-gray-600"
                placeholder="Optional subcategory"
              />
            </div>

            {/* Date & Time */}
            <div className="mb-4">
              <label className="block text-white mb-2">
                Date & Time*
              </label>
              <input
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className={`w-full p-2 rounded bg-[#1e1f38] text-white border ${errors.dateTime ? 'border-red-500' : 'border-gray-600'}`}
              />
              {errors.dateTime && <p className="text-red-500 text-sm mt-1">{errors.dateTime}</p>}
            </div>

            {/* Description */}
            <div className="mb-4 md:col-span-2">
              <label className="block text-white mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#1e1f38] text-white border border-gray-600"
                placeholder="Add details about this transaction"
                rows="3"
              />
            </div>

            {/* Repeat */}
            <div className="mb-4">
              <label className="block text-white mb-2">
                Repeat
              </label>
              <select
                name="repeat"
                value={formData.repeat}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#1e1f38] text-white border border-gray-600"
              >
                <option value="None">None</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            {/* Next Due Date - Only show if repeat is not None */}
            {formData.repeat !== "None" && (
              <div className="mb-4">
                <label className="block text-white mb-2">
                  Next Due Date*
                </label>
                <input
                  type="date"
                  name="nextDueDate"
                  value={formData.nextDueDate}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-[#1e1f38] text-white border ${errors.nextDueDate ? 'border-red-500' : 'border-gray-600'}`}
                />
                {errors.nextDueDate && <p className="text-red-500 text-sm mt-1">{errors.nextDueDate}</p>}
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mr-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Transaction"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}