import React from "react";
import InputBox from "./InputBox";

export default function ExpensesAdd({ 
  date, setDate, 
  day, setDay, 
  type, setType, 
  subtype, setSubtype, 
  form, setForm, 
  amount, setAmount, 
  time, setTime 
}) {
  return (
    <div className="p-5 text-white rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Add Expense</h1>
      <div className="grid grid-cols-2 gap-5">
        <InputBox type="date" label="Date" value={date} onChange={setDate} />
        <InputBox type="text" label="Day" placeholder="e.g., Friday" value={day} onChange={setDay} />
        <InputBox type="text" label="Type" placeholder="e.g., Food, Travel" value={type} onChange={setType} />
        <InputBox type="text" label="Subtype" placeholder="e.g., Metro, Street Food" value={subtype} onChange={setSubtype} />
        <InputBox type="text" label="Payment Method" placeholder="e.g., Cash, UPI" value={form} onChange={setForm} />
        <InputBox type="number" label="Amount" placeholder="₹ 0" value={amount} onChange={setAmount} />
        <InputBox type="time" label="Time" value={time} onChange={setTime} />
      </div>
    </div>
  );
}
