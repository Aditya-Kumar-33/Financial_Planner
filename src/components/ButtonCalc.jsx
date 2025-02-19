import React, { useState } from "react";
import { motion } from "framer-motion";

const ButtonCalc = () => {
  const [selected, setSelected] = useState("Set Target");

  return (
    <div className="relative flex gap-2 bg-gray-200 p-2 rounded-[30px] w-[30%]">
      
      <div
        className="relative flex-1 cursor-pointer text-center"
        onClick={() => setSelected("Set Target")}
      >
        {selected === "Set Target" && (
          <motion.div
            layoutId="active"
            className="absolute inset-0 font-bold bg-blue-800 rounded-[30px]"
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
          />
        )}
        <button
          className={`relative font-bold z-10 px-4 py-2 w-full ${
            selected === "Set Target" ? "text-white" : "text-black"
          }`}
        >
          Set Target
        </button>
      </div>

      <div
        className="relative flex-1 cursor-pointer text-center"
        onClick={() => setSelected("Track Growth")}
      >
        {selected === "Track Growth" && (
          <motion.div
            layoutId="active"
            className="absolute inset-0 font-bold bg-blue-800 rounded-[30px]"
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
          />
        )}
        <button
          className={`relative font-bold z-10 px-4 py-2 w-full ${
            selected === "Track Growth" ? "text-white" : "text-black"
          }`}
        >
          Track Growth
        </button>
      </div>

    </div>
  );
};

export default ButtonCalc;
