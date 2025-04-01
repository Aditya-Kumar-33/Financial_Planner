import React from "react";
import { motion } from "framer-motion";

const ButtonPattern = ({ selectedPattern, setSelectedPattern }) => {
  const options = ["Daily", "Monthly", "Yearly"];

  return (
    <div className="relative flex gap-2 h-fit p-2 rounded-2xl bg-[#3d4143] w-fit">
      {options.map((option) => (
        <div
          key={option}
          className="relative flex-1 cursor-pointer text-center"
          onClick={() => setSelectedPattern(option)} // Keep original casing
        >
          {selectedPattern === option && (
            <motion.div
              layoutId="active"
              className="absolute inset-0 bg-[#85EFC4] rounded-2xl"
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            />
          )}
          <button
            className={`relative z-10 px-4 py-2 ${
              selectedPattern === option ? "text-black" : "text-white"
            }`}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonPattern;