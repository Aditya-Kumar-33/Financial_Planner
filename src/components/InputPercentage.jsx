import React from "react";
import { motion } from "framer-motion";

const InputInflation = ({ label = "", placeholder = "", value, onChange }) => {
  const handleNumber = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    val = Math.min(100, Number(val)); // Limit to 100
    onChange(val || "");
  };

  return (
    <div className="flex items-center gap-4 p-2 rounded-lg w-full max-w-md">
      <span className="text-lg font-medium text-white">{label}</span>
      <motion.div className="flex gap-2 items-center">
        <motion.input
          type="text"
          value={value}
          placeholder={placeholder}
          className="flex-1 p-2 border border-white text-white bg-transparent rounded-lg outline-none w-[90%] max-w-[400px] placeholder-white"
          onChange={handleNumber}
          initial={{ scale: 1 }}
          whileFocus={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <span className="ml-2 text-white">%</span>
      </motion.div>
    </div>
  );
};

export default InputInflation;
