import React from 'react';

const TypeToggle = ({ selectedType, setSelectedType }) => {
  // The isChecked state is now derived from the selectedType
  // true when "Expense", false when "Income"
  const isChecked = selectedType === "Expense";
  
  const handleCheckboxChange = () => {
    // Toggle between "Income" and "Expense"
    setSelectedType(isChecked ? "Income" : "Expense");
  };
  
  return (
    <div className="flex items-center justify-center space-x-3">
      {/* Income label on the left side */}
      <span className={`font-medium ${!isChecked ? "text-blue-600" : "text-gray-500"}`}>Income</span>
      
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div 
            className={`box block h-8 w-14 rounded-full transition-colors ${
              isChecked ? "bg-red-500" : "bg-blue-500"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
              isChecked ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
      </label>
      
      {/* Expense label on the right side */}
      <span className={`font-medium ${isChecked ? "text-red-600" : "text-gray-500"}`}>Expense</span>
    </div>
  );
};

export default TypeToggle;