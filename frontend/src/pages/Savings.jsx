import React, { useState } from "react";
import { Plus } from "lucide-react";
import ExpensesAdd from "../components/ExpensesAdd";
import Modal from"../components/Modal";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import ButtonWMY from "../components/ButtonWMY"
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
         text-white flex flex-col border-r border-white/30 pr-2">
          <div className="flex justify-center"> <ButtonWMY/> </div>
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
        </div>

        <div className="col-span-7">

          <div className="grid grid-cols-3 h-[120px]">
          {[
              { label: "Income", value: `₹${income}` , color: "text-green-500" },
              { label: "Expenses", value: `₹${expenses}` , color: "text-red-500" },
              { label: "Total", value: `₹${total}` , color: "text-white" },
            ].map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="h-[80%] w-[90%] rounded-2xl 
                  bg-gradient-to-b from-[#111125] to-transparent 
                  shadow-[0_-4px_10px_rgba(255,255,255,0.3)] 
                  flex flex-col justify-center items-center text-white/70">
                  <div className={`text-3xl ${item.color}`}>
                    {item.value}
                  </div>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            {/* Title Row */}
            <div className="flex items-center h-[50px] text-white/50 p-3 pb-0 w-[95%]">
              <div className="flex-1 text-center gap-1"><div>Date/Day</div></div>
              <div className="flex-1 text-center">Amount</div>
              <div className="flex-1 flex flex-col text-center"><div>Category</div></div>
              <div className="flex-1 flex flex-col text-center"><div>Form</div></div>
            </div>
            
            {expensesInfor.map((expense, index) => ( 
              <div key={index} className="flex  items-center text-white p-5 w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-102 hover:cursor-pointer">
                <div className="flex-1 flex flex-col gap-1">
                  <div className="text-xl pl-5">{expense.Date}</div>
                  <div className="pl-5">{expense.Day}</div>
                </div>
                <div className="flex-1 text-center text-blue-400 text-xl font-bold">₹{expense.Amount}</div>
                <div className="flex-1 flex flex-col gap-1 text-center text-md">
                  <div>{expense.Type}</div>
                  <div className="text-green-400">{expense.Subtype}</div>
                </div>
                <div className="flex-1 flex flex-col text-center gap-1 text-md">
                  <div>{expense.Form}</div>
                  <div>{expense.Time || "N/A"}</div>
                </div>
              </div>
            ))}

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