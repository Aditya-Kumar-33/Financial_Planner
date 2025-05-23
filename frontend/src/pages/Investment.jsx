import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus } from "lucide-react";
import InvestmentAdd from "../components/InvestmentAdd";
import Modal from "../components/Modal";

const Investment = () => {
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

  const [investments, setInvestments] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user?.token) {
      axios
        .get("http://localhost:5000/investment", {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((res) => setInvestments(res.data))
        .catch((err) =>
          console.error("Error fetching investments:", err.response?.data || err)
        );
    }
  }, [user?.token]);

  const handleAddClick = () => {
    setEditIndex(null);
    setName("");
    setType("");
    setInstitution("");
    setInvested(0);
    setMaturity(0);
    setStartDate("");
    setMaturityDate("");
    setInterestRate(0);
    setCompoundingType("");
    setSip(0);
    setIsAddModalOpen(true);
  };

  const handleCardClick = (idx) => {
    const inv = investments[idx];
    setEditIndex(idx);
    setName(inv.name);
    setType(inv.type);
    setInstitution(inv.institution);
    setInvested(inv.invested);
    setMaturity(inv.maturityValue || inv.invested);
    setStartDate(inv.startDate);
    setMaturityDate(inv.maturityDate);
    setInterestRate(inv.interestRate);
    setCompoundingType(inv.compoundingType);
    setSip(inv.sip);
    setIsAddModalOpen(true);
  };

  const handleSave = async () => {
    const processedData = {
      userId: user._id,
      name,
      type,
      invested,
      maturity: maturity || invested,
      startDate: new Date(startDate).toISOString(),
      maturityDate: maturityDate ? new Date(maturityDate).toISOString() : null,
      interestRate,
      compoundingType,
      sip,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/investment",
        processedData,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      if (response.status === 201 || response.status === 200) {
        // Refresh list after saving
        const updated = await axios.get("http://localhost:5000/investment", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setInvestments(updated.data);
      }
    } catch (error) {
      console.error("Error details:", error);
      if (error.response) {
        alert(error.response.data.message || "Server error");
      } else {
        alert("Network or client error");
      }
    } finally {
      setIsAddModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318] font-dm-sans">
      <div className="h-[85%] w-[100%] mt-30 grid grid-cols-5">
        {/* Sidebar */}
        <div className="mt-[3vh] ml-[2vh] col-span-1 text-white flex flex-col gap-5 border-r border-white/30 pr-2">
          {/* Market table */}
          <table className="w-full border-collapse">
            <tbody>
              {[
                ["Nifty 50", "₹22,000", "+0.5%(+350)"],
                ["Gold", "₹65,000", "-0.2%(-170)"],
                ["SGB Price", "₹5,500", "+0.1%(+100)"],
                ["Silver", "₹74,500", "+0.3%(+220)"],
                ["REIT Index", "₹320", "+0.8%(+25)"],
              ].map(([name, price, change], i) => (
                <tr key={i} className="border-b border-white/30">
                  <td className="p-2 text-sm">{name}</td>
                  <td className="p-2 text-sm text-right">{price}</td>
                  <td className={`p-2 text-sm text-right ${change.includes("-") ? "text-red-400" : "text-green-400"}`}>
                    {change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full border-collapse">
            <tbody>
              {[
                ["PPF Rate", "7.1%"],
                ["FD Rate", "6.5%"],
                ["10Y G-Sec", "7.2%"],
                ["EPF Rate", "8.1%"],
              ].map(([label, value], i) => (
                <tr key={i} className="border-b border-white/30">
                  <td className="p-2 text-sm">{label}</td>
                  <td className="p-2 text-sm text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Main content */}
        <div className="col-span-4">
          {/* Summary cards */}
          <div className="grid grid-cols-5 px-6 h-[150px]">
            {[
              { label: "Total Invested", value: "₹2,50,000" },
              { label: "SIP This Month", value: "₹10,000", color: "text-blue-500" },
              { label: "Current Investment", value: "₹3,50,000" },
              { label: "Expected Returns", value: "₹1,25,000", color: "text-green-500" },
              { label: "Expected Maturity", value: "₹3,75,000" },
            ].map((item, i) => (
              <div key={i} className="flex justify-center items-center">
                <div className="h-[80%] w-[90%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] flex flex-col justify-center items-center text-white/70">
                  <div className={`text-3xl ${item.color || ""} font-bold`}>
                    {item.value}
                  </div>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Investment list */}
          <div className="col-span-4 w-full p-3 flex flex-col items-center gap-5">
            <div className="flex items-center h-[50px] text-white/50 p-3 w-[95%] font-semibold">
              <div className="flex-1 text-center">Name (Type)</div>
              <div className="flex-1 text-center">Invested / Maturity</div>
              <div className="flex-1 text-center">Start / Maturity Date</div>
              <div className="flex-1 text-center">Interest Rate</div>
              <div className="flex-1 text-center">Compounding</div>
              <div className="flex-1 text-center">SIP</div>
            </div>

            {investments.map((investment, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                className="flex items-center text-white p-5 w-[95%] rounded-2xl bg-gradient-to-b from-[#111125] to-transparent shadow-[0_-4px_10px_rgba(255,255,255,0.3)] hover:scale-102 hover:cursor-pointer transition-transform duration-300"
              >
                <div className="flex-1 flex flex-col gap-1 pl-5">
                  <div className="text-xl">{investment.name}</div>
                  <div>{investment.type}</div>
                </div>
                <div className="flex-1 text-center text-sm">
                  ₹{investment.invested} / <span className="text-green-400">₹{investment.maturityValue}</span>
                </div>
                <div className="flex-1 text-center text-sm">
                  {investment.startDate?.split("T")[0]}<br />
                  {investment.maturityDate?.split("T")[0]}
                </div>
                <div className="flex-1 text-center text-sm">{investment.interestRate}%</div>
                <div className="flex-1 text-center text-sm">{investment.compoundingType}</div>
                <div className="flex-1 text-center text-blue-400 text-sm">₹{investment.sip}</div>
              </div>
            ))}
          </div>

          {/* Add Investment Floating Button */}
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
