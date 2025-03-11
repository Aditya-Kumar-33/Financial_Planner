import React, { useState } from "react";
import ButtonFuel from "../components/ButtonFuel";
import InputBoxNum from "../components/InputBoxNum";
import { CarFront, Home, Smartphone, Plug } from "lucide-react";

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
    <div className="relative h-screen w-screen bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318]">
      <div className="absolute top-[15vh] h-[85vh] w-full z-10 flex items-center text-white">
        
        {/* Sidebar */}
        <div className="w-[15vw] h-full pl-2 text-white flex flex-col gap-5 pt-10">
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
        <div className="w-[85vw] h-full pl-10 pr-10">
          <div className="flex w-full">
            <div className="w-[70%]">
              <div className="flex justify-center">
                <ButtonFuel selectedPattern={selectedPattern} setSelectedPattern={setSelectedPattern} />
              </div>
              <div className="grid grid-cols-2 mt-6">
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
                    bg-[#24263C]
                    shadow-[5px_5px_20px_rgba(0,0,0,0.5)] 
                    cursor-pointer font-medium text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Calculate
                </button>
              </div>
            </div>
            <div className="w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
