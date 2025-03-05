import React from "react";
import { motion } from "framer-motion";

const ButtonWMY = ({ selectedPattern, setSelectedPattern }) => {
  const options = ["Weekly", "Monthly", "Yearly"];

  return (
    <div className="relative flex gap-2 h-fit p-2 rounded-2xl bg-[#232526] w-fit">
      {options.map((option) => (
        <div
          key={option}
          className="relative flex-1 cursor-pointer text-center"
          onClick={() => setSelectedPattern(option.toLowerCase())} // Convert to lowercase for consistency
        >
          {selectedPattern === option.toLowerCase() && (
            <motion.div
              layoutId="active"
              className="absolute inset-0 bg-yellow-500 rounded-2xl"
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            />
          )}
          <button
            className={`relative z-10 px-4 py-2 ${
              selectedPattern === option.toLowerCase() ? "text-white" : "text-white"
            }`}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonWMY;
