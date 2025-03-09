import React from "react";
import BackGround from "../components/BackGround";

const Home = () => {
  return (
    <div className="relative">
      <BackGround />
      <div className="absolute inset-0">
        <h1 className="text-white text-3xl font-bold">Finance Management Made Simple</h1>
        <h1 className="text-white text-3xl font-bold">
            Make better financial decisions with our expense tracker, investment planner, and cost calculator.
        </h1>
        <div className="w-1/4 h-1/4 rounded-2xl bg-gradient-to-b from-[#111125] to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;
