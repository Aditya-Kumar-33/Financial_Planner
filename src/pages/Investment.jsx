import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] ">
        <div className="absolute h-[calc(15vh)] w-[calc(100vw)]">Navbar</div>

        <div className="absolute top-[calc(18vh)] left-[calc(2vh)] h-[calc(80vh)] w-[calc(18vw)] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
            This will show latest market trend and the returns
        </div>

        <div className="absolute top-[calc(15vh)] left-[calc(20vw)] h-[calc(25vh)] w-[calc(80vw)] grid grid-cols-3 px-6">
            <div className="flex justify-center items-center">
            <div className="h-[80%] w-[90%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
                <div>Total Invested</div>
                <div>₹2,50,000</div>
            </div>
            </div>
            <div className="flex justify-center items-center">
            <div className="h-[80%] w-[90%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
                Maturity sum
            </div>
            </div>
            <div className="flex justify-center items-center">
            <div className="h-[80%] w-[90%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
                To invest this month
            </div>
            </div>
        </div>

        <div className="absolute top-[calc(40vh)] left-[calc(20vw)]  w-[calc(80vw)] p-3 flex flex-col items-center gap-5">
            <div className="h-[150px] w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
                Investment 1
            </div>
            <div className="h-[150px] w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
                2
            </div>
            <div className="h-[150px] w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] text-white">
                2
            </div>

        </div>
    </div>
  );
};

export default Home;
