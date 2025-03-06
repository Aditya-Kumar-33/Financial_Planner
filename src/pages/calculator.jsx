import React, { useState } from "react";
import DonutChart from "../components/DonutChart";
import ButtonWMY from "../components/ButtonWMY";
import ButtonCalc from "../components/ButtonCalc";
import InputBoxNum from "../components/InputBoxNum";
import InputDuration from "../components/InputDuration";
import InputInflation from "../components/InputPercentage";
import { calculateRequiredInvestment } from "../Functions/calculateTarget";
import { calculateInvestment } from "../Functions/calculateSIP";

const Calculator = () => {
  const [selectedTarget, setSelectedTarget] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState("monthly");

  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");
  const [inflation, setInflation] = useState("");

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
    <div className="h-[91%] grid grid-rows-[5%,95%] 
    bg-gradient-to-bl
from-[#1c1c1d]
via-[#13104e]
to-[#0f1a33] text-white">
      <div className="h-full w-full flex justify-center items-center gap-[30px]">
        <ButtonCalc selectedTarget={selectedTarget} setSelectedTarget={setSelectedTarget} />
      </div>

      <div className="h-full w-full flex gap-[4px] p-[30px] pt-[0px] items-center">
        <div className="w-1/2 h-full rounded-4xl flex flex-col items-center justify-evenly py-2">
          <ButtonWMY selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern} />
          <InputBoxNum 
            label={selectedTarget === 0 ? "Target Amount" : "Investment Amount"} 
            placeholder="₹ 0" 
            value={amount} 
            onChange={setAmount} 
          />
          <InputInflation label={"Return (p.a.)"} placeholder="0" value={interestRate} onChange={setInterestRate} />
          <InputDuration label="Duration" placeholder="0" value={duration} onChange={setDuration} />
          <InputInflation label="Inflation (p.a.)" placeholder="0" value={inflation} onChange={setInflation} />
          
          <button 
            onClick={handleCalculate} 
            type="button" 
            className="text-white w-[25%] bg-[#0466c8] hover:bg-[#023e7d] cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Calculate
          </button>
        </div>

        <div className="w-1/2 h-full bg-[#3d4143] rounded-[30px] flex flex-col justify-center items-center">
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
