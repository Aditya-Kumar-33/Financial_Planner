import React, { useState } from "react";
import ButtonFuel from "../components/ButtonFuel";
import InputBoxNum from "../components/InputBoxNum";
import { CarFront, Home, Smartphone, Plug } from "lucide-react";
import CarExpense from"../components/CarExpense";

const Expense = () => {
  const [selectedIcon, setSelectedIcon] = useState("Car"); // Default selected icon
  const [selectedPattern, setSelectedPattern] = useState("Petrol");
  const [totalCost, setTotalCost] = useState("");
  const [fuelCost, setFuelCost] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [Age, setAge] = useState("");
  const [annualMileage, setAnnualMileage] = useState("");
  const [vehicleMileage, setVehicleMileage] = useState("");

  const sidebarItems = [
    { icon: Home, label: "House" },
    { icon: CarFront, label: "Car" },
    { icon: Plug, label: "Electronics" },
    { icon: Smartphone, label: "Smartphone" }
  ];

  return (
    <div className="flex flex-col h-screen w-screen pt-[18vh] bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318]">
      <div className="flex w-full text-white">
        
        {/* Sidebar - 15% */}
        <div className="w-[15%] h-full pl-2 text-white flex flex-col gap-2 pt-10">
          {sidebarItems.map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className={`flex p-5 rounded-xl items-center gap-5 cursor-pointer transition-colors 
                ${selectedIcon === label ? "bg-[#030318]" : "hover:bg-[#24263C]"}`}
              onClick={() => setSelectedIcon(label)}
            >
              <Icon size={32} strokeWidth={1.5} />
              <p>{label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-1 h-full pl-10 pr-10">
          
          <div className="w-full">
            <div className="flex justify-center">
              <ButtonFuel selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern} />
            </div>
            <div className="grid grid-cols-3 gap-x-10 gap-y-5 my-10">
              <InputBoxNum label="Car Cost(₹)" placeholder="0" value={totalCost} onChange={setTotalCost} />
              <InputBoxNum label="Fuel Price" placeholder="0" value={fuelCost} onChange={setFuelCost} />
              <InputBoxNum label="Down Payment(%)" placeholder="0%" value={downPayment} onChange={setDownPayment} />
              <InputBoxNum label="Car Age(Years)" placeholder="0" value={Age} onChange={setAge} />
              <InputBoxNum label="Daily dist(km)" placeholder="0" value={annualMileage} onChange={setAnnualMileage} />
              <InputBoxNum label="Mileage (km/l)" placeholder="0" value={vehicleMileage} onChange={setVehicleMileage} />
            </div>
            <div className="flex justify-center">
            <button
              type="button"
              className="text-white w-[25%] rounded-md 
                        bg-[#24263C] hover:bg-[#2D3047] 
                        shadow-[5px_5px_20px_rgba(0,0,0,0.5)] 
                        hover:shadow-[4px_4px_30px_rgba(255,255,255,0.3)] 
                        cursor-pointer font-medium text-sm px-5 py-2.5 me-2 mb-2"
            >
                  Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
      <CarExpense/>
    </div>

  );
};

export default Expense;
