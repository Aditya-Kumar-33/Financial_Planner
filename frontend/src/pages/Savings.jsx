import React, { useState, useEffect } from "react";
import { Cross, Plus } from "lucide-react";
import ExpensesAdd from "../components/ExpensesAdd";
import SavingsModal from "../components/SavingsModal";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import ButtonPattern from "../components/Buttons/ButtonPattern";
import axios from "axios";
import DateSelector from "../components/DateSelector";
import TypeToggle from "../components/Buttons/TypeToggle";


const Savings = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Date pattern selection states
  const [pattern, setPattern] = useState("Daily");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Data states
  const [savings, setSavings] = useState([]); //complete list
  const [filteredSavings, setFilteredSavings] = useState([]); //pattern based list
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  const [selectedType, setSelectedType] = useState("Expense");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    // if (!user) return;
    axios.get("http://localhost:5000/savings", {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(response => setSavings(response.data))
    .catch(error => console.error("Error fetching savings:", error));
  }, []);


  // Filter data whenever pattern or date selection changes
  useEffect(() => {
    filterSavingsByPattern();
  }, [pattern, selectedDate, selectedMonth, selectedYear, savings]);

  // Calculate totals whenever filtered data changes
  useEffect(() => {
    calculateTotals();
  }, [filteredSavings]);


  // Filter savings based on selected pattern and date
  const filterSavingsByPattern = () => {

    if (!Array.isArray(savings) || !savings.length) {
      setFilteredSavings([]);
      return;
    }

    let filtered = [];
    
    if (pattern === "Daily") {
      filtered = savings.filter(saving => {
        const savingDate = new Date(saving.dateTime).toISOString().split("T")[0];
        return savingDate === selectedDate;
      });
    } else if (pattern === "Monthly") {
      filtered = savings.filter(saving => {
        const savingMonth = new Date(saving.dateTime).toISOString().slice(0, 7);
        return savingMonth === selectedMonth;
      });
    } else if (pattern === "Yearly") {
      filtered = savings.filter(saving => {
        const savingYear = new Date(saving.dateTime).getFullYear();
        return savingYear === parseInt(selectedYear);
      });
    }
    
    setFilteredSavings(filtered);
  };

  // Calculate income, expenses and balance
  const calculateTotals = () => {
    if (!Array.isArray(filteredSavings)) {
      setIncome(0);
      setExpenses(0);
      setBalance(0);
      return;
    }
    
    let totalIncome = 0;
    let totalExpenses = 0;
    
    filteredSavings.forEach(item => {
      if (item.type === "Income") {
        totalIncome += parseFloat(item.amount) || 0;
      } else if (item.type === "Expense") {
        totalExpenses += parseFloat(item.amount) || 0;
      }
    });
    
    setIncome(totalIncome);
    setExpenses(totalExpenses);
    setBalance(totalIncome - totalExpenses);
  };

  // Prepare data for the pie chart
  const getExpenseData = () => {
    if (!Array.isArray(filteredSavings) || !filteredSavings.length) return [];
    
    // Group expenses by category
    const expensesByCategory = {};
    
    filteredSavings.filter(item => item.type === "Expense").forEach(expense => {
      if (!expensesByCategory[expense.category]) {
        expensesByCategory[expense.category] = 0;
      }
      expensesByCategory[expense.category] += parseFloat(expense.amount) || 0;
    });
    
    // Convert to array format for the pie chart
    return Object.keys(expensesByCategory).map(category => ({
      name: category,
      value: expensesByCategory[category]
    }));
  };

  // Format date for display
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (error) {
      return "Invalid date";
    }
  };

  // Format time for display
  const formatTime = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      return "Invalid time";
    }
  };

  const expenseData = getExpenseData();
  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  // If user is not authenticated, show LoginRequired component
  if (!isAuthenticated) {
    return (
      <div className="w-screen h-screen bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318]">
        <LoginRequired />;
      </div>
    )  
  }

  return (
    <div
      className="min-h-screen flex 
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] 
    font-dm-sans"
    >
      <div className="h-[85%] w-[100%] mt-30 grid grid-cols-10">
        <div className="mt-[3vh] ml-[2vh] col-span-3
         text-white flex flex-col border-r border-white/30 pr-2 ">

          <div className="flex justify-center flex-col items-center gap-3"> 
            <ButtonPattern selectedPattern={pattern} setSelectedPattern={setPattern}/> 
            <DateSelector 
              pattern={pattern} 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate} 
              selectedMonth={selectedMonth} 
              setSelectedMonth={setSelectedMonth} 
              selectedYear={selectedYear} 
              setSelectedYear={setSelectedYear}
            />
            <TypeToggle selectedType={selectedType} 
              setSelectedType={setSelectedType} 
            />
          </div>
          <div className="w-full flex justify-center">
            {expenseData.length > 0 ? (
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
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-7">
          <div className="grid grid-cols-3 h-[120px] ">
          {[
              { label: "Income", value: `₹${income.toFixed(2)}`, color: "text-green-500" },
              { label: "Expenses", value: `₹${expenses.toFixed(2)}`, color: "text-red-500" },
              { label: "Net Balance", value: `₹${balance.toFixed(2)}`, color: "text-blue-500" },
            ].map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <div
                  className="h-[80%] w-[90%] rounded-2xl 
                  bg-gradient-to-b from-[#111125] to-transparent 
                  shadow-[0_-4px_10px_rgba(255,255,255,0.3)] 
                  flex flex-col justify-center items-center text-white/70 ">
                  <div className={`text-3xl font-manrope font-semibold ${item.color}`}>
                    {item.value}
                  </div>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col items-center gap-4">
            {/* Title Row */}
            <div className="items-center h-[50px] text-white/50 p-3 pb-0 w-[95%] grid grid-cols-5 gap-2">
              <div className="text-center gap-1"><div>Date/Time</div></div>
              <div className="text-center">Amount</div>
              <div className="text-center">Category</div>
              <div className="text-center"><div>Payment Method</div></div>
              <div className="text-center"><div>Note</div></div>
            </div>
            
            {Array.isArray(filteredSavings) && filteredSavings.length > 0 ? (
              filteredSavings.map((item, index) => ( 
                <div key={index} className="grid grid-cols-5 items-center text-white p-5 w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-102 hover:cursor-pointer">
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="text-xl pl-5">{formatDate(item.dateTime)}</div>
                    <div className="pl-5">{formatTime(item.dateTime)}</div>
                  </div>
                  <div className={`flex-1 text-center text-xl font-bold ${item.type === "Income" ? "text-green-400" : "text-red-400"}`}>
                    ₹{parseFloat(item.amount).toFixed(2)}
                  </div>
                  <div className="flex-1 flex flex-col text-center gap-1 text-md">
                    <div>{item.category}</div>
                    {item.subCategory && <div className="text-blue-400">{item.subCategory}</div>}
                  </div>
                  <div className="flex-1 flex flex-col gap-1 text-center text-md">
                    <div>{item.paymentMethod}</div>
                  </div>
                  <div className="flex-1 text-center text-lg">
                    {(item.description.slice(0, 15) + (item.description.length > 15 ? "..." : "") )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white/50 text-center py-8">
                No transactions found for the selected period
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Button and Modal for Adding Expenses */}
      <button
        className="fixed bottom-10 right-16 bg-[#85EFC4] text-black p-2 rounded-full shadow-lg hover:bg-[#62be99] hover:cursor-pointer transition duration-300 flex items-center justify-center"
        onClick={() => setIsAddModalOpen(true)}
      >
        <Plus size={35}/>
      </button>

      {/* Modal containing ExpensesAdd */}
      <SavingsModal open={isAddModalOpen} setOpen={setIsAddModalOpen}/>
    </div>
  );
};

export default Savings;
