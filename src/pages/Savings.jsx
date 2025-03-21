import React, { useState } from "react";
import { Plus } from "lucide-react";
import ExpensesAdd from "../components/ExpensesAdd";
import Modal from"../components/Modal";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const Savings = () => {

  // Define all necessary states
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [type, setType] = useState("");
  const [subtype, setSubtype] = useState("");
  const [form, setForm] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  

  const expensesInfor = [
    {
      Date: "21st March 2025",
      Day: "Friday",
      Type: "Travel",
      Subtype: 'Metro',
      Form: "UPI",
      Amount:'200',
      Time: "10:30 AM"  
    },
    {
      Date: "21st March 2025",
      Day: "Friday",
      Type: "Food",
      Subtype: 'Street',
      Form: "Cash",
      Amount:"710",
      Time: "01:15 M" 
    },
    {
      Date: "21st March 2025",
      Day: "Friday",
      Type: "Travel",
      Subtype: 'Metro',
      Form: "UPI",
      Amount:'200',
      Time: "10:30 AM"  
    },
    {
      Date: "21st March 2025",
      Day: "Friday",
      Type: "Food",
      Subtype: 'Street',
      Form: "Cash",
      Amount:"710",
      Time: "01:15 M" 
    },
    {
      Date: "19st March 2025",
      Day: "Wednesday",
      Type: "Miscellaneous",
      Subtype: 'Charity',
      Form: "UPI",
      Amount:'100',
      Time: "10:30 AM"  
    },
  ];
  const [income, setIncome] = useState(250000);
  const expenses = expensesInfor.reduce((sum, item) => sum + parseInt(item.Amount), 0);
  const total = income - expenses;
  const [isAddModalOpen,setIsAddModalOpen] = useState(false);

  const getExpenseData = () => {
    const expenseMap = {};
  
    expensesInfor.forEach(expense => {
      if (expenseMap[expense.Type]) {
        expenseMap[expense.Type] += parseInt(expense.Amount);
      } else {
        expenseMap[expense.Type] = parseInt(expense.Amount);
      }
    });
  
    return Object.keys(expenseMap).map((key) => ({
      name: key,
      value: expenseMap[key]
    }));
  };
  
  const expenseData = getExpenseData();
  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  return (
    <div className="min-h-screen flex 
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] 
    font-dm-sans">

      <div className="h-[85%] w-[100%] mt-30 grid grid-cols-10">
        <div className="mt-[3vh] ml-[2vh] col-span-3
         text-white flex flex-col gap-5 border-r border-white/30 pr-2">
          {/* Table for Nifty 50, Gold, and SGB */}
          {/* <table className="w-full border-collapse">
            <tbody>
              {[
                ["Nifty 50", "₹22,000", "+0.5%(+350)"],
                ["Gold", "₹65,000", "-0.2%(-170)"],
                ["SGB Price", "₹5,500", "+0.1%(+100)"],
                ["Silver", "₹74,500", "+0.3%(+220)"],
                ["REIT Index", "₹320", "+0.8%(+25)"],
              ].map(([name, price, change], index) => (
                <tr key={index} className="border-b border-white/30 last:border-b-0">
                  <td className="p-2 text-sm">{name}</td>
                  <td className="p-2 text-sm text-right">{price}</td>
                  <td className={`p-2 text-sm text-right ${change.includes('-') ? 'text-red-400' : 'text-green-400'}`}>{change}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {/* Pie Chart */}
  <div className="w-full flex justify-center">
    <PieChart width={350} height={350}>
      <Pie
        data={expenseData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {expenseData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
          
          {/* Table for PPF, FD, and 10Y G-Sec */}
          {/* <table className="w-full border-collapse">
            <tbody>
              {[
                ["PPF Rate", "7.1%"],
                ["FD Rate", "6.5%"],
                ["10Y G-Sec", "7.2%"],
                ["EPF Rate", "8.1%"],
              ].map(([name, interest], index) => (
                <tr key={index} className="border-b border-white/30 last:border-b-0">
                  <td className="p-2 text-sm">{name}</td>
                  <td className="p-2 text-sm text-right">{interest}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>

        <div className="col-span-7">
          <div className="grid grid-cols-3 px-6 h-[150px]">
          {[
  { label: "Income", value: `₹${income}` },
  { label: "Expenses", value: `₹${expenses}` },
  { label: "Total", value: `₹${total}` },
].map((item, index) => (
  <div key={index} className="flex justify-center items-center">
    <div className="h-[80%] w-[90%] rounded-2xl 
      bg-gradient-to-b from-[#111125] to-transparent 
      shadow-[0_-4px_10px_rgba(255,255,255,0.3)] 
      flex flex-col justify-center items-center text-white/70">
      <div className={`text-3xl ${item.label === "Total" && total < 0 ? "text-red-400" : ""}`}>
        {item.value}
      </div>
      <div>{item.label}</div>
    </div>
  </div>
))}
          </div>

          <div className="w-full p-3 flex flex-col items-center gap-5">
            {/* Title Row */}
            <div className="flex items-center h-[50px] text-white/50 p-3 w-[95%] font-semibold">
              <div className="flex-1 text-center gap-1"><div>Date</div><div>Day</div></div>
              <div className="flex-1 flex flex-col text-center"><div>Type</div> <div>Sub-Type</div></div>
              <div className="flex-1 flex flex-col text-center"><div>Form</div><div>Time</div></div>
              <div className="flex-1 text-center">Amount</div>
              {/* <div className="flex-1 text-center">Compounding</div>
              <div className="flex-1 text-center">SIP</div> */}
            </div>
            
            {expensesInfor.map((expense, index) => ( 
  <div key={index} className="flex items-center text-white p-5 w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-102 hover:cursor-pointer">
    <div className="flex-1 flex flex-col gap-1">
      <div className="text-xl pl-5">{expense.Date}</div>
      <div className="pl-5">{expense.Day}</div>
    </div>
    <div className="flex-1 flex flex-col gap-1 text-center text-sm">
      <div>{expense.Type}</div>
      <div className="text-green-400">{expense.Subtype}</div>
    </div>
    <div className="flex-1 flex flex-col text-center gap-1 text-sm">
      <div>{expense.Form}</div>
      <div>{expense.Time || "N/A"}</div>
    </div>
    <div className="flex-1 text-center text-blue-400 text-sm">₹{expense.Amount}</div>
  </div>
))}

            {/* {investments.map((investment, index) => (
              <div key={index} className="flex items-center text-white p-5 w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-102 hover:cursor-pointer">
                <div className="flex-1 flex flex-col gap-1">
                  <div className="text-xl pl-5">{investment.name}</div>
                  <div className="pl-5">{investment.type}</div>
                </div>
                <div className="flex-1 flex flex-col gap-1 text-center text-sm">
                  <div>₹{investment.investedAmount}</div>
                  <div className="text-green-400">₹{investment.maturityValue}</div>
                </div>
                <div className="flex-1 flex flex-col text-center gap-1 text-sm">
                  <div>{investment.startDate}</div>
                  <div>{investment.maturityDate}</div>
                </div>
                <div className="flex-1 text-center text-sm">{investment.interestRate}%</div>
                <div className="flex-1 text-center text-sm">{investment.compounding}</div>
                <div className="flex-1 text-center text-blue-400 text-sm">₹{investment.sip}</div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      {/* Floating Button and Modal for Adding Expenses */}
      <button
        className="fixed bottom-10 right-16 bg-[#85EFC4] text-black p-4 rounded-full shadow-lg hover:bg-[#62be99] hover:cursor-pointer transition duration-300 flex items-center justify-center"
        onClick={() => setIsAddModalOpen(true)}
      >
        + Add Expense
      </button>

      {/* Modal containing ExpensesAdd */}
      <Modal open={isAddModalOpen} setOpen={setIsAddModalOpen}>
        <ExpensesAdd
          date={date} setDate={setDate}
          day={day} setDay={setDay}
          type={type} setType={setType}
          subtype={subtype} setSubtype={setSubtype}
          form={form} setForm={setForm}
          amount={amount} setAmount={setAmount}
          time={time} setTime={setTime}
        />
      </Modal>
    </div>
  );
};

export default Savings;