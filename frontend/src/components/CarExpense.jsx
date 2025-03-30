import React from "react";

export default function CarExpense() {
  const expenses = [
    { label: "One-Time Costs", value: "₹2,50,000", color: "text-green-500" },
    { label: "Loan EMI", value: "₹10,000" },
    { label: "Fuel Cost", value: "₹12,500" },
    { label: "Insurance Renewal", value: "₹1,000" },
    { label: "Servicing & Maintenance", value: "₹1,500" },
    { label: "Total Monthly Expense", value: "₹26,100", color: "text-blue-600" },
  ];

  return (
    <div className="grid grid-cols-6 text-white h-full gap-1 p-4">
      {expenses.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <div
            className="h-[80%] w-[90%] rounded-2xl 
                bg-gradient-to-b from-[#111125] to-transparent 
                shadow-[0_-4px_10px_rgba(255,255,255,0.3)] 
                flex flex-col justify-center items-center text-white/70 p-4"
          >
            <div className={`text-3xl ${item.color || "text-white"}`}>
              {item.value}
            </div>
            <div className="text-sm text-center">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
