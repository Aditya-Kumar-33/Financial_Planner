import React from "react";
import { motion } from "framer-motion";

const InputBoxNum = ({ label = "", placeholder = "", value, onChange, type = "currency" }) => {
  const handleNumber = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers

    if (type === "percentage") {
      val = Math.min(100, Math.max(0, Number(val))); // Restrict between 0-100
    }

    onChange(val);
  };

  return (
    <div className="flex items-center space-x-2 p-2 rounded-lg">
      <span className="text-lg font-medium text-white">{label}</span>
      <motion.input
        type="text"
        value={value || ""}
        placeholder={value ? "" : placeholder} // Hides placeholder when typing
        className="flex-1 p-2 border border-white text-white bg-transparent rounded-lg outline-none placeholder-white "
        onChange={handleNumber}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      {type === "percentage" && <span className="text-white font-medium">%</span>}
      {type === "currency" && <span className="text-white font-medium"></span>}
    </div>
  );
};

export default InputBoxNum;
