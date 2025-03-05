import React from "react";

const ButtonCalc = ({ selectedTarget, setSelectedTarget }) => {
  return (
    <div className="relative flex gap-2 bg-[#cbf3f0] p-2.5 rounded-3xl w-[30%]">
      
      {/* Set Target Button */}
      <button
        onClick={() => setSelectedTarget(0)}
        className={`flex-1 px-4 py-2 font-bold rounded-2xl transition-all duration-300 
        ${selectedTarget === 0 ? "bg-blue-800 text-white" : "bg-white text-black border border-blue-800"}`}
      >
        Set Target
      </button>

      {/* Track Growth Button */}
      <button
        onClick={() => setSelectedTarget(1)}
        className={`flex-1 px-4 py-2 font-bold rounded-2xl transition-all duration-300 
        ${selectedTarget === 1 ? "bg-blue-800 text-white" : "bg-white text-black border border-blue-800"}`}
      >
        Track Growth
      </button>

    </div>
  );
};

export default ButtonCalc;
