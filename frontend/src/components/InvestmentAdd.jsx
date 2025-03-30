import React from "react";
import InputBox from "./InputBox";

export default function InvestmentAdd({ 
  name, setName, 
  type, setType, 
  institution, setInstitution, 
  invested, setInvested, 
  startDate, setStartDate, 
  maturityDate, setMaturityDate, 
  interestRate, setInterestRate, 
  compoundingType, setCompoundingType, 
  sip, setSip 
}) {

  return (
    <div className="p-5 text-white rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Add your investment</h1>
      <div className="grid grid-cols-3 gap-5">
        <InputBox type="text" label="Investment Name" placeholder="Enter name" value={name} onChange={setName} />
        <InputBox type="text" label="Investment Type" placeholder="e.g., Mutual Fund" value={type} onChange={setType} />
        <InputBox type="text" label="Institution" placeholder="e.g., SBI" value={institution} onChange={setInstitution} />
        <InputBox type="currency" label="Invested Amount" placeholder="₹ 0" value={invested} onChange={setInvested} />
        <InputBox type="date" label="Start Date" value={startDate} onChange={setStartDate} />
        <InputBox type="date" label="Maturity Date" value={maturityDate} onChange={setMaturityDate} />
        <InputBox type="percentage" label="Interest Rate (p.a.)" placeholder="0" value={interestRate} onChange={setInterestRate} />
        <InputBox type="text" label="Compounding Type" placeholder="e.g., Monthly" value={compoundingType} onChange={setCompoundingType} />
        <InputBox type="currency" label="SIP Amount" placeholder="₹ 0" value={sip} onChange={setSip} />
      </div>
    </div>
  );
}
