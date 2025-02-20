import React from "react";
import { motion } from "framer-motion";

const InputDuration = ({ label = "", placeholder = "", value, onChange }) => {
  const handleNumber = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    val = Math.min(1000, Number(val)); // Limit to 1000
    onChange(val || ""); // Prevents leading zero issue
  };

  return (
    <div className="flex items-center p-2 rounded-lg w-full max-w-md">
      <span className="text-lg font-medium text-black pr-[20px]">{label}</span>
      <motion.input
        type="text"
        value={value}
        placeholder={placeholder}
        className="p-2 border border-black text-black bg-transparent rounded-lg outline-none w-[90%] max-w-[400px] text-left placeholder-black"
        onChange={handleNumber}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    </div>
  );
};

export default InputDuration;
