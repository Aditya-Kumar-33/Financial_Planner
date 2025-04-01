import React from "react";

const BackGround = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : null;

  return (
    <div>
      {/* gradient background */}
      <div className="relative w-full h-screen bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] overflow-hidden">
        
        {/* Gradient Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-white opacity-5 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full bg-white opacity-10 blur-2xl"></div>
        </div>

        {/* Small Circle and Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[25px] flex flex-col items-center">
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>
            <div className="w-[2px] h-[calc(50vh-25px)] bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
        </div>
      </div>

      {/* Second section with solid background */}
      <div className="relative w-full h-screen bg-[#030318] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25px] flex flex-col items-center">
            <div className="w-[2px] h-[calc(50vh-25px)] bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>
            
        </div>
        
      </div>
    </div>
  );
};

export default BackGround;
