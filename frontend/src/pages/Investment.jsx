import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import InvestmentAdd from "../components/InvestmentAdd";
import Modal from "../components/Modal";
import LoginRequired from "../components/LoginRequired";

const Investment = () => {
  // State to manage all input values
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [institution, setInstitution] = useState("");
  const [invested, setInvested] = useState(0);
  const [maturity, setMaturity] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [maturityDate, setMaturityDate] = useState(new Date());
  const [interestRate, setInterestRate] = useState(0);
  const [compoundingType, setCompoundingType] = useState("");
  const [sip, setSip] = useState(0);

  // Initial investments
  const [investments, setInvestments] = useState([
    {
      name: "Equity Fund A",
      type: "Mutual Fund",
      invested: "50,000",
      maturityValue: "75,000",
      interestRate: "12",
      compoundingType: "Yearly",
      sip: "5,000",
      startDate: "01-01-2020",
      maturityDate: "01-01-2025",
    },
    {
      name: "Debt Fund B",
      type: "Bond",
      invested: "1,00,000",
      maturityValue: "1,40,000",
      interestRate: "8",
      compoundingType: "Half-Yearly",
      sip: "4,000",
      startDate: "01-06-2019",
      maturityDate: "01-06-2024",
    },
  ]);

  // Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Function to add a new investment to the list
  const addInvestment = (newInvestment) => {
    setInvestments([...investments, newInvestment]);
    setIsAddModalOpen(false);
  };

  // Simulate authentication (replace with real auth check logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication (replace this with your actual logic)
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    setIsAuthenticated(userLoggedIn === "true");
  }, []);

  // open modal to add new
  const handleAddClick = () => {
    setEditIndex(null);
    setName(""); setType(""); setInstitution("");
    setInvested(0); setStartDate(""); setMaturityDate("");
    setInterestRate(0); setCompoundingType(""); setSip(0);
    setIsAddModalOpen(true);
  };

   // open modal to edit existing
  const handleCardClick = (idx) => {
    const inv = investments[idx];
    setEditIndex(idx);
    setName(inv.name);
    setType(inv.type);
    setInstitution(inv.institution);
    setInvested(inv.invested);
    setStartDate(inv.startDate);
    setMaturityDate(inv.maturityDate);
    setInterestRate(inv.interestRate);
    setCompoundingType(inv.compoundingType);
    setSip(inv.sip);
    setIsAddModalOpen(true);
  };

  // called by modal onSave
  const handleSave = (data) => {
    if (editIndex === null) {
      // add
      setInvestments([...investments, data]);
    } else {
      // update
      const copy = [...investments];
      copy[editIndex] = data;
      setInvestments(copy);
    }
    setIsAddModalOpen(false);
  };

  // If user is not authenticated, show LoginRequired component
  // if (!isAuthenticated) {
  //   return (
  //     <div className="w-screen h-screen bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318]">
  //       <LoginRequired />;
  //     </div>
  //   )  
  // }

  return (
    <div
      className="min-h-screen flex 
    bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] 
    font-dm-sans"
    >
      <div className="h-[85%] w-[100%] mt-30 grid grid-cols-5">
        {/* Sidebar Section */}
        <div
          className="mt-[3vh] ml-[2vh] col-span-1
         text-white flex flex-col gap-5 border-r border-white/30 pr-2"
        >
          {/* Table for Nifty 50, Gold, and SGB */}
          <table className="w-full border-collapse">
            <tbody>
              {[
                ["Nifty 50", "₹22,000", "+0.5%(+350)"],
                ["Gold", "₹65,000", "-0.2%(-170)"],
                ["SGB Price", "₹5,500", "+0.1%(+100)"],
                ["Silver", "₹74,500", "+0.3%(+220)"],
                ["REIT Index", "₹320", "+0.8%(+25)"],
              ].map(([name, price, change], index) => (
                <tr
                  key={index}
                  className="border-b border-white/30 last:border-b-0"
                >
                  <td className="p-2 text-sm">{name}</td>
                  <td className="p-2 text-sm text-right">{price}</td>
                  <td
                    className={`p-2 text-sm text-right ${
                      change.includes("-")
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Table for PPF, FD, and 10Y G-Sec */}
          <table className="w-full border-collapse">
            <tbody>
              {[
                ["PPF Rate", "7.1%"],
                ["FD Rate", "6.5%"],
                ["10Y G-Sec", "7.2%"],
                ["EPF Rate", "8.1%"],
              ].map(([name, interest], index) => (
                <tr
                  key={index}
                  className="border-b border-white/30 last:border-b-0"
                >
                  <td className="p-2 text-sm">{name}</td>
                  <td className="p-2 text-sm text-right">{interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Main Section */}
        <div className="col-span-4">
          {/* Summary Cards */}
          <div className="grid grid-cols-5 px-6 h-[150px]">
            {[
              { label: "Total Invested", value: "₹2,50,000" },
              { label: "SIP This Month", value: "₹10,000", color: "text-blue-500" },
              { label: "Current Investment", value: "₹3,50,000" },
              { label: "Expected Returns", value: "₹1,25,000", color: "text-green-500" },
              { label: "Expected Maturity", value: "₹3,75,000", color: "" },
            ].map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <div
                  className="h-[80%] w-[90%] rounded-2xl 
                bg-gradient-to-b from-[#111125] to-transparent 
                shadow-[0_-4px_10px_rgba(255,255,255,0.3)] 
                flex flex-col justify-center items-center text-white/70"
                >
                  <div className={`text-3xl ${item.color || ""} font-bold`}>
                    {item.value}
                  </div>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Investment List */}
      <div className="col-span-4">
        <div className="w-full p-3 flex flex-col items-center gap-5">
          <div className="flex items-center h-[50px] text-white/50 p-3 w-[95%] font-semibold">
            <div className="flex-1 text-center gap-1">
              <div>Name (Type)</div>
            </div>
            <div className="flex-1 flex flex-col text-center">
              <div>Invested</div> <div>Maturity</div>
            </div>
            <div className="flex-1 flex flex-col text-center">
              <div>Start Date</div>
              <div>Maturity Date</div>
            </div>
            <div className="flex-1 text-center">Interest Rate</div>
            <div className="flex-1 text-center">Compounding</div>
            <div className="flex-1 text-center">SIP</div>
          </div>
          {investments.map((investment, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(idx)}
              className="flex items-center text-white p-5 w-[95%] rounded-2xl to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-in-out hover:scale-102 hover:cursor-pointer bg-gradient-to-b from-[#111125]"
            >
              <div className="flex-1 flex flex-col gap-1">
                  <div className="text-xl pl-5">{investment.name}</div>
                  <div className="pl-5">{investment.type}</div>
                </div>
                <div className="flex-1 flex flex-col gap-1 text-center text-sm">
                  <div>₹{investment.invested}</div>
                  <div className="text-green-400">₹{investment.maturityValue}</div>
                </div>
                <div className="flex-1 flex flex-col text-center gap-1 text-sm">
                  <div>{investment.startDate}</div>
                  <div>{investment.maturityDate}</div>
                </div>
                <div className="flex-1 text-center text-sm">{investment.interestRate}%</div>
                <div className="flex-1 text-center text-sm">{investment.compoundingType}</div>
                <div className="flex-1 text-center text-blue-400 text-sm">₹{investment.sip}</div>
            </div>
          ))}
        </div>
      </div>

        {/* Floating Add Button */}
        <button
          className="fixed bottom-10 right-16 bg-[#85EFC4] text-black p-4 rounded-full shadow-lg hover:bg-[#62be99] hover:cursor-pointer hover:scale-105 transition"
          onClick={handleAddClick}
        >
          <Plus size={30} />
        </button>

        {/* Modal */}
        <Modal open={isAddModalOpen} setOpen={setIsAddModalOpen}>
          <InvestmentAdd
            name={name} setName={setName}
            type={type} setType={setType}
            institution={institution} setInstitution={setInstitution}
            invested={invested} setInvested={setInvested}
            startDate={startDate} setStartDate={setStartDate}
            maturityDate={maturityDate} setMaturityDate={setMaturityDate}
            interestRate={interestRate} setInterestRate={setInterestRate}
            compoundingType={compoundingType} setCompoundingType={setCompoundingType}
            sip={sip} setSip={setSip}
            onSave={handleSave}
            isEdit={editIndex !== null}
          />
        </Modal>
        </div>
      </div>
    </div>
  );
};

export default Investment;
