import React, { useState } from "react";
import DonutChart from "../components/DonutChart";
import ButtonWMY from "../components/ButtonWMY";
import ButtonCalc from "../components/ButtonCalc";
import InputBoxNum from "../components/InputBoxNum";
import { calculateRequiredInvestment } from "../Functions/calculateTarget";
import { calculateInvestment } from "../Functions/calculateSIP";

const Calculator = () => {
  const [selectedTarget, setSelectedTarget] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState("monthly");

  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [inflation, setInflation] = useState(0);
  const [investmentResult, setInvestmentResult] = useState({
    principalInvested: 0,
    returnsEarned: 0,
    finalAmount: 0,
    actualTotalInvested: 0, // New field for actual investment
  });

  const handleCalculate = () => {
    const params = {
      pattern: selectedPattern,
      stepUpPercentage: 0,
      inflationRate: Number(inflation) || 0,
      returnRate: Number(interestRate) || 0,
      duration: Number(duration) || 0,
    };

    let result;
    if (selectedTarget === 0) {
      result = calculateRequiredInvestment({
        ...params,
        targetAmount: Number(amount) || 0,
      });
    } else {
      result = calculateInvestment({
        ...params,
        repeatingInvestment: Number(amount) || 0,
      });
    }

    setInvestmentResult({
      principalInvested: Number(result?.totalInvested) || 0,
      returnsEarned: Number(result?.returns) || 0,
      finalAmount: Number(result?.totalAmount) || 0,
      actualTotalInvested: Number(result?.actualTotalInvested) || 0,
    });
  };

  return (
    <div className="w-full h-screen pt-20 grid grid-rows-[5%,95%] 
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] text-white font-dm-sans">
      <div className="h-full w-full flex justify-center pt-7 items-center gap-[30px]">
        <ButtonCalc selectedTarget={selectedTarget} setSelectedTarget={setSelectedTarget} />
      </div>

      <div className="h-full w-full flex gap-[20px] p-[30px] pt-[20px] items-center">
        <div className="w-1/2 h-full rounded-4xl flex flex-col items-center justify-evenly py-2">
          <ButtonWMY selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern} />
          
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 pr-10">
            <InputBoxNum 
              label={selectedTarget === 0 ? "Target Amount" : "Principal"} 
              placeholder="₹ 0" 
              value={amount} 
              onChange={setAmount} 
              type="currency"
            />
            <InputBoxNum 
              label={"Duration"} 
              placeholder="0" 
              value={duration} 
              onChange={setDuration} 
              type="default" 
            />

            <InputBoxNum 
              label={"Return (p.a.)"} 
              placeholder="0" 
              value={interestRate} 
              onChange={setInterestRate} 
              type="percentage"
            />
            <InputBoxNum 
              label={"Inflation (p.a.)"} 
              placeholder="0" 
              value={inflation} 
              onChange={setInflation} 
              type="percentage"
            />
          </div>
          <button 
            onClick={handleCalculate} 
            type="button" 
            className="text-black font-bold w-[25%] bg-[#85EFC4] hover:bg-[#6cbf9e] cursor-pointer rounded-xl text-sm px-5 py-2.5 me-2 mb-2"
          >
            Calculate
          </button>
        </div>

        <div className="w-1/2 h-full rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold text-white mb-4">
            {selectedTarget === 0 ? "Monthly SIP needed" : "Total Invested Amount"}: ₹ {investmentResult.actualTotalInvested.toFixed(2)}
          </h2>
          <DonutChart
            principal={investmentResult.principalInvested}
            returns={investmentResult.returnsEarned}
            total={investmentResult.finalAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
