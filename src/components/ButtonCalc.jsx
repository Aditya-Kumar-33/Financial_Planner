import React from "react";

const ButtonCalc = ({ selectedTarget, setSelectedTarget }) => {
  return (
    <div className="relative flex gap-2 bg-gray-200 p-2 rounded-[30px] w-[30%]">
      
      {/* Set Target Button */}
      <button
        onClick={() => setSelectedTarget("Set Target")}
        className={`flex-1 px-4 py-2 font-bold rounded-[30px] transition-all duration-300 
        ${selectedTarget === "Set Target" ? "bg-blue-800 text-white" : "bg-white text-black border border-blue-800"}`}
      >
        Set Target
      </button>

      {/* Track Growth Button */}
      <button
        onClick={() => setSelectedTarget("Track Growth")}
        className={`flex-1 px-4 py-2 font-bold rounded-[30px] transition-all duration-300 
        ${selectedTarget === "Track Growth" ? "bg-blue-800 text-white" : "bg-white text-black border border-blue-800"}`}
      >
        Track Growth
      </button>

    </div>
  );
};

export default ButtonCalc;
