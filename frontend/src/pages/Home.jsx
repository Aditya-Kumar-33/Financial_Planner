import React from "react";
import BackGround from "../components/BackGround";
import InvestmentComponent from "../components/Home/InvestmentComponent";
import FinanceManagement from "../components/HomeInfo";

const Home = () => {
  return (
    <div className="relative h-fit ">
      <BackGround />

      {/* Container over bg */}
      <div className="absolute inset-0 flex flex-col h-[200vh]">
        <FinanceManagement/>
      </div>
    </div>
  );
};

export default Home;

{/* <div className="flex flex-col items-center text-center space-y-6 mt-[25vh] font-dm-sans">
<h1 className="text-white text-5xl font-bold font-grotesk">
  Finance Management Made Simple & Smarter
</h1>
<h1 className="text-white text-3xl font-semibold font-manrope">
  Make better financial decisions with our expense tracker, investment planner and cost calculator
</h1>
</div>


<div className="relative h-full w-full">
  <div className="absolute right-[10%] top-[10%] w-1/3 h-1/4 rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
      
  </div>
  <div className="absolute left-[10%] top-[25%] w-1/3 h-1/4 rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
      
  </div>
  <div className="absolute right-[10%] top-[40%] w-1/3 h-1/4 rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
      
  </div>
  <div className="absolute left-[10%] top-[55%] w-1/3 h-1/4 rounded-2xl 
  bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
      
  </div>

</div> */}