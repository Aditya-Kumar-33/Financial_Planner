import React from "react";
import { motion } from "framer-motion";

const InputPercentage = ({ label = "", placeholder = "", value, onChange }) => {
  const handleNumber = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    onChange(val);
  };

  return (
    <div className="flex items-center p-8 rounded-lg">
      <span className="text-lg font-medium text-white">{label}</span>
      <motion.input
        type="text"
        value={value ? `${value}` : ""}
        placeholder={placeholder}
        className="flex-1 p-2 border border-white text-white bg-transparent rounded-lg outline-none placeholder-white"
        onChange={handleNumber}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    </div>
  );
};

export default InputPercentage;
