import React, { useState } from "react";
import { motion } from "framer-motion";

const InputBox = ({
  label = "",
  placeholder = "",
  value,
  onChange,
  type = "text",
  options = [],
}) => {
  const [isCustom, setIsCustom] = useState(false);

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
      {type === "dropdown" && !isCustom ? (
        <>
          <select
            value={value || ""}
            onChange={(e) => {
              if (e.target.value === "custom") {
                setIsCustom(true);
                onChange("");
              } else {
                onChange(e.target.value);
              }
            }}
            className="p-2 border border-white text-white bg-transparent rounded-lg outline-none"
          >
            <option className="bg-[#030318]" value="" disabled>Select an option</option>
            {options.map((opt, idx) => (
              <option className="text-white bg-[#030318]" key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      ) : (
        <motion.input
          type={type === "date" ? "date" : "text"}
          value={value || ""}
          placeholder={value ? "" : placeholder}
          className={`p-2 border border-white ${(type === "date") ? "bg-white text-black" : "bg-transparent text-white"} rounded-lg outline-none placeholder-white`}
          onChange={handleChange}
          initial={{ scale: 1 }}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      )}
    </div>
  );
};

export default InputBox;
