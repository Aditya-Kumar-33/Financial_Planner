import React, { useState } from "react";
import DonutChart from "../components/DonutChart";
import ButtonWMY from "../components/ButtonWMY";
import ButtonCalc from "../components/ButtonCalc";
import InputBoxNum from "../components/InputBoxNum";
import InputBoxPercentage from "../components/InputBoxPercentage";
import InputDuration from "../components/InputDuration";
import InputInflation from "../components/InputInflation";
import { calculateRequiredInvestment } from "../Functions/calculateRequiredInvestment";
import { calculateInvestment } from "../Functions/CalculateInvestment";

const Calculator = () => {
  const [selectedTarget, setSelectedTarget] = useState("Set Target");
  const [selectedPattern, setSelectedPattern] = useState("monthly");

  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");
  const [inflation, setInflation] = useState("");

  const [investmentResult, setInvestmentResult] = useState({
    principalInvested: 0,
    returnsEarned: 0,
    finalAmount: 0,
  });

  const handleCalculate = () => {
    console.log("Button clicked");
    console.log("Selected Target:", selectedTarget);
    console.log("Selected Pattern:", selectedPattern);
    console.log("Amount:", amount);
    console.log("Interest Rate:", interestRate);
    console.log("Duration:", duration);
    console.log("Inflation:", inflation);

    const params = {
      pattern: selectedPattern,
      stepUpPercentage: 0,
      inflationRate: Number(inflation) || 0,
      returnRate: Number(interestRate) || 0,
      years: Number(duration) || 0,
    };

    let result;
    if (selectedTarget === "Set Target") {
      result = calculateRequiredInvestment({
        ...params,
        targetAmount: Number(amount) || 0,
      });
    } else {
      result = calculateInvestment({
        ...params,
        initialInvestment: Number(amount) || 0,
      });
    }

    console.log("Calculation Result:", result);

    setInvestmentResult({
      principalInvested: Number(result?.totalPrincipalInvested) || 0,
      returnsEarned: Number(result?.returnsEarned) || 0,
      finalAmount:
        (Number(result?.totalPrincipalInvested) || 0) +
        (Number(result?.returnsEarned) || 0),
    });
  };

  return (
    <div className="h-screen w-screen grid grid-rows-[5%,95%]">
      <div className="h-full w-full bg-white flex justify-center items-center gap-[30px]">
        <ButtonCalc
          selectedTarget={selectedTarget}
          setSelectedTarget={setSelectedTarget}
        />
      </div>

      <div className="h-full w-full bg-white flex gap-[4px] p-[30px] pt-[0px] items-center">
      <div className="w-1/2 h-full rounded-4xl flex flex-col items-center justify-evenly py-2">
          <ButtonWMY
            selectedPattern={selectedPattern}
            setSelectedPattern={setSelectedPattern}
          />
          <InputBoxNum label={"Amount"} placeholder="₹ 0" value={amount} onChange={setAmount} />
          <InputBoxPercentage label={"Interest Rate"} placeholder="0" value={interestRate} onChange={setInterestRate} />
          <InputDuration label="Duration" placeholder="0" value={duration} onChange={setDuration} />
          <InputInflation label="Inflation Percentage" placeholder="0" value={inflation} onChange={setInflation} />
          
          <button 
            onClick={handleCalculate} 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Calculate Now
          </button>
        </div>

        <div className="w-1/2 h-full bg-gray-200 rounded-[30px] border-[0.01px] border-gray-300 border-opacity-10 flex justify-center items-center">
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
