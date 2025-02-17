import React, { useState } from "react";
import { motion } from "framer-motion";

const InputDuration = ({ label = "", placeholder = "" }) => {
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("Days"); // Default selection

  const handleNumber = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    value = Math.min(1000, Number(value)); // Limit to 1000
    setAmount(value || ""); // Prevents leading zero issue
  };

  return (
    <div className="flex items-center gap-4 p-2 rounded-lg w-full max-w-md">
      {/* Label */}
      <span className="text-lg font-medium">{label}</span>

      {/* Input with animation */}
      <motion.input
        type="text"
        value={amount}
        placeholder={placeholder}
        className="flex-1 p-2 border rounded-lg outline-none"
        onChange={handleNumber}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Dropdown */}
      <select
        className="p-2 border rounded-lg outline-none bg-black cursor-pointer"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="Days">Days</option>
        <option value="Months">Months</option>
        <option value="Years">Years</option>
      </select>
    </div>
  );
};

export default InputDuration;
