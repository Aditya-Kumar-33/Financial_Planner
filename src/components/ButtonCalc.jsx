import React from "react";

const ButtonCalc = ({ selectedTarget, setSelectedTarget }) => {
  return (
    <div className="relative flex gap-2 bg-[#3d4143] p-2.5 rounded-3xl w-[30%]">
      
      {/* Set Target Button */}
      <button
        onClick={() => setSelectedTarget(0)}
        className={`flex-1 px-4 py-2 font-bold rounded-2xl transition-all duration-300 
        ${selectedTarget === 0 ? "bg-[#85EFC4] text-black" : " text-white border"}`}
      >
        Set Target
      </button>

      {/* Track Growth Button */}
      <button
        onClick={() => setSelectedTarget(1)}
        className={`flex-1 px-4 py-2 font-bold rounded-2xl transition-all duration-300 
        ${selectedTarget === 1 ? "bg-blue-800 text-white" : " text-white border "}`}
      >
        Track Growth
      </button>

    </div>
  );
};

export default ButtonCalc;
