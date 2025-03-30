import React from "react";
import { motion } from "framer-motion";

const ButtonFuel = ({ selectedPattern, setSelectedPattern }) => {
  const options = ["Petrol", "Diesel", "Electric"]; // Keep consistent case

  return (
    <div className="relative flex gap-5 h-fit p-1 
    rounded-md bg-[#030318] shadow-[0_5px_20px_rgba(255,255,255,0.1)] w-fit">
      {options.map((option) => (
        <div
          key={option}
          className="relative flex-1 cursor-pointer text-center"
          onClick={() => setSelectedPattern(option)} // Remove `.toLowerCase()`
        >
          {selectedPattern === option && (
            <motion.div
              layoutId="active"
              className="absolute inset-0 bg-[#24263C] rounded-md"
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            />
          )}
          <button
            className={`relative z-10 px-4 py-2 ${
              selectedPattern === option ? "" : "text-white"
            }`}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonFuel;
