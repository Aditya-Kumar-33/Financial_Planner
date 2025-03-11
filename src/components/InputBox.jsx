import React from "react";
import { motion } from "framer-motion";

const InputBox = ({ label = "", placeholder = "", value, onChange, type = "text" }) => {
  const handleChange = (e) => {
    let val = e.target.value;

    if (type === "number") {
      val = val.replace(/[^0-9]/g, ""); // Allow only numbers
    } else if (type === "percentage") {
      val = Math.min(100, Math.max(0, Number(val.replace(/[^0-9]/g, "")))); // Restrict between 0-100
    } else if (type === "text") {
      val = val.replace(/[^a-zA-Z ]/g, ""); // Allow only letters and spaces
    }

    onChange(val);
  };

  return (
    <div className="flex flex-col space-y-1 p-2 rounded-lg">
      <label className="text-lg font-medium text-white">{label}</label>
      <motion.input
        type={type === "date" ? "date" : "text"}
        value={value || ""}
        placeholder={value ? "" : placeholder}
        className="p-2 border border-white text-white bg-transparent rounded-lg outline-none placeholder-white"
        onChange={handleChange}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      {type === "percentage" && <span className="text-white font-medium">%</span>}
    </div>
  );
};

export default InputBox;
