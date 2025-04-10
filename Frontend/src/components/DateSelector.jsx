import React from "react";

const DateSelector = ({ pattern, selectedDate, setSelectedDate, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear }) => {
  return (
    <div className="flex ml-4 items-center">
      {/* Daily Selection */}
      {pattern === "Daily" && (
        <div className="flex items-center">
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-[#111125] text-white border border-white/30 rounded-2xl w-44 h-12 px-2 py-1 text-xl font-bold font-grotesk"
          />
        </div>
      )}

      {/* Monthly Selection */}
      {pattern === "Monthly" && (
        <div className="flex items-center">
          <input 
            type="month" 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-[#111125] text-white border border-white/30 rounded-2xl w-44 h-12 px-2 py-1 text-xl font-bold font-grotesk"
          />
        </div>
      )}

      {/* Yearly Selection */}
      {pattern === "Yearly" && (
        <div className="flex items-center">
          <input
            type="number"
            min="2000"
            max="2100"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="bg-[#111125] text-white border border-white/30 rounded-2xl w-44 h-12 px-2 py-1 text-xl font-bold font-grotesk"
          />
        </div>
      )}
    </div>
  );
};

export default DateSelector;