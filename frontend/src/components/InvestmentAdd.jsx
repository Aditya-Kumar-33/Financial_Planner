import React, { useState } from "react";
import InputBox from "./InputBox";

export default function InvestmentAdd({
  name,
  setName,
  type,
  setType,
  institution,
  setInstitution,
  invested,
  setInvested,
  startDate,
  setStartDate,
  maturityDate,
  setMaturityDate,
  interestRate,
  setInterestRate,
  compoundingType,
  setCompoundingType,
  sip,
  setSip,
  onSave,
  isEdit = false,
}) {
  // Define all major investment types
  const investmentTypes = [
    "Mutual Fund",
    "Stocks",
    "Bonds",
    "Real Estate",
    "Fixed Deposit",
    "Gold",
    "Provident Fund",
    "SIP",
    "Others",
  ];

  const compoundingTypes = ["Weekly", "Monthly", "Yearly"];

  const handleSave = () => {
    const data = {
      name, type, institution,
      invested, startDate, maturityDate,
      interestRate, compoundingType, sip,
    };
    onSave(data);
  };

  return (
    <div className="p-5 text-white rounded-lg flex flex-col items-center">
      <h1 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Investment" : "Add Your Investment"}
      </h1>
      <div className="grid grid-cols-3 gap-5 w-full">
      <InputBox
          type="text"
          label="Investment Name"
          placeholder="Enter name"
          value={name}
          onChange={setName}
        />
        <InputBox
          type="dropdown"
          label="Investment Type"
          value={type}
          onChange={setType}
          options={investmentTypes}
        />
        <InputBox
          type="text"
          label="Institution"
          placeholder="Enter Name of Institution"
          value={institution}
          onChange={setInstitution}
        />
        <InputBox
          type="currency"
          label="Invested Amount"
          placeholder="₹ 0"
          value={invested}
          onChange={setInvested}
        />
        <InputBox
          type="date"
          label="Start Date"
          value={startDate}
          onChange={setStartDate}
        />
        <InputBox
          type="date"
          label="Maturity Date"
          value={maturityDate}
          onChange={setMaturityDate}
        />
        <InputBox
          type="percentage"
          label="Interest Rate % (p.a.)"
          placeholder="0"
          value={interestRate}
          onChange={setInterestRate}
        />
        <InputBox
          type="dropdown"
          label="Compounding Type"
          placeholder="Monthly"
          value={compoundingType}
          onChange={setCompoundingType}
          options={compoundingTypes}
        />
        <InputBox
          type="currency"
          label="SIP Amount"
          placeholder="₹ 0"
          value={sip}
          onChange={setSip}
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg hover:cursor-pointer hover:scale-105 duration-300 transition"
      >
        {isEdit ? "Update Investment" : "Save Investment"}
      </button>
    </div>
  );
}
